"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  Flame,
  TrendingUp,
  Clock,
  Dumbbell,
  Timer,
  Activity,
  Star,
} from "lucide-react";

export default function PlanDetailsPage() {
  const params = useParams();
  const planId = Number(params?.planId);

  const [plan, setPlan] = useState<any>(null);
  const [starting, setStarting] = useState(false);

  // =============================
  // FETCH
  // =============================
  useEffect(() => {
    if (!planId) return;

    async function fetchPlan() {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/Program/${planId}`
      );
      const data = await res.json();
      setPlan(data);
    }

    fetchPlan();
  }, [planId]);

  // =============================
  // START PLAN
  // =============================
  async function startPlan() {
    try {
      setStarting(true);

      await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/Enrollment/start`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ programId: planId }),
        }
      );

      alert("🔥 Plan Started!");
    } catch {
      alert("❌ Failed");
    } finally {
      setStarting(false);
    }
  }

  if (!plan) return null; // 👈 global loading هيظهر

  return (
    <section className="bg-black min-h-screen text-white">

      {/* 🔥 HERO */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={plan.photoThumbnailUrl || "/3d-gym-equipment.jpg"}
          className="w-full h-full object-cover scale-110"
        />

        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />



{/* النص */}
<motion.div
  className="absolute inset-0 flex items-center justify-center text-center z-10"
>
  <motion.h1
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="
      text-5xl md:text-6xl font-black text-[#ffffffd2]
      drop-shadow-[0_0_20px_rgba(132,255,0,0.8)]
    "
  >
    {plan.name}
  </motion.h1>
</motion.div>
      </div>

      {/* 🔥 CONTENT */}
      <div className="container mx-auto px-6 py-16">

        {/* INFO GRID */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">

          {[
            { icon: Flame, label: "Goal", value: plan.trainingGoal },
            { icon: TrendingUp, label: "Level", value: plan.fitnessLevel },
            { icon: Clock, label: "Duration", value: `${plan.durationOnWeeks} Weeks` },
            { icon: Dumbbell, label: "Sessions", value: `${plan.sessionsPerWeeks}/week` },
            { icon: Timer, label: "Session Time", value: `${plan.sessionsDuration} min` },
            { icon: Activity, label: "Equipment", value: plan.equipmentType },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-[#84FF00] transition"
            >
              <item.icon className="text-[#84FF00] mb-3" />
              <p className="text-gray-400 text-sm">{item.label}</p>
              <h3 className="text-xl font-bold">{item.value}</h3>
            </motion.div>
          ))}

        </div>

        {/* EXPECTED RESULT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            Expected Results
          </h2>
          <p className="text-gray-400 max-w-2xl">
            {plan.expectedOutcome}
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <button
            onClick={startPlan}
            disabled={starting}
            className="
              px-10 py-4 rounded-full font-bold text-black
              bg-[#84FF00]
              shadow-[0_0_20px_rgba(132,255,0,0.6)]
              hover:scale-105 hover:shadow-[0_0_40px_rgba(132,255,0,1)]
              transition-all duration-300
            "
          >
            {starting ? "Starting..." : "Start Plan"}
          </button>
        </motion.div>

        {/* COACH */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center text-gray-400"
        >
          <Star className="inline text-yellow-400 mr-1" />
          {plan.coachRating || "No rating"}
        </motion.div>

      </div>
    </section>
  );
}