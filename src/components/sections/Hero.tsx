import { siteContent } from "@/content/site"
import { Button } from "@/components/ui/button"

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-br from-blue-50 to-white">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-100/20 blur-3xl -translate-y-1/2 translate-x-1/3 rounded-full" />
            <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-indigo-100/30 blur-3xl translate-y-1/3 -translate-x-1/4 rounded-full" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="max-w-3xl">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-blue-900 tracking-tight leading-tight mb-6">
                        {siteContent.hero.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-800 font-light mb-8 leading-relaxed max-w-2xl">
                        {siteContent.hero.subtitle}
                    </p>
                    <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
                        {siteContent.hero.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg">{siteContent.hero.cta}</Button>
                        <Button size="lg" variant="outline">Watch Video</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
