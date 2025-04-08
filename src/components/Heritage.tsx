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
            <section id="heritage" className="py-16 px-6 bg-gray-100">
                <div className="max-w-4xl mx-auto space-y-6">
                    <h2 className="text-2xl md:text-3xl font-semibold text-center sm:text-left">{t.title}</h2>
                    <p className="text-base md:text-lg text-gray-700 whitespace-pre-line text-center sm:text-left">{t.text}</p>
                    <div className="mt-8">
                        <Image
                            src="/section3.jpg"
                            alt={t.title}
                            className="rounded-lg shadow-md w-full h-auto object-cover"
                            width={1200}
                            height={600}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
