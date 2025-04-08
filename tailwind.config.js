// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                // Чорно-білих кольорів
                black: '#121212', // темний чорний для основного фону
                white: '#FAFAFA', // м'який білий для тексту і фону
                // Коричневі відтінки для тепла
                brown: {
                    light: '#D7B39D', // м'який коричневий
                    DEFAULT: '#8E5B3A', // глибокий коричневий
                    dark: '#4A2C1B', // темний коричневий
                },
                // Теплі акценти
                beige: '#F1E1C6', // для створення теплих відтінків
                mustard: '#C69C6D', // гірчичний для контрасту
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'], // додаємо шрифт Inter
            },
            backgroundImage: {
                'art-background': "url('/path-to-your-image.jpg')", // якщо хочете додати фон
            },
        },
    },
    plugins: [],
}
