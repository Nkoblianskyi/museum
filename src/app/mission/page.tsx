'use client';

export default function MissionPage() {
    return (
        <section
            id="mission"
            className="relative py-16 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
            style={{ backgroundImage: "url('/mission-bg.jpg')" }}
        >
            <div className="relative max-w-3xl mx-auto">
                <div className="bg-zinc-300 p-8 rounded-lg shadow-lg">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800">
                        Entdecken, inspirieren, verbinden
                    </h1>

                    <div className="space-y-6 text-gray-700">
                        <p className="text-lg sm:text-xl">
                            Museen Deutschlands: Kultur und Bewegung - wurde mit einem einfachen, aber
                            ehrgeizigen Ziel ins Leben gerufen: die deutschen Museen allen Menschen näher zu bringen.
                            Wir glauben, dass Kultur nicht nur die Vergangenheit ist, sondern auch der Schlüssel zum
                            Verständnis der Gegenwart und zur Gestaltung der Zukunft. Unser Ziel ist es zu zeigen, wie
                            Museen Menschen mit unterschiedlichen Interessen und Geschichten inspirieren, bilden und
                            verbinden können.
                        </p>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-8">
                            Warum Museen?
                        </h2>
                        <p className="text-lg sm:text-xl">
                            Museen sind mehr als nur Sammlungen von Gegenständen. Sie sind Orte, an denen Geschichte
                            lebendig wird, an denen Kunst über die Jahrhunderte hinweg zu uns spricht und an denen uns die
                            Technik zeigt, wie sich die Menschheit weiterentwickelt hat – manchmal im wahrsten Sinne des
                            Wortes, wie in der Welt des Motorsports oder der Luftfahrt. Wir bemühen uns, diese Vielfalt
                            sichtbar zu machen, damit jeder Besucher etwas anderes entdeckt: von antiken Schätzen bis zu
                            Innovationen, von der Stille der Kunstgalerien bis zum Brummen der Motoren.
                        </p>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-8">
                            Und was tun wir?
                        </h2>
                        <div className="space-y-4 text-lg sm:text-xl">
                            <p>
                                <span className="block mb-1 font-semibold">Wir erkunden:</span>
                                Wir stellen Ihnen die besten Museen in Deutschland vor – von majestätischen
                                Komplexen wie der Museumsinsel bis zu einzigartigen technischen Schätzen wie dem BMW Museum.
                            </p>
                            <p>
                                <span className="block mb-1 font-semibold">Wir erzählen:</span>
                                Mit interessanten Fakten, Geschichten und Veranstaltungen zeigen wir Ihnen, warum diese
                                Orte Ihre Zeit wert sind.
                            </p>
                            <p>
                                <span className="block mb-1 font-semibold">Wir ermutigen:</span>
                                Wir wollen, dass Sie nicht nur über Museen lesen, sondern sie besuchen und neue Horizonte
                                entdecken.
                            </p>
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-8">
                            Unsere Vision
                        </h2>
                        <p className="text-lg sm:text-xl">
                            Wir träumen davon, dass jeder, der unsere Website besucht, sich mit dem kulturellen
                            Erbe Deutschlands verbunden fühlt. Wir wollen, dass Museen nicht nur ein touristisches
                            Ziel sind, sondern Teil einer persönlichen Reise zu Wissen, Inspiration und Selbstentfaltung.
                            Kultur und Bewegung sind das, was uns alle verbindet, und wir sind hier, um Ihnen zu helfen,
                            dies zu spüren.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
