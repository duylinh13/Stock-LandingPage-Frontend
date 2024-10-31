// src/App.tsx
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/sections/HeroSection";
// Import các section khác

const App = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      <Header />
      <main>
        <HeroSection />
        {/* Thêm các section khác ở đây */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
