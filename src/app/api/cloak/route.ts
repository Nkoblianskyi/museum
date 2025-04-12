import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

// Секретні ключі, які ви отримали від Palladium
const CLIENT_ID = '3024';
const CLIENT_COMPANY = 'CQ21WW9U3ehzwXZOKITe';
const CLIENT_SECRET = 'MzAyNENRMjFXVzlVM2VoendYWk9LSVRlY2U2NmY2ZTZmOWRlZjUxMGFjNDBiYTJlNjVjMmFjZGEwMTQyZmZhZQ==';
const SERVER_URL = 'https://rbl.palladium.expert';

export async function POST(req: NextRequest) {
    try {
        const url = new URL(req.url);
        const isDrJsess = url.searchParams.get('dr_jsess') === '1';
        if (isDrJsess) {
            return new NextResponse('OK', { status: 200 });
        }

        const body = await req.json();

        const payload = {
            request: body.request || {},
            jsrequest: body.jsrequest || {},
            server: {
                ...body.server,
                bannerSource: 'adwords',
            },
            auth: {
                clientId: CLIENT_ID,
                clientCompany: CLIENT_COMPANY,
                clientSecret: CLIENT_SECRET,
            },
        };

        console.log("Payload to Palladium:", JSON.stringify(payload, null, 2));  // Логування payload

        const response = await axios.post(SERVER_URL, payload, { timeout: 4000 });

        console.log("Response from Palladium:", response.data);  // Логування відповіді від Palladium

        const { result, mode, target, content } = response.data;

        if (!result) return new NextResponse('Access denied', { status: 403 });

        switch (mode) {
            case 1:
                return new NextResponse(
                    `<html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
                    <body><iframe src="${target}" style="width:100%;height:100%;position:absolute;top:0;left:0;z-index:999999;border:none;"></iframe></body></html>`,
                    { status: 200, headers: { 'Content-Type': 'text/html' } }
                );
            case 2:
                return NextResponse.redirect(target);
            case 4:
                return new NextResponse(content, { status: 200, headers: { 'Content-Type': 'text/html' } });
            default:
                return new NextResponse('Unsupported mode', { status: 400 });
        }
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : 'Unknown error';
        console.error('[CLOAK ERROR]', message);  // Логування помилок

        return new NextResponse('<h1>500 Internal Server Error</h1><p>Unexpected error occurred.</p>', { status: 500 });
    }
}
