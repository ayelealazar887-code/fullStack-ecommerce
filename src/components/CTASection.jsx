import React from "react";
import { ctaData } from "../assets/data/data";

function CTASection() {
  return (
    <section className="mx-auto mt-10 max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-4xl bg-[#183d2b] text-white shadow-xl">
        <img
          src={ctaData.image}
          alt={ctaData.title}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />

        <div className="relative z-10 flex flex-col items-start justify-center gap-4 px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
          <h3 className="max-w-2xl text-3xl font-bold sm:text-4xl">{ctaData.title}</h3>
          <p className="max-w-2xl text-sm leading-7 text-emerald-50 sm:text-base">
            {ctaData.description}
          </p>
          <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50">
            {ctaData.button}
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
