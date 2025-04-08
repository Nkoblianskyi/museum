'use client';

export default function MissionPage() {
    return (
        <section
            id="mission"
            className="relative py-16 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/mission-bg.jpg')" }}
        >
            <div className="relative max-w-4xl mx-auto">
                <div className="backdrop-blur-sm bg-white/70 p-6 sm:p-8 md:p-10 rounded-xl shadow-xl">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-8 text-gray-900 leading-tight">
                        Entdecken, inspirieren, verbinden
                    </h1>

                    <div className="space-y-8 text-gray-800 leading-relaxed text-base sm:text-lg md:text-xl">
                        <p>
                            <strong>Museen Deutschlands: Kultur und Bewegung</strong> – wurde mit einem einfachen, aber ehrgeizigen Ziel ins Leben gerufen: die deutschen Museen allen Menschen näher zu bringen. Wir glauben, dass Kultur nicht nur die Vergangenheit ist, sondern auch der Schlüssel zum Verständnis der Gegenwart und zur Gestaltung der Zukunft. Unser Ziel ist es zu zeigen, wie Museen Menschen mit unterschiedlichen Interessen und Geschichten inspirieren, bilden und verbinden
                        </p>

                        <div>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
                                Warum Museen?
                            </h2>
                            <p>
                                Museen sind mehr als nur Sammlungen von Gegenständen. Sie sind Orte, an denen Geschichte lebendig wird, an denen Kunst über die Jahrhunderte hinweg zu uns spricht und an denen uns die Technik zeigt, wie sich die Menschheit weiterentwickelt hat - manchmal im wahrsten Sinne des Wortes, wie in der Welt des Motorsports oder der Luftfahrt. Wir bemühen uns, diese Vielfalt sichtbar zu machen, damit jeder Besucher etwas anderes entdeckt: von antiken Schätzen bis zu Innovationen, von der Stille der Kunstgalerien bis zum Brummen der Motoren.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
                                Und was tun wir?
                            </h2>
                            <ul className="space-y-4">
                                <li>
                                    <span className="block font-semibold">Wir erkunden:</span>
                                    Wir stellen Ihnen die besten Museen in Deutschland vor - von majestätischen Komplexen wie der Museumsinsel bis zu einzigartigen technischen Schätzen wie dem BMW Museum.
                                </li>
                                <li>
                                    <span className="block font-semibold">Wir erzählen:</span>
                                    Mit interessanten Fakten, Geschichten und Veranstaltungen zeigen wir Ihnen, warum diese Orte Ihre Zeit wert sind.
                                </li>
                                <li>
                                    <span className="block font-semibold">Wir ermutigen:</span>
                                    Wir wollen, dass Sie nicht nur über Museen lesen, sondern sie besuchen und neue Horizonte entdecken.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
                                Unsere Vision
                            </h2>
                            <p>
                                Wir träumen davon, dass jeder, der unsere Website besucht, sich mit dem kulturellen Erbe Deutschlands verbunden fühlt. Wir wollen, dass Museen nicht nur ein touristisches Ziel sind, sondern Teil einer persönlichen Reise zu Wissen, Inspiration und Selbstentfaltung. Kultur und Bewegung sind das, was uns alle verbindet, und wir sind hier, um Ihnen zu helfen, dies zu spüren.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
