'use client';

import content from '@/i18n/de';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Contact() {
    const t = content.kontakt;
    const [formData, setFormData] = useState({ name: '', email: '', category: '', message: '' });
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Form submitted!');
        router.push('/');
    };

    return (
        <section
            id="contact"
            className="relative py-16 px-4 sm:px-6 lg:px-8 mt-2 overflow-hidden"
        >
            <div className="absolute inset-0">
                <Image
                    src="/contact.jpg"
                    alt="Background"
                    fill
                    className="object-cover opacity-75"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>

            <div className="relative max-w-lg mx-auto">
                <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 text-white">
                    {t.title}
                </h2>
                <form onSubmit={handleSubmit} className="bg-white border border-gray-300 rounded-lg p-6 space-y-6">
                    <div className="grid gap-4">
                        <input
                            type="text"
                            name="name"
                            placeholder={t.name}
                            value={formData.name}
                            onChange={handleChange}
                            className="block w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-500"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder={t.email}
                            value={formData.email}
                            onChange={handleChange}
                            className="block w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-500"
                        />
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="block w-full border border-gray-300 rounded-md py-2 px-4 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                        >
                            <option value="">{t.category}</option>
                            {t.options.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                        <textarea
                            name="message"
                            placeholder="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="block w-full border border-gray-300 rounded-md py-2 px-4 h-32 focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-500"
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-black text-white w-full md:w-auto px-6 py-3 rounded-md hover:bg-gray-800 transition"
                        >
                            {t.submit}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
