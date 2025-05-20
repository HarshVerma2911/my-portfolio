import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="px-6 py-20 bg-gray-900 text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="mb-6 text-gray-300">Feel free to contact me through this form or my socials.</p>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-cyan-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-cyan-500"
          />
          <textarea
            rows="6"
            placeholder="Your Message"
            className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-cyan-500"
          ></textarea>
          <button type="submit" className="bg-cyan-600 hover:bg-cyan-700 py-2 px-6 rounded font-semibold">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
