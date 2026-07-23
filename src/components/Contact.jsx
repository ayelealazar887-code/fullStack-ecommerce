import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { contactInfo } from "../assets/data/data";

function Contact() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left – intro */}
        <div>
          <p className="text-green-600 uppercase tracking-widest text-sm font-semibold mb-2">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            lorem ipsum doglas feuigwd jbrjgfjbs rgrgrgr regregre
            <br />
            rguurg lorem jregge rgegrv
          </p>

          {/* Social icons */}
          <div className="flex gap-4 mb-10">
            <a
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-600 hover:bg-green-600 hover:text-white transition-colors duration-200"
            >
              <FaFacebook size={18} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-600 hover:bg-green-600 hover:text-white transition-colors duration-200"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-600 hover:bg-green-600 hover:text-white transition-colors duration-200"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-600 hover:bg-green-600 hover:text-white transition-colors duration-200"
            >
              <FaTwitter size={18} />
            </a>
          </div>

          {/* Contact info cards */}
          <div className="flex flex-col gap-4">
            {contactInfo.map((contact, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-green-50 text-green-600 font-bold text-sm">
                  {contact.title.charAt(0)}
                </div>
                <div>
                  <h2 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">
                    {contact.title}
                  </h2>
                  <p className="text-gray-500 mt-0.5">{contact.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right – contact form */}
        <form className="bg-gray-50 rounded-2xl p-8 shadow-md flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Carter"
              className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows={5}
              placeholder="Write your message..."
              className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition resize-none"
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
