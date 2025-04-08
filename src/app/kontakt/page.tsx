'use client';

import content from '@/i18n/de';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Contact() {
    const t = content.kontakt;
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        category: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        category: '',
        message: '',
    });

    const [success, setSuccess] = useState(false);
    const router = useRouter();

    const validate = () => {
        const newErrors = {
            name: formData.name.trim() ? '' : 'Bitte geben Sie Ihren Namen ein.',
            email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
                ? ''
                : 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
            category: formData.category ? '' : 'Bitte wählen Sie eine Kategorie.',
            message: formData.message.trim() ? '' : 'Bitte geben Sie eine Nachricht ein.',
        };
        setErrors(newErrors);
        return Object.values(newErrors).every((e) => e === '');
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setSuccess(true);

        setTimeout(() => {
            setFormData({ name: '', email: '', category: '', message: '' });
            setSuccess(false);
            router.push('/');
        }, 3000);
    };

    return (
        <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="absolute inset-0">
                <Image src="/contact.jpg" alt="Background" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            </div>

            <div className="relative max-w-xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-10 text-white">
                    {t.title}
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="bg-white backdrop-blur-sm border border-gray-200 rounded-xl p-6 sm:p-8 space-y-6 shadow-lg"
                >
                    <div className="grid gap-5">
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder={t.name}
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md py-2.5 px-4 placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                            />
                            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                        </div>

                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder={t.email}
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md py-2.5 px-4 placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                            />
                            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                        </div>

                        <div>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md py-2.5 px-4 bg-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                            >
                                <option value="">{t.category}</option>
                                {t.options.map((option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                            {errors.category && <p className="text-red-600 text-sm mt-1">{errors.category}</p>}
                        </div>

                        <div>
                            <textarea
                                name="message"
                                placeholder="Nachricht..."
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md py-2.5 px-4 h-32 resize-none placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                            />
                            {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
                        </div>
                    </div>

                    <div className="pt-4 flex justify-center md:justify-end flex-col items-center gap-4">
                        <button
                            type="submit"
                            className="bg-black text-white px-6 py-3 rounded-md text-sm sm:text-base hover:bg-gray-800 transition"
                        >
                            {t.submit}
                        </button>

                        {success && (
                            <p className="text-green-700 text-sm text-center">{t.success}</p>
                        )}
                    </div>
                </form>
            </div>
        </section>
    );
}
