export function TrainersHero() {
  return (
    <section className="relative pt-20 min-h-[80vh] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        poster="/images/trainers-hero-fallback.jpg"
      >
        <source
          src="./vecteezy_intense-workout-recovery-with-athletic-man-drinking-water-in_74682628.mp4"
          type="video/mp4"
        />
      </video>

      {/* Green Tint */}
      <div className="absolute inset-0 bg-[#84FF00]/15" />

      {/* Reversed Heavy Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#84FF00]/20 via-black/60 to-black" />

      {/* Bottom Glow */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[85%] h-32 bg-[#84FF00]/25 blur-3xl rounded-full" />

      <div className="container mx-auto px-4 relative z-10 min-h-[80vh] flex items-center">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            MEET OUR <span className="text-[#84FF00]">EXPERT</span> TRAINERS
          </h1>

          <p className="text-xl text-gray-400 leading-relaxed">
            Our certified professionals are dedicated to helping you achieve your
            fitness goals. Each trainer brings unique expertise and passion to
            guide your transformation journey.
          </p>
        </div>
      </div>
    </section>
  )
}