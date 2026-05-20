export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Andi Wijaya",
      role: "Food Enthusiast",
      img: "https://i.pravatar.cc/150?u=1",
      review: "Makanannya benar-benar sedap! Sushi Salmon Premium-nya sangat segar, berasa makan di restoran bintang lima tapi di rumah sendiri."
    },
    {
      id: 2,
      name: "Siti Aminah",
      role: "Ibu Rumah Tangga",
      img: "https://i.pravatar.cc/150?u=2",
      review: "Anak-anak suka sekali dengan Ramen Shoyu-nya. Pengirimannya cepat dan packingnya sangat aman. Rekomendasi banget buat keluarga!"
    },
    {
      id: 3,
      name: "Budi Santoso",
      role: "Karyawan Swasta",
      img: "https://i.pravatar.cc/150?u=3",
      review: "Dimsum Mix Platter-nya juara! Isian ayam dan udangnya sangat padat. Pas banget buat cemilan sore sambil kerja dari rumah."
    },
    {
      id: 4,
      name: "Dewi Lestari",
      role: "Lifestyle Blogger",
      img: "https://i.pravatar.cc/150?u=4",
      review: "Suka banget sama konsep Sedap. Higienis, bumbu alaminya terasa banget, dan tampilannya sangat estetik saat disajikan."
    },
    {
      id: 5,
      name: "Rian Hidayat",
      role: "Mahasiswa",
      img: "https://i.pravatar.cc/150?u=5",
      review: "Harga mahasiswa tapi rasa juara. Porsinya cukup banyak dan yang paling penting pelayanannya sangat ramah dan cepat."
    },
    {
      id: 6,
      name: "Jessica Putri",
      role: "Culinary Critic",
      img: "https://i.pravatar.cc/150?u=6",
      review: "Jarang menemukan layanan pesan antar yang menjaga tekstur makanan tetap sempurna sampai di tangan konsumen. Sedap berhasil melakukannya!"
    }
  ];

  return (
    <section id="testimoni" className="py-24 bg-[#F8F9FA]">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        {/* Header Section */}
        <div className="mb-16">
          <div className="inline-block bg-orange-100 text-[#FF845E] px-5 py-1.5 rounded-full text-xs font-extrabold mb-4 uppercase tracking-widest">
            Testimonial
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#1E2633] tracking-tight">
            Apa Kata Pelanggan Kami?
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Kepuasan pelanggan adalah prioritas utama kami dalam menyajikan setiap hidangan.
          </p>
        </div>
        
        {/* Grid 6 Kartu - 3 Kolom Desktop, 2 Kolom Tablet, 1 Kolom HP */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reviews.map((item) => (
            <div 
              key={item.id} 
              className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-50 flex flex-col items-start text-left hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
            >
              {/* Rating Bintang */}
              <div className="flex gap-1 text-orange-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-sm">★</span>
                ))}
              </div>

              {/* Isi Review */}
              <p className="text-[#4B5563] text-[15px] leading-relaxed mb-8 flex-grow italic">
                "{item.review}"
              </p>

              {/* User Profile Footer */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100 w-full">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#FF845E] rounded-2xl rotate-6 scale-90 opacity-20 group-hover:rotate-12 transition-transform"></div>
                  <img 
                    src={item.img} 
                    className="w-12 h-12 rounded-2xl object-cover relative z-10 border border-white shadow-sm" 
                    alt={item.name} 
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[#1E2633] text-sm">{item.name}</h4>
                  <p className="text-[10px] text-[#FF845E] font-bold uppercase tracking-widest">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}