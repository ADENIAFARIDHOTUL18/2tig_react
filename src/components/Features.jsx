export default function Features() {
  const items = [
    { title: "High Performance", icon: "🚀", desc: "Blazing fast speeds for your multitasking needs." },
    { title: "Secure Data", icon: "🔒", desc: "Your security is our top priority with encrypted data." },
    { title: "Easy Integration", icon: "⚙️", desc: "Connect effortlessly with all your favorite digital tools." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-10 text-center">
        <h2 className="text-4xl font-bold text-[#1E2633] mb-4">Key Features Of The Product</h2>
        <p className="text-gray-500 mb-16 max-w-2xl mx-auto">Our product stands out with its high performance and seamless integration capabilities.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="p-10 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all text-left">
              <div className="w-14 h-14 bg-orange-50 text-2xl flex items-center justify-center rounded-2xl mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}