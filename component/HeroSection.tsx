function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="hero-video relative -mt-20 flex min-h-155 h-svh items-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="/images/beforeafter.jpeg"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-[center_40%] sm:object-center">
        <source src="/introvideo.mp4" type="video/mp4" />
      </video>
      <div className="relative z-2 mx-auto flex h-full w-full max-w-7xl flex-col justify-center px-6 pt-20 pb-12 sm:px-10 lg:px-12">
        <div className="hero-copy">
          <p className="hero-kicker">Shoe care, made simple</p>
          <h1 className="hero-quote" id="hero-title">
            <span className="hero-quote-mark" aria-hidden="true">
              &ldquo;
            </span>
            Give your favourite pair a fresh start.
            <span className="hero-quote-mark" aria-hidden="true">
              &rdquo;
            </span>
          </h1>
          <p className="hero-description">
            Good shoes deserve more than one life. Bring back the fresh feeling with care kits made
            for the pairs you love.
          </p>
          <a className="hero-link mt-8" href="#products">
            Find your clean kit <span aria-hidden="true">↗</span>
          </a>
        </div>
        <p className="hero-scroll-cue absolute right-6 bottom-10 sm:right-10 lg:right-12">
          A little care goes a long way
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
