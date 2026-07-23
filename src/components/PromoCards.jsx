import React from "react";
import { promoCards } from "../assets/data/data";

function PromoCards() {
  return (
    <section className="mx-auto mt-10 max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-2">
        {promoCards.map((card) => (
          <div
            key={card.id}
            className="relative overflow-hidden rounded-4xl border border-emerald-100 shadow-sm"
          >
            <img src={card.image} alt={card.title} className="h-72 w-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
              <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
              <p className="mt-3 max-w-md text-sm leading-7 text-emerald-50">
                {card.description}
              </p>
              <button className="mt-5 w-fit rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50">
                {card.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PromoCards;
