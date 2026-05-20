export default function Footer() {
  return (
    <footer className="bg-[#1E2633] text-white py-12">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">Sedap</h2>
          <p className="text-gray-400 text-sm">Nikmati rasa bintang lima di rumah anda.</p>
        </div>
        <div className="flex gap-8 text-sm text-gray-400">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Contact Us</a>
        </div>
        <p className="text-gray-500 text-xs">© 2026 Sedap App. All rights reserved.</p>
      </div>
    </footer>
  );
}