'use client';

import content from '@/i18n/de';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function MuseenGrid() {
    const t = content.museen;
    const router = useRouter();

    const items = [...t.list.slice(0, 4)];
    while (items.length < 4) {
        items.push({
            id: items.length + 1,
            name: "Mehr Museen",
            description: "Weitere interessante Museen werden bald vorgestellt.",
            image: "/placeholder.jpg",
        });
    }

    return (
        <section
            id="museen-preview"
            className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100"
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
                    {t.title}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
                    {items.map((museum, idx) => (
                        <div
                            key={museum.id}
                            onClick={() => router.push('/museen')}
                            className="cursor-pointer bg-white p-5 sm:p-6 rounded-xl shadow hover:shadow-lg transition duration-300 flex flex-col group"
                        >
                            {museum.image && (
                                <div className="relative w-full aspect-[4/3] mb-4 overflow-hidden rounded-md">
                                    <Image
                                        src={museum.image}
                                        alt={museum.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        priority={idx === 0}
                                    />
                                </div>
                            )}
                            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center text-gray-900">
                                {museum.name}
                            </h3>
                            <p className="text-sm sm:text-base text-center text-gray-700 leading-relaxed">
                                {museum.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <button
                        onClick={() => router.push('/museen')}
                        className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition text-sm sm:text-base"
                    >
                        {t.button}
                    </button>
                </div>
            </div>
        </section>
    );
}
