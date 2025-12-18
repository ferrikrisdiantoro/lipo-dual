"use client"

import { siteContent } from "@/content/site"
import { PieChart, DollarSign, Briefcase } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"

export function BusinessModel() {
    return (
        <section id="business" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        {siteContent.businessModel.title}
                    </h2>
                </FadeIn>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Cost Structure */}
                    <FadeIn delay={0.1}>
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 h-full hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-blue-100 text-blue-700 rounded-lg mr-4">
                                    <PieChart size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">{siteContent.businessModel.costStructure.title}</h3>
                            </div>

                            <div className="space-y-4">
                                {siteContent.businessModel.costStructure.items.map((item, index) => (
                                    <div key={index} className="relative pt-1">
                                        <div className="flex mb-2 items-center justify-between">
                                            <div>
                                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                                                    {item.label}
                                                </span>
                                            </div>
                                            <div className="text-right">
                                                <span className="text-xs font-semibold inline-block text-blue-600">
                                                    {item.value}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                                            <div style={{ width: item.value }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>

                    {/* Revenue Streams */}
                    <FadeIn delay={0.2}>
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 h-full hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-green-100 text-green-700 rounded-lg mr-4">
                                    <DollarSign size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">{siteContent.businessModel.revenueStreams.title}</h3>
                            </div>

                            <div className="grid grid-cols-1 gap-4">
                                {siteContent.businessModel.revenueStreams.items.map((item, index) => (
                                    <div key={index} className="flex items-start p-4 bg-white rounded-xl shadow-sm hover:translate-x-1 transition-transform duration-300">
                                        <div className="mt-1 mr-4 text-green-500">
                                            <Briefcase size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">{item.title}</h4>
                                            <p className="text-sm text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    )
}
