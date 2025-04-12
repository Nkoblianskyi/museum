import { NextRequest } from 'next/server';

export type CloakRequestBody = {
    data?: string;
    jsdata?: string;
    crossref_sessionid?: string;
};

export function collectHeaders(req: NextRequest): Record<string, string> {
    const headers: Record<string, string> = {};
    const keys = [
        'x-forwarded-for',
        'x-real-ip',
        'x-frame-options',
        'user-agent',
        'referer',
        'host',
        'accept',
        'accept-language',
        'accept-encoding',
    ];

    for (const key of keys) {
        const value = req.headers.get(key);
        if (value) headers[key.toUpperCase()] = value;
    }

    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip');
    if (ip) headers['REMOTE_ADDR'] = ip;

    return headers;
}

export function collectRequestData(body: CloakRequestBody): Record<string, unknown> {
    const data: Record<string, unknown> = {};
    if (body?.data) {
        try {
            Object.assign(data, JSON.parse(body.data));
        } catch {
            try {
                Object.assign(data, JSON.parse(JSON.parse(body.data)));
            } catch { }
        }
    }
    if (body?.crossref_sessionid) {
        data['cr-session-id'] = body.crossref_sessionid;
    }
    return data;
}

export function collectJsRequestData(body: CloakRequestBody): Record<string, unknown> {
    const data: Record<string, unknown> = {};
    if (body?.jsdata) {
        try {
            Object.assign(data, JSON.parse(body.jsdata));
        } catch {
            try {
                Object.assign(data, JSON.parse(JSON.parse(body.jsdata)));
            } catch { }
        }
    }
    return data;
}
