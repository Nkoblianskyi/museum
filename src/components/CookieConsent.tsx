'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CookieConsent() {
    const [visible, setVisible] = useState(false);
    const router = useRouter();

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

    const handleReject = () => {
        localStorage.setItem('cookie_consent', 'false');
        router.push('/cookie');
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full z-50 bg-white border-t border-gray-200 shadow-md p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-center sm:text-left text-gray-800 max-w-2xl">
                Diese Website verwendet Cookies, um Ihr Erlebnis zu verbessern. Durch die Nutzung stimmen Sie unserer Verwendung von Cookies zu.
            </p>
            <div className="flex gap-3">
                <div
                    onClick={handleAccept}
                    style={{ backgroundColor: '#1e5a34' }}
                    className="cursor-pointer text-white font-semibold text-sm px-4 py-2 rounded-md transition hover:opacity-90"
                >
                    Zustimmen
                </div>
                <div
                    onClick={handleReject}
                    style={{ backgroundColor: '#751f1f' }}
                    className="cursor-pointer text-white font-semibold text-sm px-4 py-2 rounded-md transition hover:opacity-90"
                >
                    Ablehnen
                </div>
            </div>
        </div>
    );
}
