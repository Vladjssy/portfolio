function Hero() {
  return (
    <section className="h-screen bg-zinc-900 flex items-center justify-center text-center">
      <div>
        <p className="text-orange-500 uppercase tracking-[5px] mb-4">
          Authentic Italian Cuisine
        </p>

        <h1 className="text-7xl font-bold text-white">Taste the Real Italy</h1>

        <p className="text-gray-300 text-xl mt-8 max-w-2xl mx-auto">
          Fresh ingredients, handmade pasta and unforgettable dining experience
          in the heart of the city.
        </p>

        <button
          className="mt-10 bg-orange-500 hover:bg-orange-600
          px-8 py-4 rounded-full text-white font-semibold
          transition"
        >
          Reserve a Table
        </button>
      </div>
    </section>
  );
}

export default Hero;
