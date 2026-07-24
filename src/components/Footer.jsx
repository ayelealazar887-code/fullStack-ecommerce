import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export const quickLinks = [
  {
    title: "Quick Links",
    links: [
      { name: "About Us", path: "/about" },
      { name: "Bulk Order", path: "/bulk-order" },
      { name: "Gifts", path: "/gifts" },
      { name: "Organic Garden", path: "/organic-garden" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "T&C", path: "/terms" },
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Returns", path: "/returns" },
      { name: "Shipping", path: "/shipping" },
      { name: "Cancellation", path: "/cancellation" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "FAQs", path: "/faqs" },
      { name: "Contact Us", path: "/contact" },
    ],
  },
];

function Footer() {
  return (
    <footer className="mt-20">
      {/* Top Footer */}
      <div className="bg-[#4F7D39] text-white px-8 md:px-16 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">

          {/* Logo */}
          <div>
            <h2 className="text-3xl font-serif font-bold tracking-wide">
              Plan A Plant
            </h2>
          </div>

          {/* Footer Links */}
          {quickLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">
                {section.title}
              </h3>

              <div className="flex flex-col gap-2 text-sm text-gray-200">
                {section.links.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="hover:text-white transition"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Right Section */}
          <div className="flex flex-col justify-between">

            <div>
              <p className="text-sm">
                © {new Date().getFullYear()} Plan A Plant
              </p>
              <p className="text-sm">
                All Rights Reserved
              </p>
            </div>

            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center hover:bg-black/40 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center hover:bg-black/40 transition"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center hover:bg-black/40 transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#23481F] text-white py-4 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6">

          <p className="text-sm text-center">
            We facilitate payments through trusted gateways
          </p>

          <div className="flex gap-3">
            <span className="bg-white text-blue-700 px-2 py-1 rounded text-xs font-bold">
              VISA
            </span>

            <span className="bg-white text-red-600 px-2 py-1 rounded text-xs font-bold">
              MasterCard
            </span>

            <span className="bg-white text-blue-500 px-2 py-1 rounded text-xs font-bold">
              AMEX
            </span>

            <span className="bg-white text-green-700 px-2 py-1 rounded text-xs font-bold">
              RuPay
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;