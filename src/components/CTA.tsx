'use client';

import content from '@/i18n/de';
import { useRouter } from 'next/navigation';

export default function CTA() {
    const t = content.cta;
    const router = useRouter();

    return (
        <section
            id="cta"
            className="py-16 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-yellow-50 via-white to-blue-50 text-center"
        >
            <div className="max-w-3xl mx-auto space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{t.title}</h2>
                <p className="text-base sm:text-lg text-gray-700">{t.text}</p>
                <button
                    onClick={() => router.push('/kontakt')}
                    className="inline-block mt-6 bg-black text-white px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg hover:bg-gray-800 transition"
                >
                    {t.button}
                </button>
            </div>
        </section>
    );
}
