import { siteContent } from "@/content/site"
import { ShieldCheck, Zap, Heart } from "lucide-react"

export function Solution() {
    const icons = [Zap, ShieldCheck, Heart]

    return (
        <section id="solution" className="py-24 bg-blue-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            {siteContent.solution.title}
                        </h2>
                        <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                            {siteContent.solution.description}
                        </p>
                        <div className="space-y-6">
                            {siteContent.solution.features.map((feature, index) => {
                                const Icon = icons[index % icons.length]
                                return (
                                    <div key={index} className="flex items-start">
                                        <div className="flex-shrink-0 w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center text-blue-200 mt-1">
                                            <Icon size={20} />
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                                            <p className="text-blue-200">{feature.description}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="relative">
                        {/* Abstract visual representation of the solution */}
                        <div className="aspect-square bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 flex items-center justify-center shadow-2xl ring-1 ring-white/10">
                            <div className="text-center">
                                <span className="block text-9xl font-bold text-white/20">LD</span>
                                <span className="block text-2xl text-blue-200 mt-4">Dual-Action Mechanism</span>
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-teal-400 rounded-full blur-2xl opacity-50"></div>
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500 rounded-full blur-2xl opacity-40"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
