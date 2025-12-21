"use client"

import { siteContent } from "@/content/site"
import { FadeIn } from "@/components/ui/fade-in"

export function Market() {
    return (
        <section id="market" className="py-24 bg-purple-900 text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-400 rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <FadeIn className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        {siteContent.market.title}
                    </h2>
                    <p className="text-purple-200 max-w-2xl mx-auto">
                        Driving impact in the global wound care industry.
                    </p>
                </FadeIn>

                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {siteContent.market.stats.map((stat, index) => (
                        <FadeIn key={index} delay={index * 0.1} className="h-full">
                            <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors duration-300 h-full flex flex-col justify-center">
                                <p className="text-5xl font-bold text-emerald-400 mb-2">{stat.value}</p>
                                <p className="text-purple-200 font-medium">{stat.label}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    )
}

