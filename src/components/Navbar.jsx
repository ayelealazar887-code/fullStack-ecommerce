import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  Search,
  ShoppingBag,
  User,
  X,
  LogOut,
} from "lucide-react";
import API from "../api/axios";

function Navbar() {
  const [openMobile, setMobile] = useState(false);
  const [search, setSearch] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const isDashboard = location.pathname.startsWith("/dashboard");

  const landingLinks = [
    { name: "About Us", path: "/about" },
    { name: "Reviews", path: "/testimonials" },
    { name: "Contact Us", path: "/contact" },
  ];

  const dashboardLinks = [
    { name: "Home", path: "/dashboard" },
    { name: "Shop Plants", path: "/dashboard/shop" },
    { name: "Care Tips", path: "/dashboard/care-tips" },
  ];

  const links = isDashboard ? dashboardLinks : landingLinks;

  const handleSearch = () => {
    if (!search.trim()) return;

    navigate(`/dashboard/shop?search=${encodeURIComponent(search)}`);
    setMobile(false);
  };

  const handleLogout = async () => {
    try {
      const { data } = await API.post("/users/logout");

      if (data.success) {
        setMobile(false);
        navigate("/login");
      }
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-emerald-700 shadow-lg">
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
              {/* Search */}
              <div className="flex items-center overflow-hidden rounded-full bg-white">
                <input
                  type="text"
                  placeholder="Search plants..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && handleSearch()
                  }
                  className="w-56 px-4 py-2 text-sm text-gray-700 outline-none"
                />

                <button
                  onClick={handleSearch}
                  className="bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700"
                >
                  <Search size={18} />
                </button>
              </div>

              {/* Cart */}
              <Link
                to="/dashboard/cart"
                className="rounded-full bg-white p-2 text-emerald-700 transition hover:bg-emerald-100"
              >
                <ShoppingBag size={18} />
              </Link>

              {/* Profile */}
              <Link
                to="/profile"
                className="rounded-full bg-white p-2 text-emerald-700 transition hover:bg-emerald-100"
              >
                <User size={18} />
              </Link>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 rounded-full bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600"
              >
                <LogOut size={16} />
                Logout
              </button>
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

        {/* Mobile Menu Button */}
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
              {/* Search */}
              <div className="mt-3 flex items-center overflow-hidden rounded-full border border-gray-300">
                <input
                  type="text"
                  placeholder="Search plants..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && handleSearch()
                  }
                  className="flex-1 px-4 py-2 text-sm outline-none"
                />

                <button
                  onClick={handleSearch}
                  className="bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700"
                >
                  <Search size={18} />
                </button>
              </div>

              {/* Cart */}
              <Link
                to="/dashboard/cart"
                onClick={() => setMobile(false)}
                className="mt-3 flex items-center gap-2 rounded-lg px-3 py-3 text-slate-700 transition hover:bg-emerald-50"
              >
                <ShoppingBag size={18} />
                Cart
              </Link>

              {/* Profile */}
              <Link
                to="/profile"
                onClick={() => setMobile(false)}
                className="mt-2 flex items-center gap-2 rounded-lg px-3 py-3 text-slate-700 transition hover:bg-emerald-50"
              >
                <User size={18} />
                Profile
              </Link>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-red-500 py-3 font-medium text-white transition hover:bg-red-600"
              >
                <LogOut size={18} />
                Logout
              </button>
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