'use client';

import content from '@/i18n/de';
import { useRouter } from 'next/navigation';

type Museum = {
    id: number;
    name: string;
    description: string;
};

export default function Museen() {
    const t = content.museen;
    const router = useRouter();

    let museumCards: Museum[] = t.list.slice(0, 4);
    if (museumCards.length < 4) {
        museumCards = [
            ...museumCards,
            {
                id: 4,
                name: "Weitere Museen",
                description: "Weitere interessante Museen werden bald vorgestellt.",
            },
        ];
    }

    return (
        <section
            id="museen"
            className="py-16 px-4 sm:px-6 lg:px-8"
            style={{
                backgroundImage: 'url(/museen.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="max-w-5xl mx-auto bg-white p-6 sm:p-10 md:p-12 rounded-xl shadow-md">
                {/* Заголовок */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">
                    Museen in Deutschland: Vielfalt, die inspiriert
                </h2>

                <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-8 text-center">
                    Deutschland ist ein Land, in dem Museen das Tor zu verschiedenen Welten sind...
                </p>

                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-gray-800">
                    Warum sind deutsche Museen etwas Besonderes?
                </h3>

                <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-12 text-center">
                    Museen in Deutschland sind nicht einfach nur Gebäude mit Exponaten...
                </p>

                {/* Блок 1 карточка */}
                <div className="flex justify-center mb-8">
                    <div className="w-full md:w-2/3 bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                        <h3 className="text-lg sm:text-xl font-semibold mb-2">{museumCards[0].name}</h3>
                        <p className="text-gray-700 mb-4 text-sm sm:text-base">{museumCards[0].description}</p>
                        <button
                            onClick={() => router.push('/kontakt')}
                            className="inline-block bg-black text-white text-sm rounded px-5 py-2 hover:bg-gray-800 transition"
                        >
                            {t.button}
                        </button>
                    </div>
                </div>

                {/* Блок 2 карточки */}
                <div className="flex flex-col md:flex-row md:justify-between gap-6 mb-8">
                    {museumCards.slice(1, 3).map((museum) => (
                        <div
                            key={museum.id}
                            className="w-full md:w-[48%] bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
                        >
                            <h3 className="text-lg sm:text-xl font-semibold mb-2">{museum.name}</h3>
                            <p className="text-gray-700 mb-4 text-sm sm:text-base">{museum.description}</p>
                            <button
                                onClick={() => router.push('/kontakt')}
                                className="inline-block bg-black text-white text-sm rounded px-5 py-2 hover:bg-gray-800 transition"
                            >
                                {t.button}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Блок 1 карточка */}
                <div className="flex justify-center mb-10">
                    <div className="w-full md:w-2/3 bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                        <h3 className="text-lg sm:text-xl font-semibold mb-2">{museumCards[3].name}</h3>
                        <p className="text-gray-700 mb-4 text-sm sm:text-base">{museumCards[3].description}</p>
                        <button
                            onClick={() => router.push('/kontakt')}
                            className="inline-block bg-black text-white text-sm rounded px-5 py-2 hover:bg-gray-800 transition"
                        >
                            {t.button}
                        </button>
                    </div>
                </div>

                {/* Кнопка знизу */}
                <div className="text-center md:text-right">
                    <button
                        onClick={() => router.push('/kontakt')}
                        className="bg-black text-white text-sm rounded px-6 py-2 hover:bg-gray-800 transition"
                    >
                        {t.button}
                    </button>
                </div>
            </div>
        </section>
    );
}
