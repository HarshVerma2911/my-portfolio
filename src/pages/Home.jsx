import React from "react";
import { FaChevronDown, FaInfoCircle, FaDownload } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Home = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
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
            number: {
              value: 100,
              density: {
                enable: true,
                area: 800,
              },
            },
            color: {
              value: "#00ffff",
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
            },
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
              outModes: {
                default: "out",
              },
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 200,
                links: {
                  opacity: 0.7,
                },
              },
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

          {/* 👉 Catchy description moved here */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-medium mb-10 max-w-xl">
            An aspiring software developer with a passion for building impactful
            solutions. Bringing ideas to life with code and creativity.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            {/* Resume Button with Download Icon */}
            <a
              href="/Harsh-Verma-Resume.pdf"
              download
              className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white text-lg px-8 py-4 rounded-full transition font-semibold"
            >
              <FaDownload />
              Resume
            </a>

            {/* More Button */}
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-200 text-black text-lg px-6 py-4 rounded-full transition font-semibold"
            >
              <FaInfoCircle />
              More
            </a>
          </div>
        </div>

        {/* Right - Square Photo + Description */}
        <div className="flex-1 mt-12 md:mt-0 flex flex-col items-center md:items-end text-center md:text-right">
          <img
            src="/photo.jpg"
            alt="Harsh Verma"
            className="w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-cyan-400 shadow-xl hover:scale-105 transition-transform duration-300"
          />

          {/* 👉 Moved TypeAnimation below image */}
          <TypeAnimation
            sequence={[
              "A Full Stack Developer",
              2000,
              "A React.js Enthusiast",
              2000,
              "A MERN Stack Coder",
              2000,
              "A Problem Solver",
              2000,
            ]}
            wrapper="p"
            speed={50}
            className="mt-6 text-xl sm:text-2xl md:text-3xl text-orange-200 font-semibold"
            repeat={Infinity}
          />
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
