"use client"

import { siteContent } from "@/content/site"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
            {/* Background decorations - symmetric now */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-blue-100/20 blur-[100px] rounded-full"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
                <div className="max-w-4xl mx-auto flex flex-col items-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl md:text-7xl font-extrabold text-blue-900 tracking-tight leading-tight mb-8"
                    >
                        {siteContent.hero.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-xl md:text-3xl text-blue-600 font-medium mb-8 leading-relaxed max-w-3xl"
                    >
                        {siteContent.hero.subtitle}
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl leading-relaxed"
                    >
                        {siteContent.hero.description}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-6 justify-center"
                    >
                        <Button size="lg" className="px-8 text-lg h-12 shadow-blue-500/20 shadow-xl hover:scale-105 transition-transform duration-300">{siteContent.hero.cta}</Button>
                        <a href="#media">
                            <Button size="lg" variant="outline" className="px-8 text-lg h-12 bg-white/50 backdrop-blur-sm hover:bg-white hover:scale-105 transition-all duration-300">Watch Video</Button>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
