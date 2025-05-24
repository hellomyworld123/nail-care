import React from "react";

export default function Header() {
  return (
    <header className="bg-noir text-gold py-4 px-6 flex justify-between items-center shadow-lg">
      <a href="/" className="flex-shrink-0">
        <img src="/logo.png" alt="Sahâr Nail Care" className="h-10 w-auto sm:h-12" />
      </a>
      <nav className="hidden md:flex space-x-8 text-base lg:text-lg font-medium">
        <a href="#services" className="hover:text-rose transition">Services</a>
        <a href="#booking" className="hover:text-rose transition">Réservation</a>
        <a href="#contact" className="hover:text-rose transition">Contact</a>
      </nav>
      <button className="md:hidden text-gold">{/* burger icon */}</button>
    </header>
  );
}