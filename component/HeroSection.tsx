function HeroSection() {
  return (
    <section
      aria-label="Shooz Buddy introduction"
      className="relative -mt-20 h-[75vh] overflow-hidden supports-[height:100svh]:h-[75svh]">
      <h1 className="sr-only">Shoe cleaning kits and shoe care products from Shooz Buddy</h1>
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-[center_40%] sm:object-center">
        <source src="/introvideo.mp4" type="video/mp4" />
      </video>
    </section>
  );
}

export default HeroSection;
