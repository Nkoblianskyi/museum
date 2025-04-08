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
                className="py-16 px-4 sm:px-6 lg:px-8 bg-white transition-opacity duration-1000"
            >
                <div className="max-w-7xl mx-auto space-y-6">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center">
                        {t.title}
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-700 whitespace-pre-line text-center">
                        {t.text}
                    </p>
                    <div className="mt-8 flex justify-center">
                        <Image
                            src="/section2.jpg"
                            alt={t.title}
                            className="rounded-lg shadow-md w-full max-w-3xl h-auto object-cover"
                            width={1200}
                            height={590}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
