import React from "react";

const projects = [
  {
    title: "Instagram Clone App",
    desc: "A React-based Instagram clone for practice and UI exploration.",
  },
  {
    title: "CAP - eCommerce Clothing App",
    desc: "A full MERN stack clothing and accessories eCommerce website.",
  },
  {
    title: "Blog App",
    desc: "A MERN stack blogging platform to create and share posts.",
  },
  {
    title: "Spotify Clone",
    desc: "A Spotify UI clone using React to stream and browse songs.",
  },
  {
    title: "NutraHeal",
    desc: "A health and nutrition site with blogs, recipes, and a shop.",
  },
  {
    title: "Travelingo",
    desc: "A travel and tours dummy site for exploring destinations.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="px-6 py-20 bg-gray-950 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <p className="mb-8 text-gray-300">Some of my personal projects with descriptions and tech stacks.</p>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, idx) => (
            <div key={idx} className="border border-gray-700 p-5 rounded-md hover:border-cyan-500 transition">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300">{project.desc}</p>
              <button className="mt-4 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded text-sm">
                See the Project
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
