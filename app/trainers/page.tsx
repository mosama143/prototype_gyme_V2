import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TrainersGrid } from "@/components/trainers/trainers-grid"
import { TrainersHero } from "@/components/trainers/trainers-hero"
import { PremiumGymBackground } from "@/components/PremiumGymBackground"
export default function TrainersPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main className="pt-16">
        <TrainersHero />

        <section className="relative min-h-screen overflow-hidden">
  <PremiumGymBackground />

  <div className="relative z-10">
       <TrainersGrid />
  </div>
</section>
     
      </main>
      <Footer />
    </div>
  )
}
