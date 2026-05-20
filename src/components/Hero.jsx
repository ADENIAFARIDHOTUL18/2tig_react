export default function Hero() {
  return (
    <section className="relative pt-40 pb-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center">
        
        {/* Teks Kiri */}
        <div className="md:w-1/2 text-left z-10">
          <span className="text-slate-900 font-black text-sm tracking-[0.2em] uppercase mb-6 block">
            Lezat & Higienis
          </span>
          <h1 className="text-[64px] md:text-[80px] font-[900] text-slate-800 leading-[1.1] mb-8">
            Nikmati <br />
            Kelezatan <br />
            Makanan <br />
            Sedap Di <br />
            Rumah Anda
          </h1>
          <p className="text-slate-500 text-lg max-w-lg leading-relaxed mb-10">
            Pesan makanan favoritmu sekarang di <span className="text-orange-500 font-bold">Sedap</span> dan rasakan sensasi bumbu rahasia yang autentik dengan pengiriman super cepat.
          </p>
          
          <div className="flex items-center">
            <button className="border-2 border-slate-800 text-slate-800 px-12 py-4 rounded-full font-bold text-lg hover:bg-slate-800 hover:text-white transition-all duration-300">
              Lihat Menu
            </button>
          </div>
        </div>

        {/* Gambar Kanan */}
        <div className="md:w-1/2 mt-16 md:mt-0 relative flex justify-end">
          {/* Background dekorasi halus */}
          <div className="absolute -right-20 top-0 w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-50"></div>
          
          <img 
            src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1000&auto=format&fit=crop" 
            alt="Sushi" 
            className="w-full max-w-[500px] h-[550px] object-cover rounded-[80px] shadow-2xl relative z-10"
          />
        </div>
        
      </div>
    </section>
  );
}