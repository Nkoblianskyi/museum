'use client';

import content from '@/i18n/de';
import SEO from '@/lib/seo';
import Image from 'next/image';

export default function Heritage() {
    const t = content.heritage;

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": t.title,
        "description": t.text,
        "image": "/erbe.jpg",
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

            <SEO
                title={t.title}
                description={t.title}
                lang="de"
                url={undefined}
                image={undefined}
            />

            <section id="heritage" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
                <div className="max-w-5xl mx-auto space-y-8">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center sm:text-left text-gray-900">
                        {t.title}
                    </h2>

                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-center sm:text-left whitespace-pre-line">
                        {t.text}
                    </p>

                    <div className="mt-6">
                        <div className="relative w-full max-w-5xl aspect-[16/9] mx-auto">
                            <Image
                                src="/section3.jpg"
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
