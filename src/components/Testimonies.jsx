import React from "react";
import { testimonials } from "../assets/data/data";
import Contact from "./Contact";

function Testimonies() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-green-600 uppercase tracking-widest text-sm font-semibold mb-2">
            Testimonial
          </p>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
            What Our Clients Say
          </h3>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testi) => (
            <div
              key={testi.id}
              className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-6 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Quote icon */}
              <span className="text-green-400 text-5xl leading-none font-serif">
                "
              </span>

              <p className="text-gray-600 italic flex-1">{testi.review}</p>

              {/* Reviewer */}
              <div className="flex items-center gap-4 mt-4">
                <img
                  src={testi.image}
                  alt={testi.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-green-300"
                />
                <p className="font-semibold text-gray-800">{testi.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Contact />
    </section>
  );
}

export default Testimonies;
