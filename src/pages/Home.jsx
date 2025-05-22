import React from "react";
import {
  FaChevronDown,
  FaInfoCircle,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Home = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center px-6"
    >
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: { value: "#000000" },
          },
          fpsLimit: 60,
          particles: {
            number: { value: 100, density: { enable: true, area: 800 } },
            color: { value: "#00ffff" },
            shape: { type: "circle" },
            opacity: {
              value: 0.5,
              random: true,
              anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false },
            },
            size: { value: 3, random: true },
            links: {
              enable: true,
              distance: 150,
              color: "#00ffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: "none",
              random: false,
              straight: false,
              outModes: { default: "out" },
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              resize: true,
            },
            modes: {
              grab: { distance: 200, links: { opacity: 0.7 } },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 -z-10"
      />

      {/* Content Container */}
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between z-10 gap-10">
        {/* Left - Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6">
            Hi,{" "}
            <p>
              I'm <span className="text-cyan-400">Harsh Verma</span>
            </p>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-medium mb-10 max-w-xl">
            Aspiring software developer, MERN stack coder, creative problem
            solver. Passionate about building meaningful solutions that drive
            real-world impact.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/Harsh-Verma-Resume.pdf"
              download
              className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white text-lg px-8 py-4 rounded-full transition font-semibold"
            >
              <FaDownload />
              Resume
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-200 text-black text-lg px-6 py-4 rounded-full transition font-semibold"
            >
              <FaInfoCircle />
              More
            </a>
          </div>
        </div>

        {/* Right - White Box with Larger Image and Static Quote */}
        <div className="flex-1 mt-12 md:mt-0 flex justify-center md:justify-end">
          <div className="w-80 bg-white rounded-xl shadow-xl flex flex-col items-center justify-start p-6 h-auto">
            {/* Enlarged Profile Image */}
            <img
              src="/photo.jpg"
              alt="Harsh Verma"
              className="w-52 h-52 object-cover rounded-full shadow-md mb-4"
            />

            {/* Static Quote */}
            <p className="text-xl font-semibold text-center text-black mb-4 px-2">
              "Bringing ideas to life with code and creativity."
            </p>

            {/* Social Links */}
            <div className="flex gap-6 mt-2">
              {/* GitHub */}
              <a
                href="https://github.com/HarshVerma2911"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 hover:text-black text-2xl transition-transform transform hover:scale-110"
              >
                <FaGithub />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/harshverma2911/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-700 hover:text-blue-900 text-2xl transition-transform transform hover:scale-110"
              >
                <FaLinkedin />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/harsh.r.verma/"
                target="_blank"
                rel="noreferrer"
                className="text-pink-500 hover:text-pink-800 text-2xl transition-transform transform hover:scale-110"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 flex flex-col items-center z-10">
        <FaChevronDown className="text-cyan-400 animate-bounce text-2xl" />
      </div>
    </section>
  );
};

export default Home;
