"use client"

import { siteContent } from "@/content/site"
import { FadeIn } from "@/components/ui/fade-in"

export function Media() {
    return (
        <section id="media" className="py-24 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <FadeIn>
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">
                        {siteContent.media.title}
                    </h2>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-black group">
                        <iframe
                            src={siteContent.media.videoUrl}
                            title="Innovation Video"
                            className="absolute top-0 left-0 w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}
