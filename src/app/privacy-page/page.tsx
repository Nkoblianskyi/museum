'use client';

export default function PrivacyPage() {
    return (
        <section
            className="relative min-h-screen px-4 py-16 sm:px-6 lg:px-8 bg-gray-50 flex items-center justify-center"
            style={{
                backgroundImage: 'url(/privacy.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="w-full max-w-4xl bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-6 sm:p-8 md:p-10">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
                    Datenschutzrichtlinie
                </h1>
                <div className="space-y-6 text-gray-800 text-base sm:text-lg leading-relaxed">
                    <p>
                        Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Ihre Daten werden nur im notwendigen Umfang gespeichert und niemals an Dritte weitergegeben.
                    </p>
                    <p>
                        Beim Besuch dieser Seite werden automatisch technische Daten (z. B. IP-Adresse, Browsertyp) erfasst, um die Funktionalität zu gewährleisten.
                    </p>
                    <p>
                        Sie haben jederzeit das Recht auf Auskunft, Berichtigung oder Löschung Ihrer gespeicherten Daten.
                    </p>
                </div>
            </div>
        </section>
    );
}
