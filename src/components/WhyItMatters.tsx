'use client';

import content from '@/i18n/de';
import Image from 'next/image';

export default function WhyItMatters() {
    const t = content.why;

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": t.title,
        "description": t.text,
        "image": "/section2.jpg",
        "author": {
            "@type": "Organization",
            "name": "Museen Deutschlands"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Museen Deutschlands",
            "logo": {
                "@type": "ImageObject",
                "url": "/logo.png"
            }
        },
        "datePublished": "2025-04-07",
        "dateModified": "2025-04-07"
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <section
                id="why"
                className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
            >
                <div className="max-w-6xl mx-auto space-y-8">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900">
                        {t.title}
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 text-center whitespace-pre-line leading-relaxed">
                        {t.text}
                    </p>

                    <div className="mt-8 flex justify-center">
                        <div className="relative w-full max-w-4xl aspect-[16/9]">
                            <Image
                                src="/section2.jpg"
                                alt={t.title}
                                fill
                                priority
                                className="rounded-lg shadow-md object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 75vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
