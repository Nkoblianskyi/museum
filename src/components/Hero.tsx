'use client';

import content from '@/i18n/de';
import Link from 'next/link';
import SEO from '../lib/seo';

export default function Hero() {
    const t = content.hero;

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "headline": t.title,
        "description": t.description,
        "image": "/hero.jpg",
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
                description={t.description}
                lang="de"
                url={undefined}
                image={undefined}
            />
            <section
                id="hero"
                className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-cover bg-center"
                style={{ backgroundImage: "url('/hero.jpg')" }}
                itemScope
                itemType="http://schema.org/CreativeWork"
            >

                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 text-center text-white space-y-6 max-w-4xl">
                    <h1
                        className="text-2xl sm:text-3xl md:text-2xl lg:text-5xl xl:text-6xl font-bold leading-tight drop-shadow"
                        itemProp="name"
                    >
                        {t.title}
                    </h1>
                    <p
                        className="text-base sm:text-lg md:text-md lg:text-xl text-gray-200 drop-shadow"
                        itemProp="description"
                    >
                        {t.description}
                    </p>
                    <Link
                        href="#why"
                        className="inline-block px-6 py-3 bg-white text-black font-medium text-sm sm:text-base rounded-lg hover:bg-gray-100 transition"
                        itemProp="url"
                    >
                        {t.button}
                    </Link>
                </div>
            </section>
        </>
    );
}
