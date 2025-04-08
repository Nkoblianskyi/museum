'use client';

import content from '@/i18n/de';
import Link from 'next/link';

export default function Footer() {
    const t = content.footer;

    return (
        <footer className="bg-gray-900 text-white py-10 px-6 mt-12">
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
                <address className="not-italic" aria-label="Kontaktinformationen">
                    <h4 className="text-xl font-semibold mb-2">{t.contact}</h4>
                    <p>{t.address}</p>
                    <p>{t.phone}</p>
                    <p>
                        <a href={`mailto:${t.email}`} className="hover:underline">
                            {t.email}
                        </a>
                    </p>
                </address>
                <nav className="flex flex-col" aria-label="Footer Navigation">
                    <Link href="/kontakt" className="hover:underline text-center">
                        <button>{t.schreiben}</button>
                    </Link>
                </nav>
                <section className="text-sm text-gray-400" aria-label="Copyright">
                    <p>© {new Date().getFullYear()} Museen Deutschlands</p>
                    <p>Alle Rechte vorbehalten</p>
                </section>
            </div>
        </footer>
    );
}
