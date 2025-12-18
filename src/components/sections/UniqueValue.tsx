import { siteContent } from "@/content/site"
import { Leaf, Dna, Lock } from "lucide-react"

export function UniqueValue() {
    const icons = [Dna, Leaf, Lock]

    return (
        <section id="unique-value" className="py-24 bg-green-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {siteContent.uniqueValue.title}
                    </h2>
                    <p className="text-lg text-gray-600">
                        {siteContent.uniqueValue.description}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {siteContent.uniqueValue.points.map((point, index) => {
                        const Icon = icons[index % icons.length]
                        return (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-green-100">
                                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-700 mb-6">
                                    <Icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
                                <p className="text-gray-600">{point.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
