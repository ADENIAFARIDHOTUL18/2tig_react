export default function About() {
  return (
    <section id="about" className="py-24 bg-[#F8F9FA]">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2 relative">
          <div className="absolute inset-0 bg-orange-100 rounded-full scale-110 -rotate-6"></div>
          <img src="https://images.unsplash.com/photo-1556910103-1c02745aee4d?q=80&w=1000" className="relative z-10 rounded-[3rem] w-full h-[400px] object-cover shadow-xl" alt="Chef" />
        </div>
        <div className="md:w-1/2">
          <span className="text-[#FF845E] font-bold text-xs uppercase tracking-widest">Tentang Kami</span>
          <h2 className="text-4xl font-black text-[#1E2633] mt-4 mb-6">Kami Menyajikan Rasa Terbaik Sejak 2010</h2>
          <p className="text-gray-500 leading-relaxed mb-8">Sedap adalah restoran keluarga yang berfokus pada kualitas bahan baku dan keaslian rasa. Setiap hidangan dimasak dengan cinta oleh chef berpengalaman kami.</p>
          <div className="grid grid-cols-2 gap-6">
            <div><h4 className="font-bold text-[#1E2633]">100% Higienis</h4><p className="text-sm text-gray-400">Proses bersih dan aman.</p></div>
            <div><h4 className="font-bold text-[#1E2633]">Bumbu Alami</h4><p className="text-sm text-gray-400">Tanpa bahan pengawet.</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}