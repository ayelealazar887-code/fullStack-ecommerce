import React from "react";
import Navbar from "./Navbar";
import p1 from "../assets/p1.jpg"
import { useLocation } from "react-router-dom";
import flower from '../assets/flower.jpg'

function Hero() {

  const location = useLocation()
  const isDashboard = location.pathname.startsWith("/dashboard/shop")
  return (
    <section className="relative min-h-screen overflow-hidden">
      {
       isDashboard ? (
        <div className="relative h-[450px]">
                <img
                  src={flower}
                  alt="Hero"
                  className="w-full h-full object-cover"
                />
        
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <h1 className="text-6xl font-bold text-white tracking-wider">
                    Plan a Plant
                  </h1>
                </div>
              </div>
       )
       : (
        <>
      <img
        src={p1}
        alt="Indoor plants arranged beautifully"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-black/20" />

      <div className="relative z-10 flex min-h-screen flex-col">

        <div className="flex flex-1 items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl w-full">
            <div className="max-w-2xl text-white">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-emerald-200 sm:text-base">
                The Boutique Store For Plants
              </p>
              <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
                Everything Is Better <br /> With Plants
              </h1>
              <button className="rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-500">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div></>)}
    </section>
  );
}

export default Hero;
