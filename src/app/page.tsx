import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { Problem } from "@/components/sections/Problem"
import { Solution } from "@/components/sections/Solution"
import { UniqueValue } from "@/components/sections/UniqueValue"
import { Technology, Team } from "@/components/sections/ContentSections"
import { Market } from "@/components/sections/Market"
import { BusinessModel } from "@/components/sections/BusinessModel"
import { Media } from "@/components/sections/Media"

export default function Home() {
  return (
    <main className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <UniqueValue />
      <Technology />
      <Market />
      <BusinessModel />
      <Team />
      <Media />
      <Footer />
    </main>
  )
}
