"use client"

import { siteContent } from "@/content/site"
import { AlertTriangle, TrendingUp, Activity } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"

export function Problem() {
    const icons = [AlertTriangle, TrendingUp, Activity]

    return (
        <section id="problem" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {siteContent.problem.title}
                    </h2>
                    <p className="text-lg text-gray-600">
                        {siteContent.problem.description}
                    </p>
                </FadeIn>

                <div className="grid md:grid-cols-3 gap-8">
                    {siteContent.problem.points.map((point, index) => {
                        const Icon = icons[index % icons.length]
                        return (
                            <FadeIn key={index} delay={index * 0.1} className="h-full">
                                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full group">
                                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <Icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{point.description}</p>
                                </div>
                            </FadeIn>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
