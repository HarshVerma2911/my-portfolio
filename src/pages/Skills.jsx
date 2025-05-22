import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
} from "react-icons/fa";
import { FaC } from "react-icons/fa6";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiIntellijidea,
  SiPostman,
  SiCplusplus,
} from "react-icons/si";

const Skill = ({ icon: Icon, label, color }) => (
  <div
    className="flex flex-col items-center gap-2 transform transition duration-300 ease-in-out hover:scale-125"
    data-aos="zoom-in"
  >
    <Icon className={`text-5xl ${color}`} />
    <p className="text-lg font-medium text-white">{label}</p>
  </div>
);

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="skills" className="py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">
          My Skills
        </h2>

        <div className="space-y-12">
          {/* Programming Languages */}
          <div data-aos="fade-up">
            <h3 className="text-xl font-semibold mb-6 text-cyan-400">Programming Languages</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 justify-center">
              <Skill icon={FaC} label="C" color="text-red-400" />
              <Skill icon={SiCplusplus} label="C++" color="text-blue-400" />
              <Skill icon={FaJava} label="Java" color="text-orange-500" />
            </div>
          </div>

          {/* Front-End */}
          <div data-aos="fade-up">
            <h3 className="text-xl font-semibold mb-6 text-cyan-400">Front-End Development</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 justify-center">
              <Skill icon={FaHtml5} label="HTML" color="text-orange-600" />
              <Skill icon={FaCss3Alt} label="CSS" color="text-blue-600" />
              <Skill icon={FaJs} label="JavaScript" color="text-yellow-400" />
              <Skill icon={SiTailwindcss} label="Tailwind CSS" color="text-cyan-500" />
              <Skill icon={FaReact} label="React.js" color="text-cyan-400" />
            </div>
          </div>

          {/* Back-End */}
          <div data-aos="fade-up">
            <h3 className="text-xl font-semibold mb-6 text-cyan-400">Back-End Development</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 justify-center">
              <Skill icon={FaNodeJs} label="Node.js" color="text-green-600" />
              <Skill icon={SiExpress} label="Express.js" color="text-gray-300" />
            </div>
          </div>

          {/* Databases */}
          <div data-aos="fade-up">
            <h3 className="text-xl font-semibold mb-6 text-cyan-400">Databases</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 justify-center">
              <Skill icon={SiMongodb} label="MongoDB" color="text-green-500" />
              <Skill icon={SiMysql} label="MySQL" color="text-blue-500" />
              <Skill icon={SiPostgresql} label="PostgreSQL" color="text-indigo-500" />
            </div>
          </div>

          {/* Tools */}
          <div data-aos="fade-up">
            <h3 className="text-xl font-semibold mb-6 text-cyan-400">Version Control & Tools</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 justify-center">
              <Skill icon={FaGitAlt} label="Git" color="text-red-500" />
              <Skill icon={FaGithub} label="GitHub" color="text-white" />
              <Skill icon={SiIntellijidea} label="IntelliJ IDEA" color="text-purple-500" />
              <Skill icon={SiPostman} label="Postman" color="text-orange-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
