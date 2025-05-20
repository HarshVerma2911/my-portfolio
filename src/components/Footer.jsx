import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-10 px-6 mt-20">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-white mb-2">Harsh Verma</h3>
        <p className="text-sm mb-6">
          A Full Stack Web Developer building Websites and Web Applications.
        </p>

        <div className="flex justify-center gap-6 text-xl mb-4">
          <a
            href="https://www.linkedin.com/in/harshverma2911/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/HarshVerma2911"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/harsh.r.verma/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaInstagram />
          </a>
        </div>

        <hr className="border-gray-700 my-6" />

        <p className="text-sm">&copy; {new Date().getFullYear()} Harsh Verma. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
