import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z79v40b",     // replace with your EmailJS service ID
        "template_nuxbguj",    // replace with your template ID
        form.current,
        "5wC6XQSDLpy2CMXNP"      // replace with your public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Try again.");
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="px-6 py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16" data-aos="fade-up">
          Contact
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center bg-gray-800 p-8 rounded-lg shadow-lg">
          {/* Left */}
          <div data-aos="fade-right" className="space-y-6">
            <h3 className="text-3xl font-semibold text-cyan-400">Let’s Collaborate</h3>
            <p className="text-lg text-gray-300">
              Interested in building awesome projects together? I’m always open to freelance work,
              collaborations, or just a friendly tech chat. Feel free to reach out!
            </p>
            <div className="flex items-center gap-4 text-cyan-500 text-lg">
              <FaEnvelope className="text-2xl" />
              <a
                href="mailto:rharsh242@gmail.com"
                className="hover:underline hover:text-cyan-400 transition"
              >
                rharsh242@gmail.com
              </a>
            </div>
          </div>

          {/* Right */}
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-left"
            className="flex flex-col gap-4 bg-gray-900 p-6 rounded-lg"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="px-4 py-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="email"
              name="reply_to"
              placeholder="Your Email"
              required
              className="px-4 py-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
              className="px-4 py-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            ></textarea>
            <button
              type="submit"
              className="bg-cyan-600 hover:bg-cyan-700 py-3 px-6 rounded font-semibold transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
