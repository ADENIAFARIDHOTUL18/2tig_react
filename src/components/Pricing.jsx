export default function Pricing() {
  const plans = [
    { 
      name: "Basic", 
      price: "19", 
      features: ["1 Domain", "Limited Support", "Basic Hosting", "Standard Speed"] 
    },
    { 
      name: "Professional", 
      price: "49", 
      features: ["5 Domains", "Priority Support", "Premium Hosting", "High Speed"],
      popular: true 
    },
    { 
      name: "Enterprise", 
      price: "99", 
      features: ["Unlimited Domains", "24/7 Support", "Dedicated Server", "Ultra Speed"] 
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-[#F8F9FA]">
      <div className="container mx-auto px-10 text-center">
        <h2 className="text-4xl font-bold text-[#1E2633] mb-16">Simple Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((p, i) => (
            <div key={i} className={`p-10 rounded-3xl border transition-all duration-300 ${p.popular ? 'bg-[#FF7C5C] text-white scale-110 shadow-2xl border-none z-10' : 'bg-white border-gray-200 text-gray-800'}`}>
              <h3 className="text-xl font-bold mb-4">{p.name}</h3>
              <div className="text-5xl font-bold mb-8">${p.price}<span className="text-sm font-normal opacity-60">/mo</span></div>
              <ul className="text-left mb-8 space-y-4 opacity-90">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <span>✓</span> {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-full font-bold transition-all ${p.popular ? 'bg-white text-[#FF7C5C] hover:bg-gray-100' : 'border border-[#FF7C5C] text-[#FF7C5C] hover:bg-[#FF7C5C] hover:text-white'}`}>
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}