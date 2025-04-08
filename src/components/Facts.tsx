'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import content from '@/i18n/de';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

export default function Facts() {
    const t = content.facts;
    const [currentSlide, setCurrentSlide] = useState(0);

    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
        {
            loop: true,
            slides: { perView: 1 },
            drag: true,
            slideChanged(slider) {
                setCurrentSlide(slider.track.details.rel);
            },
        },
        []
    );

    useEffect(() => {
        const interval = setInterval(() => {
            instanceRef.current?.next();
        }, 5000);

        return () => clearInterval(interval);
    }, [instanceRef]);

    return (
        <section
            id="facts"
            className="bg-white overflow-hidden py-14 px-4 sm:px-6 md:px-10"
        >
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-gray-800">
                    {t.title}
                </h2>

                <div ref={sliderRef} className="keen-slider">
                    {t.list.map((fact, idx) => (
                        <div
                            key={idx}
                            className="keen-slider__slide flex flex-col items-center justify-center bg-gray-50 rounded-xl p-4 sm:p-6 md:p-8 shadow-md"
                        >
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 text-gray-900 text-center">
                                {fact.title}
                            </h3>
                            <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-5 sm:mb-6 text-center leading-relaxed max-w-2xl">
                                {fact.text}
                            </p>
                            <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
                                <Image
                                    src={fact.image}
                                    alt={fact.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 75vw, 50vw"
                                    priority={idx === 0}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Пагінація */}
                <div className="mt-6 flex justify-center gap-3">
                    {t.list.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => instanceRef.current?.moveToIdx(idx)}
                            aria-label={`Перейти до слайду ${idx + 1}`}
                            aria-pressed={currentSlide === idx}
                            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 border-2 ${currentSlide === idx
                                ? 'bg-black border-black scale-110'
                                : 'bg-white border-gray-400'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
