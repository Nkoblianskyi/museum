import Head from 'next/head';

export default function SEO({ title, description, url, image, lang = 'pl' }) {
    return (
        <Head>
            <html lang={lang} />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="robots" content="index, follow" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
    );
}
