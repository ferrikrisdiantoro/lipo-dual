"use client"

import { siteContent } from "@/content/site"
import { FadeIn } from "@/components/ui/fade-in"
import { Target, Eye, Lightbulb, Leaf, Globe } from "lucide-react"

export function Story() {
    const valueIcons = [Lightbulb, Leaf, Globe]

    return (
        <section id="story" className="py-24 bg-gradient-to-b from-white to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        {siteContent.story.title}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        {siteContent.story.intro}
                    </p>
                </FadeIn>

                {/* Mission & Vision */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <FadeIn delay={0.1}>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-purple-100 hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                                    <Target size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 ml-4">{siteContent.story.mission.title}</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">{siteContent.story.mission.description}</p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-100 hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                                    <Eye size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 ml-4">{siteContent.story.vision.title}</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">{siteContent.story.vision.description}</p>
                        </div>
                    </FadeIn>
                </div>

                {/* Values */}
                <FadeIn delay={0.3} className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Values</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {siteContent.story.values.map((value, index) => {
                            const Icon = valueIcons[index % valueIcons.length]
                            return (
                                <div key={index} className="text-center p-6 bg-white rounded-xl border border-gray-100 hover:border-purple-200 transition-colors duration-300">
                                    <div className="w-14 h-14 mx-auto bg-gradient-to-br from-purple-500 to-emerald-500 rounded-full flex items-center justify-center text-white mb-4">
                                        <Icon size={24} />
                                    </div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                                    <p className="text-gray-500 text-sm">{value.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </FadeIn>

                {/* Video */}
                <FadeIn delay={0.4}>
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Watch Our Story</h3>
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-black">
                            <iframe
                                src={siteContent.story.videoUrl}
                                title="LipoDual Story Video"
                                className="absolute top-0 left-0 w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}
