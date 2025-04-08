'use client';

export default function CookiePage() {
    return (
        <section
            className="relative min-h-screen px-4 py-16 sm:px-6 lg:px-8 bg-gray-50 flex items-center justify-center"
            style={{
                backgroundImage: 'url(/hero.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="w-full max-w-4xl bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-6 sm:p-8 md:p-10">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
                    Cookie-Richtlinie
                </h1>
                <div className="space-y-6 text-gray-800 text-base sm:text-lg leading-relaxed">
                    <p>
                        Diese Website verwendet Cookies, um Ihnen das bestmögliche Nutzererlebnis zu bieten. Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden und helfen, die Seite benutzerfreundlicher zu gestalten.
                    </p>
                    <p>
                        Sie können selbst entscheiden, ob Sie Cookies zulassen möchten. Einige Cookies sind jedoch für den Betrieb der Seite unerlässlich und können nicht deaktiviert werden.
                    </p>
                    <p>
                        Durch die weitere Nutzung unserer Website erklären Sie sich mit der Verwendung von Cookies einverstanden.
                    </p>
                </div>
            </div>
        </section>
    );
}
