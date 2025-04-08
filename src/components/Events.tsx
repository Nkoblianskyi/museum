'use client';

import content from '@/i18n/de';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useEffect } from 'react';
import Image from 'next/image';

export default function Events() {
    const t = content.events;

    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slides: { perView: 1 },
        drag: true,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            instanceRef.current?.next();
        }, 5000);

        return () => clearInterval(interval);
    }, [instanceRef]);

    return (
        <section id="events" className="py-16 px-6 bg-white">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-8">{t.title}</h2>

                <div ref={sliderRef} className="keen-slider">
                    {t.list.map(({ title, place, date, image }, idx) => (
                        <div
                            key={idx}
                            className="keen-slider__slide flex flex-col items-center justify-center bg-gray-50 rounded-xl p-6 shadow-sm"
                        >
                            <div className="relative w-full h-[300px] mb-4">
                                <Image
                                    src={image}
                                    alt={title}
                                    fill
                                    className="rounded-lg object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{title}</h3>
                            <p className="text-gray-600">{place}</p>
                            <p className="text-sm text-gray-500">{date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
