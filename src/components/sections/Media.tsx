import { siteContent } from "@/content/site"

export function Media() {
    return (
        <section id="media" className="py-24 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    {siteContent.media.title}
                </h2>

                <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-black">
                    <iframe
                        src={siteContent.media.videoUrl}
                        title="Innovation Video"
                        className="absolute top-0 left-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </section>
    )
}
