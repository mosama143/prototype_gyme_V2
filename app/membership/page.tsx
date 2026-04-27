"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { MembershipHero } from "@/components/membership/membership-hero";
import { PricingPlans } from "@/components/membership/pricing-plans";
import { AllPlans } from "@/components/membership/AllPlans";
import { MembershipBenefits } from "@/components/membership/membership-benefits";
import { HexGymBackground } from "@/components/HexGymBackground";

export default function MembershipPage() {
  const [showAllPlans, setShowAllPlans] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <main className="pt-16">
        <MembershipHero />

        {/* PLANS SECTION WITH BACKGROUND */}
        <section className="relative overflow-hidden py-8">

          {/* Animated Hex Background */}
          <HexGymBackground />

          <div className="relative z-10">

            {/* Toggle Button */}
            <div className="flex justify-center my-12">
              <button
                onClick={() => setShowAllPlans((prev) => !prev)}
                className="
                  px-8 py-3 rounded-xl
                  font-bold tracking-wide
                  bg-black/40 backdrop-blur-md
                  border border-[#84FF00]/30
                  text-[#84FF00]
                  transition-all duration-300
                  hover:bg-[#84FF00]
                  hover:text-black
                  hover:shadow-[0_0_25px_rgba(132,255,0,0.45)]
                "
              >
                {showAllPlans ? "Show Main Plans" : "Get All Plans"}
              </button>
            </div>

            {/* Conditional Plans */}
            {showAllPlans ? <AllPlans /> : <PricingPlans />}
          </div>
        </section>

        <MembershipBenefits />
      </main>

      <Footer />
    </div>
  );
}