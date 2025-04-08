'use client';

import { useEffect, useState } from 'react';

export default function CookieConsent() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const hasConsent = localStorage.getItem('cookie_consent');
        if (!hasConsent) {
            setVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie_consent', 'true');
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full z-50 bg-white border-t border-gray-200 shadow-md p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-center sm:text-left text-gray-800">
                Diese Website verwendet Cookies, um Ihr Erlebnis zu verbessern. Durch die Nutzung stimmen Sie unserer Verwendung von Cookies zu.
            </p>
            <button
                onClick={handleAccept}
                className="bg-black text-white text-sm px-4 py-2 rounded-md hover:bg-gray-900 transition"
            >
                Zustimmen
            </button>
        </div>
    );
}
