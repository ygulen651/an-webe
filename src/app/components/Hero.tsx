export default function Hero() {
  return (
    <section className="relative h-[70vh] text-white flex items-center hero-section overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
      <div className="container-width relative">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight hero-title drop-shadow-lg">
            Mutlu Bir An
          </h1>
          <p className="text-lg md:text-xl mb-8 hero-text drop-shadow">
            Her lokmada mutluluk, her anınızda Anı var.
          </p>
          <a
            href="#urunler"
            className="hero-button inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 hover:scale-[1.03] shadow-lg"
          >
            Daha Fazlasını Keşfet
          </a>
        </div>
      </div>
    </section>
  );
}





