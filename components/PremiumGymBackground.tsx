"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Dumbbell, Zap, HeartPulse, Flame } from "lucide-react"
import { useEffect } from "react"

const icons = [Dumbbell, Zap, HeartPulse, Flame]

const colors = [
  "#84FF00",
  "#FF6B00",
  "#00E5FF",
  "#FF00AA",
]

const items = Array.from({ length: 24 }).map((_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 24 + Math.random() * 30,
  duration: 1.8 + Math.random() * 2.5,
  delay: Math.random() * 2,
}))

export function PremiumGymBackground() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, {
    stiffness: 140,
    damping: 12,
  })

  const springY = useSpring(mouseY, {
    stiffness: 140,
    damping: 12,
  })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40
      const y = (e.clientY / window.innerHeight - 0.5) * 40

      mouseX.set(x)
      mouseY.set(y)
    }

    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [mouseX, mouseY])

  return (
    <div className="absolute inset-0 overflow-hidden bg-black pointer-events-none perspective-[1000px]">
      
      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#84FF00]/15 blur-3xl rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF6B00]/10 blur-3xl rounded-full" />

      {items.map((item, i) => {
        const Icon = icons[i % icons.length]

        return (
          <motion.div
            key={item.id}
            className="absolute"
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
              color: colors[i % colors.length],

              x: useTransform(
                springX,
                (v) => v * ((i % 5) + 1) * 0.45
              ),

              y: useTransform(
                springY,
                (v) => v * ((i % 5) + 1) * 0.45
              ),
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 8, -8, 0],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            }}
          >
            <Icon
              style={{
                width: item.size,
                height: item.size,
                filter: `drop-shadow(0 0 14px ${colors[i % colors.length]})`,
                opacity: 0.22,
              }}
            />
          </motion.div>
        )
      })}
    </div>
  )
}