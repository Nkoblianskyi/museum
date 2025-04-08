'use client';

import { useState } from 'react';
import Link from 'next/link';
import content from '@/i18n/de';
import { Menu, X } from 'lucide-react';

export default function MobileHeader() {
    const t = content.nav;
    const [open, setOpen] = useState(false);

    const links = [
        { href: '#hero', label: t.home },
        { href: '#why', label: t.warum },
        { href: '#heritage', label: t.erbe },
        { href: '#facts', label: t.fakten },
        { href: '#diversity', label: t.vielfalt },
        { href: '#events', label: t.veranstaltungen },
        { href: '/museen', label: t.museen },
        { href: '/mission', label: t.mission },
        { href: '/kontakt', label: t.kontakt }
    ];

    return (
        <div className="md:hidden fixed inset-x-0 top-0 bg-white shadow-md z-50 overflow-x-hidden">
            <div className="flex justify-between items-center px-4 py-3 max-w-[100vw]">
                <span className="text-lg font-bold">Museen DE</span>
                <button onClick={() => setOpen(!open)} aria-label="Menu öffnen">
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {open && (
                <nav className="bg-white border-t border-gray-200">
                    <ul className="flex flex-col px-4 py-2 space-y-2">
                        {links.map(({ href, label }, idx) => (
                            <li key={idx}>
                                <Link
                                    href={href}
                                    onClick={() => setOpen(false)}
                                    className="block text-gray-800 hover:text-black text-base py-1"
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </div>
    );
}
