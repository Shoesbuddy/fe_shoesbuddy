function HeroSection() {
  return (
    <section className="-mt-20">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="h-[50vh] w-full object-cover sm:h-[60vh] md:h-[70vh] lg:h-screen">
        <source src="/introvideo.mp4" type="video/mp4" />
      </video>
    </section>
  );
}

export default HeroSection;
