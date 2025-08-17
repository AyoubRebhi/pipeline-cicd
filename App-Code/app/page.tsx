"use client"

import { useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import HowItWorks from "@/components/how-it-works"
import PricingCta from "@/components/pricing-cta"
import FaqSection from "@/components/faq-section"
import SecondaryCta from "@/components/secondary-cta"
import Footer from "@/components/footer"
import PageTransition from "@/components/animations/page-transition"

export default function LandingPage() {
  // Smooth scroll implementation
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "A") {
        const href = target.getAttribute("href")
        if (href && href.startsWith("#")) {
          e.preventDefault()
          const element = document.getElementById(href.substring(1))
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 80, // Adjust for header height
              behavior: "smooth",
            })
          }
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)
    return () => document.removeEventListener("click", handleAnchorClick)
  }, [])

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Hero />
          <Features />
          <HowItWorks />
          <PricingCta />
          <FaqSection />
          <SecondaryCta />
        </main>
        <Footer />
      </div>
    </PageTransition>
  )
}

