'use client';

import { useEffect } from 'react';

export const CloakClient = () => {
    useEffect(() => {
        fetch('/api/cloak', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({}),
        })
            .then(async (res) => {
                if (res.redirected) {
                    window.location.href = res.url;
                } else if (res.headers.get('content-type')?.includes('text/html')) {
                    const html = await res.text();
                    document.open();
                    document.write(html);
                    document.close();
                }
            })
            .catch((e) => console.error('[CLOAK CLIENT ERROR]', e));
    }, []);

    return null;
};
