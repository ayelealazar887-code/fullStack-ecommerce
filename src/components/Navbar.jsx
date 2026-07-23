import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, ShoppingBag, X } from "lucide-react";

function Navbar() {
  const [openMobile, setMobile] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Shop Now", path: "/shop" },
    { name: "About Us", path: "/about" },
    { name: "Reviews", path: "/testimonials" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="w-full px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/20 bg-white/10 px-4 py-3 shadow-lg shadow-black/10 backdrop-blur-md sm:px-6">
        <Link
          to="/"
          className="text-lg font-semibold tracking-[0.35em] text-white sm:text-xl"
        >
          GROW
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <Link
              key={l.name}
              to={l.path}
              className="text-sm font-medium text-white/80 transition hover:text-white"
            >
              {l.name}
            </Link>
          ))}

          <Link
            to="/cart"
            className="rounded-full bg-white p-2 text-emerald-700 transition hover:bg-emerald-50"
          >
            <ShoppingBag size={18} />
          </Link>
        </div>

        <button
          onClick={() => setMobile((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 p-2 text-white transition hover:bg-white/20 md:hidden"
          aria-label="Toggle navigation"
        >
          {openMobile ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {openMobile && (
        <div className="mx-auto mt-3 flex max-w-6xl flex-col gap-2 rounded-2xl border border-white/10 bg-white/90 p-3 shadow-xl backdrop-blur-md md:hidden">
          {links.map((r) => (
            <Link
              key={r.name}
              to={r.path}
              onClick={() => setMobile(false)}
              className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-700"
            >
              {r.name}
            </Link>
          ))}
          <Link
            to="/cart"
            onClick={() => setMobile(false)}
            className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-700"
          >
            <ShoppingBag size={16} />
            Cart
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;