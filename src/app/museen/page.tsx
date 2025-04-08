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

    // Отримуємо до 4 записів
    let museumCards: Museum[] = t.list.slice(0, 4);

    // Якщо записів менше 4, додаємо фейкову карточку як заповнювач,
    // щоб макет завжди складався з 4 блоків (1, 2, 1)
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
            className="py-16 px-6"
            style={{
                backgroundImage: 'url(/museen.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl">
                {/* Верхня частина: Заголовок та вступний текст */}
                <h2 className="text-4xl font-bold mb-4 text-center">
                    Museen in Deutschland: Vielfalt, die inspiriert
                </h2>
                <p className="text-lg text-gray-700 mb-6 text-center">
                    Deutschland ist ein Land, in dem Museen das Tor zu verschiedenen Welten sind:
                    von alten Zivilisationen bis hin zu moderner Technologie. Mit mehr als 6.800 Museen
                    im ganzen Land ist für jeden etwas dabei – egal, ob Sie Kunstliebhaber, Wissenschaftsfan
                    oder jemand sind, der eine Verbindung zur Geschichte sucht. Auf dieser Seite zeigen wir
                    Ihnen die Vielfalt der deutschen Museen und stellen Ihnen ein paar ikonische Einrichtungen
                    vor, die einen Besuch wert sind.
                </p>
                <h3 className="text-2xl font-semibold mb-4 text-center">
                    Warum sind deutsche Museen etwas Besonderes?
                </h3>
                <p className="text-lg text-gray-700 mb-12 text-center">
                    Museen in Deutschland sind nicht einfach nur Gebäude mit Exponaten. Sie vereinen einzigartige
                    Architektur, reiche Sammlungen und innovative Präsentationskonzepte. Hier finden Sie alles,
                    von majestätischen Sälen mit Gemälden alter Meister bis hin zu interaktiven Räumen, in denen Sie
                    Wissenschaft zum Anfassen erleben oder sich sogar wie ein Pilot oder Rennfahrer fühlen können.
                    Jedes Museum ist eine Reise, die neue Facetten von Kultur, Geschichte und menschlichen Errungenschaften
                    offenbart.
                </p>

                {/* Перший рядок: одна карточка (відцентрована) */}
                <div className="flex justify-center mb-8">
                    <div className="w-full md:w-2/3 bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                        <h3 className="text-xl font-semibold mb-2">{museumCards[0].name}</h3>
                        <p className="text-gray-700 mb-4">{museumCards[0].description}</p>
                        <button
                            onClick={() => router.push('/kontakt')}
                            className="inline-block bg-black text-white text-sm rounded px-6 py-2 hover:bg-gray-800 transition"
                        >
                            {t.button}
                        </button>
                    </div>
                </div>

                {/* Другий рядок: дві карточки (по краях) */}
                <div className="flex flex-col md:flex-row md:justify-between mb-8">
                    {museumCards.slice(1, 3).map((museum) => (
                        <div
                            key={museum.id}
                            className="w-full md:w-[48%] bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all mb-8 md:mb-0"
                        >
                            <h3 className="text-xl font-semibold mb-2">{museum.name}</h3>
                            <p className="text-gray-700 mb-4">{museum.description}</p>
                            <button
                                onClick={() => router.push('/kontakt')}
                                className="inline-block bg-black text-white text-sm rounded px-6 py-2 hover:bg-gray-800 transition"
                            >
                                {t.button}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Третій рядок: одна карточка (відцентрована) */}
                <div className="flex justify-center mb-8">
                    <div className="w-full md:w-2/3 bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                        <h3 className="text-xl font-semibold mb-2">{museumCards[3].name}</h3>
                        <p className="text-gray-700 mb-4">{museumCards[3].description}</p>
                        <button
                            onClick={() => router.push('/kontakt')}
                            className="inline-block bg-black text-white text-sm rounded px-6 py-2 hover:bg-gray-800 transition"
                        >
                            {t.button}
                        </button>
                    </div>
                </div>

                {/* Кнопка внизу праворуч секції */}
                <div className="mt-8 text-right">
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
