'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import content from '@/i18n/de';

export default function Facts() {
    const t = content.facts;
    const [currentSlide, setCurrentSlide] = useState(0);

    // Автоматичне перемикання слайдів кожні 5 секунд
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % t.list.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [t.list.length]);

    // Зміна слайду при кліку на пагінацію
    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <section id="facts" className="py-16 px-6 bg-white">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-semibold mb-8 text-center">{t.title}</h2>

                <div className="relative">
                    {/* Карусель */}
                    <div className="overflow-hidden rounded-xl shadow-lg">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {t.list.map((fact, idx) => (
                                <div key={idx} className="flex-shrink-0 w-full flex justify-center">
                                    <div className="bg-gray-50 p-6 flex flex-col items-center w-full">
                                        <h3 className="text-xl font-semibold mb-2">{fact.title}</h3>
                                        <p className="text-gray-700 mb-4">{fact.text}</p>
                                        {/* Контейнер для зображення з обмеженням по висоті */}
                                        <div className="relative w-full max-h-screen overflow-hidden">
                                            <Image
                                                src={fact.image}
                                                alt={fact.title}
                                                width={1200}   // базова ширина для збереження співвідношення
                                                height={675}   // співвідношення 16:9
                                                className="rounded-lg shadow-md object-contain"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Пагінація */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
                        {t.list.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-black' : 'bg-gray-400'} transition-all`}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
