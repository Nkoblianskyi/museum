'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import content from '@/i18n/de';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

export default function Events() {
    const t = content.events;
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
        <section id="events" className="py-16 px-4 sm:px-6 md:px-10 bg-white overflow-x-hidden">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-gray-800">
                    {t.title}
                </h2>

                <div ref={sliderRef} className="keen-slider">
                    {t.list.map(({ title, place, date, image }, idx) => (
                        <div
                            key={idx}
                            className="keen-slider__slide flex flex-col items-center justify-center bg-gray-50 rounded-xl p-4 sm:p-6 shadow-sm"
                        >
                            <div className="relative w-full aspect-[16/9] mb-4 overflow-hidden rounded-lg">
                                <Image
                                    src={image}
                                    alt={title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 75vw, 50vw"
                                    priority={idx === 0}
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold mb-2">{title}</h3>
                            <p className="text-gray-600 text-sm sm:text-base">{place}</p>
                            <p className="text-sm text-gray-500">{date}</p>
                        </div>
                    ))}
                </div>

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
