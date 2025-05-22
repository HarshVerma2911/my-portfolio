import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const [showCertificates, setShowCertificates] = useState(false);
  const [showAchievements, setShowAchievements] = useState(false);
  const [showExtra, setShowExtra] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [showCertificates, showAchievements, showExtra]);

  return (
    <section id="about" className="py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Certifications */}
          <div
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition"
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">
              Certifications
            </h3>
            <p className="text-lg text-gray-300 mb-4">
              Certified in modern web technologies from reputed platforms.
            </p>
            {showCertificates && (
              <ul className="list-disc text-gray-300 space-y-2 pl-5">
                <li>TCS iON Career Edge - Young Professional with TCS iON.</li>
                <li>The Complete 2022 Web Development Bootcamp with Udemy.</li>
                <li>MongoDB & Node.js under Google Developer Group.</li>
                <li>
                  HTML, CSS & Bootstrap under Microsoft Learn Student
                  Ambassador.
                </li>
                <li>
                  Hotstar Clone using HTML, CSS and Bootstrap under Microsoft
                  Learn Student Ambassador.
                </li>
              </ul>
            )}
            <button
              onClick={() => setShowCertificates(!showCertificates)}
              className="mt-4 bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-full font-medium"
            >
              {showCertificates ? "Show Less" : "Show More"}
            </button>
          </div>

          {/* Achievements */}
          <div
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">
              Achievements
            </h3>
            <p className="text-lg text-gray-300 mb-4">
              Acknowledgements and presentations that reflect growth and
              innovation.
            </p>
            {showAchievements && (
              <ul className="list-disc text-gray-300 space-y-2 pl-5">
                <li>
                  Letter of Acknowledgment: Got an acknowledgment letter for
                  creating the project “Faculty Feedback Management System” that
                  is currently live at Maharaja Surajmal Institute, New Delhi.
                </li>
                <li>
                  Review Paper: Presented research paper on “AI-Driven Student
                  Assistance: How Chatbots Are Revolutionizing Education” in
                  National Conference on Technological Advancements in Academia
                  Industry 4.0 at Indira College of Engineering and Management,
                  Pune.
                </li>
              </ul>
            )}
            <button
              onClick={() => setShowAchievements(!showAchievements)}
              className="mt-4 bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-full font-medium"
            >
              {showAchievements ? "Show Less" : "Show More"}
            </button>
          </div>

          {/* Extra-Curricular Activities */}
          <div
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">
              Extra-Curricular
            </h3>
            <p className="text-lg text-gray-300 mb-4">
              From hackathons to cultural events – I stay actively involved.
            </p>
            {showExtra && (
              <ul className="list-disc text-gray-300 space-y-2 pl-5">
                <li>
                  Hackathons: Participated in Rajasthan IT Hackathon 2023.
                </li>
                <li>
                  Event Coordination: Served as Event Coordinator for an event
                  of CSI (Computer Society of India) in Maharaja Surajmal Institute.
                </li>
                <li>
                  Singing Participant – Kalavishkar 2025, ICEM
                </li>
                <li>
                  Dance Participant – Gusto 2025, Indira University:
                  Participated in the group dance event during Gusto 2025.
                </li>
              </ul>
            )}
            <button
              onClick={() => setShowExtra(!showExtra)}
              className="mt-4 bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-full font-medium"
            >
              {showExtra ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
