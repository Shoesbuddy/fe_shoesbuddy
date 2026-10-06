function HeroSection() {
  return (
    <section className="">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full object-cover h-200"
      >
        <source src="/introvideo.mp4" type="video/mp4" />
      </video>
    </section>
  );
}

export default HeroSection;
