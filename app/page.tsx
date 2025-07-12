import HeroSection from "./components/sections/HeroSection"
import ProblemsSection from "./components/sections/ProblemsSection"
import SolutionSection from "./components/sections/SolutionSection"
import CreatorSection from "./components/sections/CreatorSection"
import RecipesSection from "./components/sections/RecipesSection"
import TestimonialsSection from "./components/sections/TestimonialsSection"
import BonusSection from "./components/sections/BonusSection"
import UrgencySection from "./components/sections/UrgencySection"
import GuaranteeSection from "./components/sections/GuaranteeSection"
import PricingSection from "./components/sections/PricingSection"
import FAQSection from "./components/sections/FAQSection"
import Footer from "./components/Footer"
import StickyHeader from "./components/StickyHeader"
import ExitIntentPopup from "./components/ExitIntentPopup"
import SocialProofNotifications from "./components/SocialProofNotifications"

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <StickyHeader />
      <HeroSection />
      <ProblemsSection />
      <SolutionSection />
      <CreatorSection />
      <RecipesSection />
      <TestimonialsSection />
      <BonusSection />
      <UrgencySection />
      <GuaranteeSection />
      <PricingSection />
      <FAQSection />
      <Footer />
      <ExitIntentPopup />
      <SocialProofNotifications />
    </main>
  )
}
