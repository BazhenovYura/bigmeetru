'use client'

import { useCallback } from 'react'
import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { FeaturesSection } from '@/components/features-section'
import { ForWhomSection } from '@/components/for-whom-section'
import { HowItWorksSection } from '@/components/how-it-works-section'
import { BenefitsSection } from '@/components/benefits-section'
import { PricingSection } from '@/components/pricing-section'
import { CtaSection } from '@/components/cta-section'
import { Footer } from '@/components/footer'

export default function Home() {
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <Navigation scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <FeaturesSection />
      <ForWhomSection />
      <HowItWorksSection />
      <BenefitsSection />
      <PricingSection />
      <CtaSection />
      <Footer scrollToSection={scrollToSection} />
    </div>
  )
}
