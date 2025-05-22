import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-6 px-6 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
        
        {/* Left Section */}
        <div className="text-left">
          <h3 className="text-3xl font-bold text-white mb-2">Harsh Verma</h3>
          <p className="text-sm mb-2">
            A Full Stack Developer building Websites and Web Applications & more.
          </p>
        </div>

        {/* Right Section */}
        <div className="text-left">
          <h4 className="text-md font-semibold text-white mb-2">Social</h4>
          <div className="flex justify-center md:justify-end gap-6 text-2xl">
            <a
              href="https://www.linkedin.com/in/harshverma2911/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-700 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/HarshVerma2911"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/harsh.r.verma/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Divider & Animated Thanks Message */}
      <div className="text-center mt-6 animate-pulse text-cyan-400 text-sm font-medium">
        Thanks for visiting — Let’s build something amazing together!
      </div>

      <hr className="border-gray-700 my-4" />
      <p className="text-sm text-center">
        &copy; {new Date().getFullYear()} Harsh Verma. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
