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

                <p className="text-sm sm:text-base md:text-lg text-gray-700 px-2 sm:px-6">
                    {t.text}
                </p>

                <div>
                    <button
                        onClick={() => router.push('/kontakt')}
                        className="mt-4 sm:mt-6 bg-black text-white px-5 sm:px-8 py-2.5 sm:py-3.5 text-sm sm:text-base md:text-lg rounded-lg hover:bg-gray-800 transition duration-300"
                    >
                        {t.button}
                    </button>
                </div>
            </div>
        </section>
    );
}
