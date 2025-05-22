import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-gray-900 text-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-tight">Portfolio</h1>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-10 text-xl font-medium">
          <a href="#home" className="hover:text-cyan-400 transition">Home</a>
          <a href="#about" className="hover:text-cyan-400 transition">About</a>
          <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
        </nav>

        {/* Contact Me Button */}
        <a
          href="#contact"
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-full font-semibold transition"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;
