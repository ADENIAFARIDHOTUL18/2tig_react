export default function Services() {
  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="container mx-auto px-10 flex flex-col md:flex-row-reverse items-center gap-16">
        <div className="md:w-1/2">
          <img src="https://img.freepik.com/free-vector/team-goals-concept-illustration_114360-5175.jpg" className="rounded-3xl shadow-xl" alt="Services" />
        </div>
        <div className="md:w-1/2">
          <span className="text-[#FF7C5C] font-bold text-sm uppercase">Our Services</span>
          <h2 className="text-4xl font-bold text-[#1E2633] mt-4 mb-6 leading-tight">We Provide High Quality Services For You</h2>
          <p className="text-gray-500 mb-6 italic">"The quality of service was exceptional and the results were beyond our expectations."</p>
          <div className="space-y-3">
             {['Digital Marketing', 'Business Strategy', '24/7 Support'].map((s) => (
               <div key={s} className="flex items-center gap-3 font-semibold text-gray-700">
                 <span className="text-green-500">✔</span> {s}
               </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}