'use client';

import content from '@/i18n/de';
import Link from 'next/link';

export default function Footer() {
    const t = content.footer;

    return (
        <footer className="bg-gray-900 text-white pt-10 pb-6 px-4 sm:px-6 lg:px-8 mt-12">
            <div className="max-w-6xl mx-auto flex flex-col gap-8 text-sm sm:text-base">


                <div className="flex flex-col md:flex-row justify-around items-center md:items-start gap-8">

                    <address
                        className="not-italic text-center md:text-left space-y-1 text-sm sm:text-base md:text-[15px] leading-relaxed max-w-md"
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
                        className="flex flex-col items-center md:items-center space-y-2 text-sm sm:text-base md:text-[15px]"
                        aria-label="Footer Navigation"
                    >
                        <Link href="/kontakt">
                            <button className="bg-white text-gray-900 px-6 py-2 rounded-md hover:bg-gray-200 transition w-full max-w-xs md:w-auto text-sm sm:text-base">
                                {t.schreiben}
                            </button>
                        </Link>
                        <Link href="/cookie" className="hover:underline text-gray-300">Cookie</Link>
                        <Link href="/terms-page" className="hover:underline text-gray-300">Terms</Link>
                        <Link href="/privacy-page" className="hover:underline text-gray-300">Privacy Policy</Link>
                    </nav>
                </div>

                <div className="border-t border-gray-800 pt-4 text-center text-xs sm:text-sm text-gray-400 leading-snug">
                    <p>© {new Date().getFullYear()} Museen Deutschlands</p>
                    <p>Alle Rechte vorbehalten</p>
                </div>
            </div>
        </footer>
    );
}
