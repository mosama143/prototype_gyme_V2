export function ProgramsHero() {
  return (
    <section className="relative py-30 md:py-52 overflow-hidden">
      {/* Green Top → Black Bottom Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#84FF00]/15 via-black/15 to-black" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Tracks & <span className="text-[#84FF00]">Programs</span>
          </h1>

          <p className="text-xl text-gray-400 leading-relaxed">
            From high-intensity training to mindful yoga, discover programs designed to
            challenge, inspire, and transform. Over 100 weekly classes led by expert instructors.
          </p>
        </div>
      </div>
    </section>
  );
}