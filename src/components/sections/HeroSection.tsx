// src/components/sections/HeroSection.tsx
import React from "react";
import Button from "../Button";

const HeroSection = () => {
  return (
    <section
      className="w-full h-screen bg-cover bg-center flex items-center justify-center text-center text-white"
      style={{ backgroundImage: "url('/assets/hero-image.jpg')" }}
    >
      <div>
        <h2 className="text-4xl md:text-6xl font-bold">Welcome to ST0CK</h2>
        <p className="mt-4 text-lg md:text-xl">
          Your One-stop Solution for Trading & Investment
        </p>
        <Button label="Get Started" variant="primary" />
      </div>
    </section>
  );
};

export default HeroSection;
