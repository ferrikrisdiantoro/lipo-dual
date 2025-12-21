"use client"

import { siteContent } from "@/content/site"
import { ShieldCheck, Zap, Heart } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"
import Image from "next/image"

export function Solution() {
    const icons = [Zap, ShieldCheck, Heart]

    return (
        <section id="solution" className="py-24 bg-purple-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <FadeIn>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            {siteContent.solution.title}
                        </h2>
                        <p className="text-lg text-purple-100 mb-8 leading-relaxed">
                            {siteContent.solution.description}
                        </p>
                        <div className="space-y-6">
                            {siteContent.solution.features.map((feature, index) => {
                                const Icon = icons[index % icons.length]
                                return (
                                    <div key={index} className="flex items-start group">
                                        <div className="flex-shrink-0 w-10 h-10 bg-purple-800 rounded-full flex items-center justify-center text-emerald-300 mt-1 group-hover:bg-white group-hover:text-purple-900 transition-colors duration-300">
                                            <Icon size={20} />
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                                            <p className="text-purple-200">{feature.description}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <div className="relative group">
                            {/* Product mockup image */}
                            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 group-hover:scale-[1.02] transition-transform duration-500">
                                <Image
                                    src="/mockup/mockup1.jpg"
                                    alt="LipoDual Product"
                                    width={500}
                                    height={500}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-emerald-400 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    )
}

