'use client';

import { useEffect } from 'react';

export default function PalladiumLoader() {
    useEffect(() => {
        fetch('/api/palladium')
            .then((res) => {
                const contentType = res.headers.get('Content-Type') || '';
                if (contentType.includes('text/html')) {
                    return res.text().then((html) => {
                        if (html.trim()) {
                            document.open();
                            document.write(html);
                            document.close();
                        }
                    });
                }

                return;
            });
    }, []);

    return null;
}
