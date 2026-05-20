export default function AboutUs() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-10 flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2">
          <img src="https://img.freepik.com/free-photo/chef-cooking-kitchen-restaurant_23-2148835059.jpg" className="rounded-3xl shadow-xl" alt="Chef" />
        </div>
        <div className="md:w-1/2">
          <span className="text-primary font-bold">Tentang Kami</span>
          <h2 className="text-4xl font-bold text-dark mt-4 mb-6">Dibuat Dengan Bahan Pilihan & Kasih Sayang</h2>
          <p className="text-gray-500 text-lg mb-6">Restoran Sedap didirikan sejak 2010 dengan misi membawa cita rasa nusantara ke meja makan keluarga Anda dengan standar hotel bintang lima.</p>
          <button className="bg-primary text-white px-6 py-2 rounded-lg font-bold">Baca Cerita Kami</button>
        </div>
      </div>
    </section>
  );
}