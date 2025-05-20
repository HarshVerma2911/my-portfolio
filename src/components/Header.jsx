import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full bg-gray-900 text-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-tight">Harsh Verma</h1>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-10 text-xl font-medium">
          <a href="#home" className="hover:text-cyan-400 transition">Home</a>
          <a href="#about" className="hover:text-cyan-400 transition">About</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-5">
          <a href="https://www.linkedin.com/in/harshverma2911/" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-2xl hover:text-cyan-400" />
          </a>
          <a href="https://github.com/HarshVerma2911" target="_blank" rel="noreferrer">
            <FaGithub className="text-2xl hover:text-cyan-400" />
          </a>
          <a href="https://www.instagram.com/harsh.r.verma/" target="_blank" rel="noreferrer">
            <FaInstagram className="text-2xl hover:text-cyan-400" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
