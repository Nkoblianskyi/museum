'use client';

import content from '@/i18n/de';
import Link from 'next/link';

export default function Footer() {
    const t = content.footer;

    return (
        <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8 mt-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 text-sm sm:text-base">

                <address
                    className="not-italic text-center md:text-left text-sm sm:text-base md:text-[15px] leading-relaxed space-y-2"
                    aria-label="Kontaktinformationen"
                >
                    <h4 className="text-lg sm:text-xl font-semibold mb-2">{t.contact}</h4>
                    <p>{t.address}</p>
                    <p>{t.phone}</p>
                    <p>
                        <Link href={`mailto:${t.email}`} className="hover:underline break-words">
                            {t.email}
                        </Link>
                    </p>
                </address>

                <nav
                    className="flex flex-col items-center md:items-start justify-center gap-2 text-center md:text-left text-sm sm:text-base md:text-[15px]"
                    aria-label="Footer Navigation"
                >
                    <Link href="/kontakt">
                        <button className="bg-white text-gray-900 px-5 sm:px-6 py-2 rounded-md hover:bg-gray-200 transition w-full max-w-xs md:w-auto">
                            {t.schreiben}
                        </button>
                    </Link>
                    <Link href={`/`} className="hover:underline text-gray-300">
                        Cookie
                    </Link>
                    <Link href={`/`} className="hover:underline text-gray-300">
                        Terms
                    </Link>
                    <Link href={`/`} className="hover:underline text-gray-300">
                        Privacy Policy
                    </Link>
                </nav>

                <section
                    className="text-center md:text-right text-xs sm:text-sm md:text-[14px] text-gray-400 space-y-1 leading-snug"
                    aria-label="Copyright"
                >
                    <p>© {new Date().getFullYear()} Museen Deutschlands</p>
                    <p>Alle Rechte vorbehalten</p>
                </section>
            </div>
        </footer>
    );
}
