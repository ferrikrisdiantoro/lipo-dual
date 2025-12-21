"use client"

import { siteContent } from "@/content/site"
import { FadeIn } from "@/components/ui/fade-in"
import Image from "next/image"

export function BrandIdentity() {
    const { brand } = siteContent

    return (
        <section id="brand" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {brand.title}
                    </h2>
                    <p className="text-lg text-purple-600 font-medium">{brand.tagline}</p>
                </FadeIn>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left: Brand explanation */}
                    <FadeIn delay={0.1}>
                        <div className="space-y-8">
                            {/* Logo */}
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Logo</h3>
                                <div className="bg-white p-6 rounded-xl border border-gray-100 flex justify-center">
                                    <Image
                                        src={brand.logoPath}
                                        alt="LipoDual Logo"
                                        width={200}
                                        height={60}
                                        className="h-16 w-auto"
                                    />
                                </div>
                            </div>

                            {/* Brand Name Meaning */}
                            <div className="bg-purple-50 p-8 rounded-2xl border border-purple-100">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Brand Name: {brand.name}</h3>
                                <p className="text-gray-600 leading-relaxed">{brand.meaning}</p>
                            </div>

                            {/* Typography */}
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Typography</h3>
                                <p className="text-2xl font-bold text-gray-900 mb-2">{brand.typography.primary}</p>
                                <p className="text-gray-500 text-sm">{brand.typography.description}</p>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Right: Colors + Mockup */}
                    <FadeIn delay={0.2}>
                        <div className="space-y-8">
                            {/* Color Palette */}
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                                <h3 className="text-xl font-semibold text-gray-900 mb-6">Color Palette</h3>
                                <div className="space-y-4">
                                    {Object.entries(brand.colors).map(([key, color]) => (
                                        <div key={key} className="flex items-center gap-4">
                                            <div
                                                className="w-16 h-16 rounded-xl shadow-sm border border-gray-200 flex-shrink-0"
                                                style={{ backgroundColor: color.hex }}
                                            />
                                            <div>
                                                <p className="font-semibold text-gray-900">{color.name}</p>
                                                <p className="text-sm text-gray-500 font-mono">{color.hex}</p>
                                                <p className="text-xs text-gray-400">{color.meaning}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Mockup Images */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="aspect-square rounded-xl overflow-hidden shadow-lg border border-gray-200">
                                    <Image
                                        src="/mockup/mockup1.jpg"
                                        alt="LipoDual Product Mockup 1"
                                        width={300}
                                        height={300}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="aspect-square rounded-xl overflow-hidden shadow-lg border border-gray-200">
                                    <Image
                                        src="/mockup/mockup2.jpg"
                                        alt="LipoDual Product Mockup 2"
                                        width={300}
                                        height={300}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    )
}
