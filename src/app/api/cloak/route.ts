export const runtime = 'nodejs';

import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import {
    collectHeaders,
    collectRequestData,
    collectJsRequestData,
    CloakRequestBody,
} from '@/utils/cloakHelpers';

const SERVER_URL = 'https://rbl.palladium.expert';

export async function POST(req: NextRequest) {
    try {
        const url = new URL(req.url);
        const isDrJsess = url.searchParams.get('dr_jsess') === '1';
        if (isDrJsess) {
            return new NextResponse('OK', { status: 200 });
        }

        const body: CloakRequestBody = await req.json();

        const payload = {
            request: collectRequestData(body),
            jsrequest: collectJsRequestData(body),
            server: collectHeaders(req),
            auth: {
                clientId: 3024,
                clientCompany: 'NYWW5iCjpYIGyDaN13z2',
                clientSecret:
                    'MzAyNE5ZV1c1aUNqcFlJR3lEYU4xM3oyY2U2NmY2ZTZmOWRlZjUxMGFjNDBiYTJlNjVjMmFjZGEwMTQyZmZhZQ==',
            },
        };

        payload.server.bannerSource = 'adwords';

        const response = await axios.post(
            SERVER_URL,
            new URLSearchParams(flatten(payload)),
            { timeout: 4000 }
        );

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
                return new NextResponse(content, {
                    status: 200,
                    headers: { 'Content-Type': 'text/html' },
                });
            default:
                return new NextResponse('Unsupported mode', { status: 400 });
        }
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : 'Unknown error';
        console.error('[CLOAK ERROR]', message);

        return new NextResponse(
            `<h1>500 Internal Server Error</h1><p>Unexpected error occurred.</p>`,
            { status: 500 }
        );
    }
}

function flatten(obj: Record<string, unknown>, prefix = ''): Record<string, string> {
    const res: Record<string, string> = {};
    for (const [key, val] of Object.entries(obj)) {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
            Object.assign(res, flatten(val as Record<string, unknown>, `${prefix}${key}.`));
        } else {
            res[`${prefix}${key}`] = String(val);
        }
    }
    return res;
}