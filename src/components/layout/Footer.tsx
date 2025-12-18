import { siteContent } from "@/content/site"

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-8 md:mb-0">
                        <span className="text-2xl font-bold">{siteContent.hero.title}</span>
                        <p className="mt-2 text-gray-400 text-sm max-w-xs">{siteContent.hero.description}</p>
                    </div>

                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center md:text-right">
                        <div className="text-sm text-gray-400">
                            <p>&copy; {new Date().getFullYear()} LipoDual Innovation Team</p>
                            <p>Designed for Conrad Challenge</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
