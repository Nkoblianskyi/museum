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
                style={{backgroundImage: "url('/hero.jpg')" }}
                className="min-h-[90vh] mt-2 flex flex-col justify-center items-center gap-6 px-6 py-16 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
                itemScope
                itemType="http://schema.org/CreativeWork"
            >
                <h1
                    className="text-4xl font-bold leading-snug max-w-4xl text-center text-shadow-lg sm:text-3xl sm:max-w-3xl md:text-5xl lg:text-6xl text-white drop-shadow-lg"
                    itemProp="name"
                >
                    {t.title}
                </h1>
                <p
                    className="text-lg max-w-3xl text-gray-200 text-center sm:text-base sm:max-w-2xl md:text-xl lg:text-2xl drop-shadow-lg"
                    itemProp="description"
                >
                    {t.description}
                </p>
                <Link
                    href="#why"
                    className="mt-4 inline-block px-6 py-3 bg-black text-white text-sm rounded hover:bg-gray-800 transition sm:px-4 sm:py-2 sm:text-base"
                    itemProp="url"
                >
                    {t.button}
                </Link>
            </section>
        </>
    );
}
