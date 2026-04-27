"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Instagram, Twitter, Facebook, Star, DollarSign, LayoutGrid, ArrowUpRight } from "lucide-react";
import { CardSkeleton } from "@/components/ui/card-skeleton";

type Coach = {
  id: number;
  fullName: string;
  about: string;
  yearsOfExperience: number;
  rating: number;
  price: number;
  photoUrl: string | null;
  programCount: number;
};

// ─── Neon-lime "View Profile" button ───────────────────────────────────────
function ProfileButton({ href }: { href: string }) {
  return (
    <Link href={href}>
      <span
        className="group/btn relative inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold tracking-widest uppercase overflow-hidden rounded-sm"
        style={{
          color: "#84FF00",
          border: "1px solid #84FF0055",
          letterSpacing: "0.12em",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.background = "#84FF00";
          el.style.color = "#000";
          el.style.borderColor = "#84FF00";
          el.style.boxShadow = "0 0 20px #84FF0066, 0 0 40px #84FF0033";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.background = "transparent";
          el.style.color = "#84FF00";
          el.style.borderColor = "#84FF0055";
          el.style.boxShadow = "none";
        }}
      >
        View Profile
        <ArrowUpRight
          className="w-3 h-3 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
        />
      </span>
    </Link>
  );
}

// ─── Social icon button ─────────────────────────────────────────────────────
function SocialBtn({
  icon: Icon,
  accentColor,
}: {
  icon: React.ElementType;
  accentColor: string;
}) {
  return (
    <span
      className="flex items-center justify-center w-8 h-8 rounded-full cursor-pointer transition-all duration-300"
      style={{
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.12)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = accentColor + "22";
        el.style.borderColor = accentColor + "88";
        el.style.boxShadow = `0 0 12px ${accentColor}44`;
        el.style.color = accentColor;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = "rgba(255,255,255,0.08)";
        el.style.borderColor = "rgba(255,255,255,0.12)";
        el.style.boxShadow = "none";
        el.style.color = "white";
      }}
    >
      <Icon className="w-3.5 h-3.5" />
    </span>
  );
}

// ─── Stat pill ──────────────────────────────────────────────────────────────
function StatPill({
  icon: Icon,
  value,
  color,
}: {
  icon: React.ElementType;
  value: string;
  color: string;
}) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm text-xs font-semibold"
      style={{
        background: color + "18",
        border: `1px solid ${color}33`,
        color,
      }}
    >
      <Icon className="w-3 h-3" />
      {value}
    </span>
  );
}

// ─── Trainer Card ───────────────────────────────────────────────────────────
function TrainerCard({ trainer, index }: { trainer: Coach; index: number }) {
  return (
    <div
      className="relative w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm flex flex-col overflow-hidden rounded-lg group"
      style={{
        background: "linear-gradient(160deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
        animationDelay: `${index * 80}ms`,
        transition: "border-color 0.4s ease, box-shadow 0.4s ease, transform 0.4s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(132,255,0,0.45)";
        el.style.boxShadow = "0 0 40px rgba(132,255,0,0.15), 0 20px 60px rgba(0,0,0,0.6)";
        el.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(255,255,255,0.08)";
        el.style.boxShadow = "none";
        el.style.transform = "translateY(0)";
      }}
    >
      {/* Hover top-edge glow line */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "linear-gradient(90deg, transparent, #84FF00, transparent)",
        }}
      />

      {/* ── IMAGE ── */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={trainer.photoUrl ?? "/default-trainer.png"}
          alt={trainer.fullName}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, #000 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.05) 100%)",
          }}
        />

        {/* Experience badge — top right */}
        <div
          className="absolute top-3 right-3 px-2.5 py-1 rounded-sm text-xs font-bold tracking-wider"
          style={{
            background: "rgba(0,0,0,0.65)",
            border: "1px solid rgba(132,255,0,0.35)",
            color: "#84FF00",
            backdropFilter: "blur(6px)",
          }}
        >
          {trainer.yearsOfExperience} YRS
        </div>

        {/* Social icons — slide up on hover */}
        <div className="absolute bottom-4 left-4 flex gap-2 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
          <SocialBtn icon={Instagram} accentColor="#E1306C" />
          <SocialBtn icon={Twitter} accentColor="#1DA1F2" />
          <SocialBtn icon={Facebook} accentColor="#1877F2" />
        </div>
      </div>

      {/* ── INFO ── */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Name */}
        <div>
          <h3
            className="text-xl font-extrabold text-white tracking-tight leading-tight"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "-0.01em" }}
          >
            {trainer.fullName}
          </h3>
          <div
            className="mt-0.5 h-0.5 w-8 rounded-full"
            style={{ background: "linear-gradient(90deg, #84FF00, transparent)" }}
          />
        </div>

        {/* Bio */}
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 flex-1">
          {trainer.about}
        </p>

        {/* Stats */}
        <div className="flex flex-wrap gap-2">
          <StatPill icon={Star} value={String(trainer.rating)} color="#FFD700" />
          <StatPill icon={DollarSign} value={String(trainer.price)} color="#84FF00" />
          <StatPill icon={LayoutGrid} value={`${trainer.programCount} programs`} color="#00CFFF" />
        </div>

        {/* Divider + CTA */}
        <div
          className="flex items-center justify-between pt-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <span className="text-xs text-gray-500 tracking-wider uppercase">
            Trainer Profile
          </span>
          <ProfileButton href={`/trainers/${trainer.id}`} />
        </div>
      </div>
    </div>
  );
}

// ─── Main export ─────────────────────────────────────────────────────────────
export function TrainersGrid() {
  const [trainers, setTrainers] = useState<Coach[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/Coach`);
        const data = await res.json();
        setTrainers(data);
      } catch (err) {
        console.error("Failed to load coaches", err);
      } finally {
        setLoading(false);
      }
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-transparent">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => <CardSkeleton key={i} />)}
          </div>
        </div>
      </section>
    );
  }

  if (!trainers.length) return null;

  return (
    <section className="py-16 bg-transparent">
      {/* Google Font for headings */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&display=swap');`}</style>

      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8">
          {trainers.map((trainer, i) => (
            <TrainerCard key={trainer.id} trainer={trainer} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}