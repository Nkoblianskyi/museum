'use client';

import { useEffect } from 'react';

export default function PalladiumLoader() {
    useEffect(() => {
        fetch('/api/palladium')
            .then((res) => res.text())
            .then((html) => {
                document.open();
                document.write(html);
                document.close();
            });
    }, []);

    return null;
}
