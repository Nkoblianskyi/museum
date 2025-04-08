export default function TermsPage() {
    return (
        <section
            className="relative min-h-screen px-4 py-16 sm:px-6 lg:px-8 bg-gray-50 flex items-center justify-center"
            style={{
                backgroundImage: 'url(/terms.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="w-full max-w-4xl bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-6 sm:p-8 md:p-10">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
                    Nutzungsbedingungen
                </h1>
                <div className="space-y-6 text-gray-800 text-base sm:text-lg leading-relaxed">
                    <p>
                        Mit der Nutzung dieser Website stimmen Sie den folgenden Bedingungen zu. Die Inhalte dienen ausschließlich zu Informationszwecken.
                    </p>
                    <p>
                        Der Betreiber behält sich das Recht vor, die Bedingungen jederzeit zu ändern. Es liegt in Ihrer Verantwortung, sich regelmäßig über Änderungen zu informieren.
                    </p>
                    <p>
                        Die Nutzung dieser Seite erfolgt auf eigene Gefahr. Es wird keine Haftung für Schäden übernommen, die aus der Nutzung entstehen könnten.
                    </p>
                </div>
            </div>
        </section>
    );
}
