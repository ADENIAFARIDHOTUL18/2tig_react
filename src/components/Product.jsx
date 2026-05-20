export default function Produk() {
  const menus = [
    {
      id: 1,
      name: "Sushi Salmon Premium",
      category: "Japanese",
      price: "Rp 45.000",
      img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1000",
      desc: "Salmon segar pilihan dengan nasi jepang kualitas terbaik."
    },
    {
      id: 2,
      name: "Ramen Shoyu Spesial",
      category: "Noodle",
      price: "Rp 38.000",
      img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=1000",
      desc: "Kuah shoyu gurih dengan topping telur omega dan nori."
    },
    {
      id: 3,
      name: "Dimsum Mix Platter",
      category: "Snack",
      price: "Rp 25.000",
      img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=1000",
      desc: "Isian ayam dan udang yang lembut di dalam, krispi di luar."
    }
  ];

  return (
    <section id="produk" className="py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[#FF845E] font-bold text-sm uppercase tracking-widest bg-orange-50 px-4 py-2 rounded-full">
            Menu Terlaris
          </span>
          <h2 className="text-5xl font-black text-[#1E2633] mt-6 mb-4">
            Produk Unggulan Kami
          </h2>
          <p className="text-gray-500">
            Kami hanya menyajikan bahan-bahan segar berkualitas tinggi untuk menjamin cita rasa **Sedap** yang tak terlupakan di setiap gigitan.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {menus.map((item) => (
            <div 
              key={item.id} 
              className="group relative bg-white rounded-[2.5rem] p-6 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(255,132,94,0.15)] hover:-translate-y-2 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-[2rem] h-60 mb-6">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full shadow-sm">
                  <span className="text-xs font-bold text-[#FF845E] uppercase tracking-tighter">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="px-2">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-black text-[#1E2633] group-hover:text-[#FF845E] transition-colors">
                    {item.name}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
                
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-2xl font-black text-[#1E2633]">
                    {item.price}
                  </span>
                  <button className="w-12 h-12 bg-[#1E2633] group-hover:bg-[#FF845E] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300">
                    <span className="text-xl font-bold">+</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <button className="px-12 py-4 bg-[#FF845E] text-white font-black rounded-full shadow-xl shadow-orange-200 hover:bg-orange-600 hover:scale-105 transition-all">
            Lihat Semua Menu
          </button>
        </div>

      </div>
    </section>
  );
}