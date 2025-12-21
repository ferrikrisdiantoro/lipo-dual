"use client"

import { siteContent } from "@/content/site"
import { FadeIn } from "@/components/ui/fade-in"
import Image from "next/image"

export function InnovationModel() {
    return (
        <section id="model" className="py-24 bg-gradient-to-b from-purple-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {siteContent.model.title}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        {siteContent.model.description}
                    </p>
                </FadeIn>

                {/* Diagram */}
                <FadeIn delay={0.2} className="mb-16">
                    <div className="bg-white p-4 md:p-8 rounded-2xl shadow-lg border border-purple-100 overflow-hidden">
                        <Image
                            src={siteContent.model.diagramPath}
                            alt="LipoDual Innovation Model Diagram"
                            width={800}
                            height={300}
                            className="w-full h-auto"
                            priority
                        />
                    </div>
                </FadeIn>

                {/* Steps breakdown */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {siteContent.model.steps.map((stepItem, index) => (
                        <FadeIn key={index} delay={0.1 * (index + 1)}>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-purple-200 transition-all duration-300 h-full">
                                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                                    {stepItem.step}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{stepItem.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{stepItem.description}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    )
}
