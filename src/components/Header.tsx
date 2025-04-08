'use client';

import Link from 'next/link';
import content from '@/i18n/de';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Header() {
    const t = content.nav;
    const pathname = usePathname();
    const [currentHash, setCurrentHash] = useState('');

    useEffect(() => {
        const updateHash = () => setCurrentHash(window.location.hash);
        updateHash();
        window.addEventListener('hashchange', updateHash);
        return () => window.removeEventListener('hashchange', updateHash);
    }, []);

    const links = [
        { href: '#hero', label: t.home },
        { href: '#why', label: t.warum },
        { href: '#heritage', label: t.erbe },
        { href: '#facts', label: t.fakten },
        { href: '#museen-preview', label: t.vielfalt },
        { href: '#events', label: t.veranstaltungen },
        { href: '/museen', label: t.museen },
        { href: '/mission', label: t.mission },
        { href: '/kontakt', label: t.kontakt }
    ];

    return (
        <aside
            className="hidden md:flex fixed left-0 top-0 h-full w-56 bg-white shadow-md p-6 flex-col justify-between z-50"
            aria-label="Hauptnavigation"
        >
            <nav className="space-y-4">
                {links.map(({ href, label }, index) => {
                    const isAnchor = href.startsWith('#');
                    const isActive = isAnchor
                        ? pathname === '/' && currentHash === href
                        : pathname === href;

                    return (
                        <Link
                            key={index}
                            href={isAnchor ? `/${href}` : href}
                            scroll={false}
                            onClick={() => {
                                if (isAnchor) {
                                    const el = document.querySelector(href);
                                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                                    setCurrentHash(href);
                                }
                            }}
                            className={`block transition px-1 ${isActive
                                ? 'text-black font-semibold border-l-4 border-black pl-2'
                                : 'text-gray-800 hover:text-black'
                                }`}
                        >
                            {label}
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}
