function Hero() {
  return (
    <section id="home" className="bg-stone-900 bg-[url('https://images.unsplash.com/photo-1616734755909-bb016ce64930?auto=format&fit=crop&w=1600&q=75')] bg-cover bg-center">
      <div className="bg-black/50 px-4 py-20 text-center text-white sm:py-28 lg:py-36">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400 sm:text-sm">
          Fresh from our kitchen
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold sm:text-6xl lg:text-7xl">
          Saffron House
        </h1>
        <p className="mt-3 font-display text-xl sm:text-2xl lg:text-3xl">
          Authentic Flavours, Made Fresh Daily
        </p>
        <p className="mx-auto mt-4 max-w-xl text-base text-stone-200 sm:text-lg">
          Our chefs cook every dish to order over open flame, using family recipes
          and hand-ground spices.
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