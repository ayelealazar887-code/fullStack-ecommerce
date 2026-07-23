import React from "react";
import { aboutData } from "../assets/data/data";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import PromoCards from "./PromoCards";
import CTASection from "./CTASection";

function About() {
  return (
    <section className="w-full bg-[#f7f4ee] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 rounded-4xl border border-emerald-100 bg-white p-6 shadow-sm lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
          <div className="grid gap-4 sm:grid-cols-2">
            {aboutData.images.map((image, i) => (
              <img
                key={i}
                src={image}
                alt="Plant showcase"
                className={`h-64 w-full rounded-2xl object-cover ${i === 0 ? "sm:h-80" : "sm:h-72"}`}
              />
            ))}
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
              {aboutData.subtitle}
            </span>

            <h2 className="mt-4 text-3xl font-bold text-slate-800 sm:text-4xl">
              {aboutData.title}
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-600">
              {aboutData.description}
            </p>

            <blockquote className="mt-8 border-l-4 border-emerald-500 pl-4 text-lg italic text-slate-700">
              {aboutData.quote}
            </blockquote>

            <h3 className="mt-6 text-lg font-semibold text-slate-800">
              {aboutData.signature}
            </h3>

            <div className="mt-6 flex items-center gap-3">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 transition hover:bg-emerald-600 hover:text-white"
                  >
                    <Icon size={16} />
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <PromoCards />
      <CTASection />
    </section>
  );
}

export default About;
