export default function StatsBanner() {
  return (
    <section className="bg-primary py-12">
      <div className="container mx-auto px-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
        <div><h2 className="text-4xl font-bold">50+</h2><p className="text-sm opacity-80">Varian Menu</p></div>
        <div><h2 className="text-4xl font-bold">10k+</h2><p className="text-sm opacity-80">Pelanggan Puas</p></div>
        <div><h2 className="text-4xl font-bold">15+</h2><p className="text-sm opacity-80">Cabang Kota</p></div>
        <div><h2 className="text-4xl font-bold">4.9</h2><p className="text-sm opacity-80">Rating Google</p></div>
      </div>
    </section>
  );
}