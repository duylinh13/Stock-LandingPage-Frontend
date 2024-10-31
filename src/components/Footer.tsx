// src/components/Footer.tsx
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-6 text-center">
      <p>&copy; {new Date().getFullYear()} ST0CK. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
