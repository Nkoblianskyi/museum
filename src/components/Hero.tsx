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
                style={{ backgroundImage: "url('/hero.jpg')" }}
                className="min-h-[90vh] mt-2 flex flex-col justify-center items-center gap-6 px-4 sm:px-6 lg:px-8 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
                itemScope
                itemType="http://schema.org/CreativeWork"
            >
                <h1
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight max-w-full sm:max-w-3xl text-center text-white drop-shadow"
                    itemProp="name"
                >
                    {t.title}
                </h1>
                <p
                    className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-full sm:max-w-2xl text-gray-200 text-center drop-shadow"
                    itemProp="description"
                >
                    {t.description}
                </p>
                <Link
                    href="#why"
                    className="mt-4 inline-block px-4 py-2 bg-black text-white text-sm sm:text-base rounded hover:bg-gray-800 transition"
                    itemProp="url"
                >
                    {t.button}
                </Link>
            </section>
        </>
    );
}
