import React from "react";
import flower from "../assets/flower.jpg";
import { Heart, PlaneTakeoff, Star } from "lucide-react";
import { featuredProducts } from "../assets/data/data";
import { Link } from "react-router-dom";
function DashboardImage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative flex h-screen items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${flower})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white">
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur-md">
            Nature
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">
            Reimagined <br />
            Indoors
          </h1>

          <p className="mt-6 text-lg text-white/90">
            Discover beautiful indoor plants that transform your home into a
            relaxing, natural space.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button className="rounded-full bg-emerald-600 px-8 py-3 font-semibold transition hover:bg-emerald-700">
              Shop Bestsellers
            </button>

            <button className="rounded-full border border-white px-8 py-3 font-semibold transition hover:bg-white hover:text-slate-900">
              Care Guides
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-10 text-center text-4xl font-bold text-slate-800">
            Featured Plants
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((f) => (
              <Link
                key={f.id}
                to={`/product/${f.id}`}
                className="block overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl"
              >
                <div
                  key={f.id}
                  className="overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="relative">
                    {f.sale && (
                      <span className="absolute left-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
                        Sale!
                      </span>
                    )}

                    <button className="absolute right-3 top-3 rounded-full bg-white p-2 shadow">
                      <Heart size={18} />
                    </button>

                    <img
                      src={f.image}
                      alt={f.name}
                      className="h-64 w-full object-cover"
                    />
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-slate-800">
                      {f.name}
                    </h3>

                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex gap-1 text-amber-500">
                        {Array.from({ length: f.rating }).map((_, index) => (
                          <Star key={index} size={16} fill="currentColor" />
                        ))}
                      </div>

                      <div className="flex items-center gap-2">
                        {f.oldPrice && (
                          <span className="text-sm text-slate-400 line-through">
                            ${f.oldPrice.toFixed(2)}
                          </span>
                        )}

                        <span className="font-semibold text-emerald-700">
                          ${f.price.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700">
                      <PlaneTakeoff size={18} />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default DashboardImage;
