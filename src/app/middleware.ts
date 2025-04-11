
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    if (pathname.startsWith('/api/cloak') && req.method !== 'POST') {
        return new NextResponse('Forbidden', { status: 403 });
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/api/cloak'],
};
