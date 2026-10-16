function Hero() {
  return (
    <section id="home" className="bg-[url(/images/hero.jpg)] bg-cover bg-center">
      <div className="bg-black/50 px-4 py-20 text-center text-white sm:py-28 lg:py-36">
        <h1 className="font-display text-3xl font-bold sm:text-5xl lg:text-6xl">
          Authentic Flavours, Made Fresh Daily
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base sm:text-lg">
          Family recipes cooked over charcoal, served with warm hospitality.
        </p>
        <a
          href="#menu"
          className="mt-8 inline-block rounded-full bg-brand px-6 py-3 font-semibold hover:bg-brand-dark"
        >
          View Our Menu
        </a>
      </div>
    </section>
  );
}

export default Hero;