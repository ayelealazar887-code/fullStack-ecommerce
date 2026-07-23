import React from "react";
import {
  ArrowRight,
  BadgeCheck,
  Leaf,
  HeartHandshake,
  Truck,
  BadgeDollarSign,
  Sprout,
} from "lucide-react";
import { desc, categories } from "../assets/data/data";

function Categories() {
  return (
    <section className="min-h-screen w-full bg-[#f7f4ee] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-8rem)] w-full max-w-6xl flex-col justify-center space-y-8">
        <div className="overflow-x-auto pb-2">
          <div className="flex min-w-max gap-4">
            {desc.map((item) => {
              const iconMap = {
                "High Quality Plants": <Leaf size={20} />,
                "Wide Plant Range": <Sprout size={20} />,
                "Excellent Services": <HeartHandshake size={20} />,
                "Fast Delivery": <Truck size={20} />,
                "Affordable Prices": <BadgeDollarSign size={20} />,
                "Easy Plant Care": <BadgeCheck size={20} />,
              };

              return (
                <div
                  key={item.id}
                  className="w-72 shrink-0 rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    {iconMap[item.title]}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-slate-800">{item.title}</h3>
                  <p className="text-sm leading-6 text-slate-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="overflow-x-auto pb-2">
          <div className="flex min-w-max gap-4">
            {categories.map((i) => (
              <div
                key={i.id}
                className="group w-64 shrink-0 overflow-hidden rounded-3xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <img src={i.image} alt={i.name} className="h-56 w-full object-cover" />
                <div className="flex items-center justify-between px-4 py-4">
                  <h3 className="text-lg font-semibold text-slate-800">{i.name}</h3>
                  <div className="rounded-full bg-emerald-100 p-2 text-emerald-700 transition group-hover:bg-emerald-600 group-hover:text-white">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
