import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ShoppingBag, User, X } from "lucide-react";

function Navbar() {
  const [openMobile, setMobile] = useState(false);
  const location = useLocation();

const isDashboard = location.pathname.startsWith("/dashboard");

  const landingLinks = [
    { name: "About Us", path: "/about" },
    { name: "Reviews", path: "/testimonials" },
    { name: "Contact Us", path: "/contact" },
  ];

  const dashboardLinks = [
    { name: "Home", path: "/dashboard" },
    { name: "Shop Plants", path: "/shop" },
    { name: "Care Tips", path: "/care-tips" },
  ];

  const links = isDashboard ? dashboardLinks : landingLinks;

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-emerald-700 shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to={isDashboard ? "/dashboard" : "/"}
          className="text-2xl font-bold tracking-wider text-white"
        >
          GROW
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm font-medium text-white/80 transition hover:text-white"
            >
              {link.name}
            </Link>
          ))}

          {isDashboard ? (
            <>
              <Link
                to="/cart"
                className="rounded-full bg-white p-2 text-emerald-700 transition hover:bg-emerald-100"
              >
                <ShoppingBag size={18} />
              </Link>

              <Link
                to="/profile"
                className="rounded-full bg-white p-2 text-emerald-700 transition hover:bg-emerald-100"
              >
                <User size={18} />
              </Link>
            </>
          ) : (
            <Link
              to="/login"
              className="rounded-full bg-white px-5 py-2 font-semibold text-emerald-700 transition hover:bg-emerald-100"
            >
              Shop Now
            </Link>
          )}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMobile((prev) => !prev)}
          className="rounded-full border border-white/20 bg-white/10 p-2 text-white md:hidden"
        >
          {openMobile ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {openMobile && (
        <div className="mx-4 mb-4 rounded-2xl bg-white p-4 shadow-lg md:hidden">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobile(false)}
              className="block rounded-lg px-3 py-3 text-slate-700 transition hover:bg-emerald-50"
            >
              {link.name}
            </Link>
          ))}

          {isDashboard ? (
            <>
              <Link
                to="/cart"
                onClick={() => setMobile(false)}
                className="mt-2 flex items-center gap-2 rounded-lg px-3 py-3 text-slate-700 transition hover:bg-emerald-50"
              >
                <ShoppingBag size={18} />
                Cart
              </Link>

              <Link
                to="/profile"
                onClick={() => setMobile(false)}
                className="mt-2 flex items-center gap-2 rounded-lg px-3 py-3 text-slate-700 transition hover:bg-emerald-50"
              >
                <User size={18} />
                Profile
              </Link>
            </>
          ) : (
            <Link
              to="/login"
              onClick={() => setMobile(false)}
              className="mt-3 block rounded-lg bg-emerald-600 py-3 text-center font-semibold text-white transition hover:bg-emerald-700"
            >
              Shop Now
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;