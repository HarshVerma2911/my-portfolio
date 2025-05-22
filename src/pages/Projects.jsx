import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaJava,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiSpringboot,
  SiFirebase,
} from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

const techIconColors = {
  FaReact: "#61DBFB",
  FaNodeJs: "#3C873A",
  FaHtml5: "#E44D26",
  FaCss3Alt: "#1572B6",
  FaJs: "#F7DF1E",
  FaJava: "#007396",
  SiMongodb: "#47A248",
  SiTailwindcss: "#06B6D4",
  SiExpress: "#000000",
  SiPostgresql: "#336791",
  SiSpringboot: "#6DB33F",
  SiFirebase: "#FFCA28",
};

const projects = [
  {
    title: "EduForum",
    image: "/images/EduForum.jpg",
    desc: "A web-based platform designed to facilitate academic discussions, knowledge sharing, and interactive learning.",
    tech: [SiTailwindcss, FaReact, FaNodeJs, SiExpress, SiPostgresql],
    code: "https://github.com/HarshVerma2911/EduForum",
    live: "",
  },
  {
    title: "Syllabus Deadline Optimizer",
    image: "/images/SDO.jpg",
    desc: "A web-based application to help professors manage their lectures efficiently and track syllabus progress according to deadlines.",
    tech: [FaHtml5, FaCss3Alt, FaJs, FaJava, SiSpringboot, SiPostgresql],
    code: "https://github.com/HarshVerma2911/Syllabus-Deadline-Optimizer",
    live: "",
  },
  {
    title: "Faculty Feedback Management System",
    image: "/images/FMS.png",
    desc: "The faculty feedback management system is a software application designed to facilitate the collection, organization, and analysis of feedback from students about their faculties.",
    tech: [FaReact, FaNodeJs, SiExpress, SiFirebase],
    code: "https://github.com/orgs/Feedback-Management-System/repositories",
    live: "https://fms-msi.vercel.app",
  },
  {
    title: "Travelingo",
    image: "/images/Travelingo.png",
    desc: "Developed a static travel website as a hands-on practice project to strengthen my understanding of web development, layout, and responsiveness using HTML and CSS techniques.",
    tech: [FaHtml5, FaCss3Alt],
    code: "https://github.com/HarshVerma2911/Travelingo",
    live: "https://travelingo-practice.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="px-6 py-20 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">
          Projects
        </h2>
        <div className="grid gap-10 md:grid-cols-2" data-aos="zoom-in-up">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-cyan-500/30 transform transition duration-500 hover:scale-[1.03]"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="w-full h-60 bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-cyan-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-4 mb-4">
                  {project.tech.map((TechIcon, i) => {
                    const iconName = TechIcon.name;
                    const color = techIconColors[iconName] || "#ffffff";
                    return (
                      <TechIcon
                        key={i}
                        className="text-2xl hover:scale-110 transition-transform"
                        style={{ color }}
                      />
                    );
                  })}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-[#2ea44f] hover:bg-[#22863a] text-white px-4 py-2 rounded transition"
                  >
                    <FaGithub className="text-lg" />
                    View Code
                  </a>
                  <a
                    href={project.live || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center gap-2 ${
                      project.live
                        ? "bg-cyan-600 hover:bg-cyan-700"
                        : "bg-gray-600 cursor-not-allowed"
                    } text-white px-4 py-2 rounded transition`}
                  >
                    <FiExternalLink className="text-lg" />
                    {project.live ? "Live Site" : "Not Live Yet"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
