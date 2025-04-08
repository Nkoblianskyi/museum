'use client';

import content from '@/i18n/de';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function MuseenGrid() {
    const t = content.museen;
    const router = useRouter();

    // Отримуємо до 4 елементів із списку
    const items = [...t.list.slice(0, 4)];
    // Якщо елементів менше 4, додаємо заповнювач
    while (items.length < 4) {
        items.push({
            id: items.length + 1,
            name: "Mehr Museen",
            description: "Weitere interessante Museen werden bald vorgestellt.",
            image: "/placeholder.jpg", // Додайте шлях до зображення-заповнювача або видаліть це поле
        });
    }

    return (
        <section
            id="museen-preview"
            className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100"
        >
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-8">{t.title}</h2>
                {/* Сітка з двома стовпцями */}
                <div className="grid grid-cols-2 gap-8">
                    {items.map((museum) => (
                        <div
                            key={museum.id}
                            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
                        >
                            {museum.image && (
                                <div className="relative w-full h-48 mb-4">
                                    <Image
                                        src={museum.image}
                                        alt={museum.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="rounded-md object-cover"
                                    />
                                </div>
                            )}
                            <h3 className="text-xl font-semibold mb-2 text-center">
                                {museum.name}
                            </h3>
                            <p className="text-gray-700 text-center">{museum.description}</p>
                        </div>
                    ))}
                </div>
                {/* Кнопка, що веде на сторінку музеїв */}
                <div className="mt-12 text-center">
                    <button
                        onClick={() => router.push('/museen')}
                        className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
                    >
                        {t.button}
                    </button>
                </div>
            </div>
        </section>
    );
}
