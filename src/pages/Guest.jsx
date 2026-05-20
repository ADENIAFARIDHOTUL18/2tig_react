import React from "react";
// Import disesuaikan dengan nama file di folder components kamu
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About"; 
import Product from "../components/Product"; 
import Testimonials from "../components/Testimonials"; // Pakai 's' sesuai gambar foldermu
import Footer from "../components/Footer";

// Komponen tambahan yang ada di foldermu
import StatsBanner from "../components/StatsBanner";
import Services from "../components/Services";
import Team from "../components/Team";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";

export default function Guest() {
  return (
    <div className="antialiased font-sans bg-white selection:bg-orange-100 selection:text-orange-600">
      {/* 1. Navbar / Header (20 poin) */}
      <Navbar />
      
      <main>
        {/* 2. Hero / Banner (10 poin) */}
        <Hero />

        {/* Statistik */}
        <StatsBanner />

        {/* 3. Tentang Sedap / About (10 poin) */}
        {/* Di folder ada About.jsx dan AboutUs.jsx, kita pakai About.jsx */}
        <About />

        {/* 4. Produk Unggulan (30 poin) */}
        {/* Memanggil file Product.jsx */}
        <Product />

        {/* 5. Our Services */}
        <Services />

        {/* 6. Ulasan Pengguna / Testimoni (20 poin) */}
        {/* Sesuai gambar namamu adalah Testimonials.jsx */}
        <Testimonials />

        {/* Fitur Lainnya agar Web Terlihat Penuh & Profesional */}
        <Team />
        <Pricing />
        <Contact />
      </main>

      {/* 7. Footer (10 poin) */}
      <Footer />
    </div>
  );
}