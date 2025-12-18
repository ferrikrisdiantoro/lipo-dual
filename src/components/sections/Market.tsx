import { siteContent } from "@/content/site"

export function Market() {
    return (
        <section id="market" className="py-24 bg-blue-900 text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
                <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-overlay filter blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        {siteContent.market.title}
                    </h2>
                    <p className="text-blue-200 max-w-2xl mx-auto">
                        Driving impact in the global wound care industry.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {siteContent.market.stats.map((stat, index) => (
                        <div key={index} className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                            <p className="text-5xl font-bold text-teal-400 mb-2">{stat.value}</p>
                            <p className="text-blue-200 font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
