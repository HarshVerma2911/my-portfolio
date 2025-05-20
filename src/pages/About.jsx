import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJava,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

const About = () => {
  return (
    <section id="about" className="px-6 py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* About Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Certifications */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">
              📜 Certifications
            </h3>
            <p className="text-sm text-gray-300">
              {/* Add your certifications here */}
              - Full Stack Web Development by XYZ Institute
              <br />
              - React Mastery Bootcamp – Udemy
              <br />- Java Foundations – Oracle
            </p>
          </motion.div>

          {/* Achievements */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">
              🏆 Achievements
            </h3>
            <p className="text-sm text-gray-300">
              {/* Add your achievements here */}
              - Built a full-fledged MERN stack college chatbot
              <br />
              - 1st place in inter-college hackathon 2024
              <br />- Top performer in Java coding competition
            </p>
          </motion.div>

          {/* Extra-Curricular Activities */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">
              🎨 Extra-Curricular
            </h3>
            <p className="text-sm text-gray-300">
              {/* Add your activities here */}
              - Guitarist in college band
              <br />
              - Cricket team captain
              <br />- Volunteer at tech fests and seminars
            </p>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mt-12 mb-6">Skills</h3>

          {/* Programming Languages */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4">
              Programming Languages
            </h4>
            <div className="flex flex-wrap gap-6">
              <img src="/icons/c.svg" alt="C" className="w-12 h-12" />
              <img src="/icons/cpp.svg" alt="C++" className="w-12 h-12" />
              <FaJava className="text-white-400 text-9xl" title="Java" />
            </div>
          </div>

          {/* Front-End Development */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4">
              Front-End Development
            </h4>
            <div className="flex flex-wrap gap-6">
              <img src="/icons/html.png" alt="HTML" className="w-12 h-12" />
              <img src="/icons/css.png" alt="CSS" className="w-12 h-12" />
              <img
                src="/icons/javascript.png"
                alt="JavaScript"
                className="w-12 h-12"
              />
              <img
                src="/icons/tailwind.png"
                alt="Tailwind CSS"
                className="w-12 h-12"
              />
              <FaReact className="text-cyan-400 text-9xl" />
            </div>
          </div>

          {/* Back-End Development */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4">Back-End Development</h4>
            <div className="flex flex-wrap gap-6">
              <img src="/icons/node.png" alt="Node.js" className="w-12 h-12" />
              <img
                src="/icons/react.png"
                alt="React.js"
                className="w-12 h-12"
              />
            </div>
          </div>

          {/* Databases */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4">Databases</h4>
            <div className="flex flex-wrap gap-6">
              <img
                src="/icons/mongodb.png"
                alt="MongoDB"
                className="w-12 h-12"
              />
              <img src="/icons/mysql.png" alt="MySQL" className="w-12 h-12" />
              <img
                src="/icons/postgresql.png"
                alt="PostgreSQL"
                className="w-12 h-12"
              />
            </div>
          </div>

          {/* Version Control & Tools */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4">
              Version Control & Tools
            </h4>
            <div className="flex flex-wrap gap-6">
              <img src="/icons/git.png" alt="Git" className="w-12 h-12" />
              <img src="/icons/github.png" alt="GitHub" className="w-12 h-12" />
              <img
                src="/icons/vscode.png"
                alt="Visual Studio Code"
                className="w-12 h-12"
              />
              <img
                src="/icons/intellij.png"
                alt="IntelliJ IDEA"
                className="w-12 h-12"
              />
              <img
                src="/icons/postman.png"
                alt="Postman"
                className="w-12 h-12"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
