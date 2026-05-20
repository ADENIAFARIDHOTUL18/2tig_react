export default function Contact() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-10">
        <div className="bg-primary rounded-[3rem] p-12 text-white flex flex-col md:flex-row items-center justify-between shadow-xl">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold mb-4">Dapatkan Diskon 50%</h2>
            <p className="opacity-90">Daftarkan email Anda untuk mendapatkan promo eksklusif setiap akhir pekan!</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-0">
            <input type="email" placeholder="Email Anda..." className="px-6 py-4 rounded-full text-gray-800 outline-none w-full md:w-80" />
            <button className="bg-dark text-white px-8 py-4 rounded-full font-bold">Daftar</button>
          </div>
        </div>
      </div>
    </section>
  );
}