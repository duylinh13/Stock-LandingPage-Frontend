// src/components/Header.tsx
import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <header className="w-full bg-gray-900 text-white py-4 px-8 flex justify-between items-center">
      <h1 className="text-2xl font-bold">ST0CK</h1>
      <nav className="space-x-4">
        <Button label="Home" variant="primary" />
        <Button label="About" variant="secondary" />
        <Button label="Services" variant="secondary" />
      </nav>
    </header>
  );
};

export default Header;
