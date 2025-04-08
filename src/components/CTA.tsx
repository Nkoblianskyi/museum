'use client';

import content from '@/i18n/de';
import { useRouter } from 'next/navigation';

export default function CTA() {
    const t = content.cta;
    const router = useRouter();

    return (
        <section
            id="cta"
            className="py-16 px-4 sm:px-6 lg:px-10 bg-gradient-to-br from-yellow-50 via-white to-blue-50 text-center"
        >
            <div className="max-w-3xl mx-auto space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                    {t.title}
                </h2>

                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed px-2 sm:px-6">
                    {t.text}
                </p>

                <div className="pt-2 sm:pt-4">
                    <button
                        onClick={() => router.push('/kontakt')}
                        className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg rounded-lg hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition duration-300"
                    >
                        {t.button}
                    </button>
                </div>
            </div>
        </section>
    );
}
