"use client"

import Link from "next/link"
import { siteContent } from "@/content/site"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        { href: "#story", label: "Story" },
        { href: "#model", label: "Model" },
        { href: "#solution", label: "Solution" },
        { href: "#brand", label: "Brand" },
        { href: "#team", label: "Team" },
    ]

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src={siteContent.brand.logoPath}
                                alt="LipoDual Logo"
                                width={120}
                                height={36}
                                className="h-9 w-auto"
                                priority
                            />
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-gray-600 hover:text-purple-700 transition-colors font-medium"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Button className="bg-purple-600 hover:bg-purple-700">{siteContent.hero.cta}</Button>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-gray-900 p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b border-gray-100 shadow-xl">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-700 hover:bg-purple-50 rounded-md"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="px-3 py-2">
                            <Button className="w-full bg-purple-600 hover:bg-purple-700">{siteContent.hero.cta}</Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

