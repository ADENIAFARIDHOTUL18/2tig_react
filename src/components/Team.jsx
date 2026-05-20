export default function Team() {
  const members = [
    { name: "Adanya Farid", role: "CEO & Founder", img: "https://i.pravatar.cc/150?u=1" },
    { name: "Raihan Ahmada", role: "Lead Developer", img: "https://i.pravatar.cc/150?u=2" },
    { name: "Jane Doe", role: "UI/UX Designer", img: "https://i.pravatar.cc/150?u=3" }
  ];

  return (
    <section id="team" className="py-24 bg-white">
      <div className="container mx-auto px-10 text-center">
        <span className="text-[#FF7C5C] font-bold text-sm uppercase">Our Team</span>
        <h2 className="text-4xl font-bold text-[#1E2633] mt-2 mb-16">Meet Our Expert Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {members.map((m, i) => (
            <div key={i} className="group">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-[#FF7C5C] rounded-full translate-x-2 translate-y-2 opacity-20 group-hover:translate-x-0 group-hover:translate-y-0 transition-all"></div>
                <img src={m.img} className="relative z-10 w-44 h-44 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 shadow-lg" alt={m.name} />
              </div>
              <h4 className="text-xl font-bold text-[#1E2633]">{m.name}</h4>
              <p className="text-[#FF7C5C] font-medium">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}