import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    return handleRequest(req);
}

export async function POST(req: NextRequest) {
    return handleRequest(req);
}

async function handleRequest(req: NextRequest) {
    const rawBody = await req.text();
    const parsedBody = Object.fromEntries(new URLSearchParams(rawBody));

    // Готуємо серверні заголовки
    const server = {
        REMOTE_ADDR: req.headers.get('x-forwarded-for') || '0.0.0.0',
        SERVER_PROTOCOL: 'HTTP/1.1',
        REQUEST_URI: req.url,
        HTTP_USER_AGENT: req.headers.get('user-agent') || '',
        HTTP_ACCEPT: req.headers.get('accept') || '',
        HTTP_HOST: req.headers.get('host') || '',
        REQUEST_TIME_FLOAT: (Date.now() / 1000).toString(),
        SERVER_PORT: '443', // ← додано
        bannerSource: 'adwords',
    };


    const body = new URLSearchParams();

    // Формуємо server[*]
    Object.entries(server).forEach(([key, value]) => {
        body.append(`server[${key}]`, value);
    });

    // request і jsrequest — з тіла запиту
    body.append('request', JSON.stringify(parsedBody?.data || {}));
    body.append('jsrequest', JSON.stringify(parsedBody?.jsdata || {}));

    // auth
    body.append('auth[clientId]', '3024');
    body.append('auth[clientCompany]', 'CQ21WW9U3ehzwXZOKITe');
    body.append(
        'auth[clientSecret]',
        'MzAyNENRMjFXVzlVM2VoendYWk9LSVRlY2U2NmY2ZTZmOWRlZjUxMGFjNDBiYTJlNjVjMmFjZGEwMTQyZmZhZQ=='
    );

    try {
        const response = await fetch('https://rbl.palladium.expert', {
            method: 'POST',
            body,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        const result = await response.json();

        if (result?.result && result?.mode) {
            const mode = result.mode;
            const target = result.target;
            const content = result.content;

            if (mode === 1) {
                return new Response(
                    `<iframe src="${target}" style="width:100%;height:100vh;border:none;"></iframe>`,
                    { headers: { 'Content-Type': 'text/html' } }
                );
            } else if (mode === 2) {
                return NextResponse.redirect(target, 302);
            } else if (mode === 4 && content) {
                return new Response(content, {
                    headers: { 'Content-Type': 'text/html' },
                });
            }
        }

        return NextResponse.json(result);
    } catch (error) {
        console.error('Palladium error:', error);
        return new Response(
            '<h1>500 Internal Server Error</h1><p>Unexpected error on the server.</p>',
            { status: 500, headers: { 'Content-Type': 'text/html' } }
        );
    }
}
