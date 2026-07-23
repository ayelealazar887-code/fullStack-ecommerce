import React from "react";
import { featuredProducts } from "../assets/data/data";
import { Star } from "lucide-react";

function Feature() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-emerald-600">
            Featured Products
          </p>
          <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">
            Discover Our Best-Selling Plants
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Bring life and color to your space with our handpicked plant favorites.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((f) => (
            <div
              key={f.id}
              className="group relative overflow-hidden rounded-3xl border border-emerald-100 bg-[#f7f4ee] shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              {f.sale && (
                <span className="absolute left-4 top-4 z-10 rounded-full bg-emerald-600 px-3 py-1 text-sm font-semibold text-white">
                  Sale!
                </span>
              )}

              <img
                src={f.image}
                alt={f.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-800">{f.name}</h3>

                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {Array.from({ length: f.rating }).map((_, index) => (
                      <Star key={index} size={16} fill="currentColor" />
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                    {f.oldPrice && (
                      <span className="text-slate-400 line-through">
                        ${f.oldPrice.toFixed(2)}
                      </span>
                    )}
                    <span>${f.price.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Feature;
