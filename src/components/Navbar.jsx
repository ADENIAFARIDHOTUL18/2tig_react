export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md py-5 border-b border-gray-50">
      <div className="container mx-auto px-6 lg:px-20 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-orange-500 rounded-lg flex items-center justify-center shadow-lg shadow-orange-200">
            <span className="text-white font-bold text-xl">S</span>
          </div>
          <span className="text-2xl font-black text-slate-800 tracking-tight">Sedap</span>
        </div>

        {/* Menu Tengah */}
        <div className="hidden md:flex gap-8 text-[15px] font-bold text-slate-500">
          <a href="#" className="text-orange-500">Home</a>
          <a href="#" className="hover:text-orange-500 transition-colors">Features</a>
          <a href="#" className="hover:text-orange-500 transition-colors">Services</a>
          <a href="#" className="hover:text-orange-500 transition-colors">Reviews</a>
          <a href="#" className="hover:text-orange-500 transition-colors">Team</a>
        </div>

        {/* Tombol Kanan */}
        <button className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-8 py-3 rounded-full text-sm font-bold shadow-lg shadow-orange-200 hover:scale-105 transition-all">
          Create Account
        </button>
      </div>
    </nav>
  );
}