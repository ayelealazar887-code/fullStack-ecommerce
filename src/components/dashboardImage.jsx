import React from "react";
import flower from "../assets/flower.jpg";
import { categories, featuredProducts } from "../assets/data/data";
import flow from "../assets/flow.jpg";
import air from "../assets/air.jpg";
import indoor from "../assets/indoor-plant.jpg";
import care3 from "../assets/care3.jpg";
import care4 from "../assets/care4.jpg";
import Hotsale from "./Hotsale";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function DashboardImage() {
  return (
    <div className="bg-[#F8F8F5]">

      {/* Hero */}
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

      {/* Categories */}
      <section className="max-w-7xl mx-auto py-12 px-5">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold">Categories</h2>
          <button className="text-green-700">See All →</button>
        </div>

        <div className="flex justify-between gap-6 overflow-x-auto">
          {categories.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center min-w-[120px]"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-28 h-28 rounded-full object-cover shadow-md"
              />

              <h3 className="mt-3 uppercase text-sm tracking-wider">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Best Selling */}
      <section className="max-w-7xl mx-auto py-12 px-5">
        
        <h2 className="text-4xl font-semibold text-center mb-10">
          Best Selling
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              image: indoor,
              title: "INDOOR PLANTS",
            },
            {
              image: air,
              title: "AIR PURIFYING PLANTS",
            },
            {
              image: flow,
              title: "FLOWERING PLANTS",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-72">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <h2 className="text-3xl text-white font-bold text-center">
                    {item.title}
                  </h2>
                </div>
              </div>

              <Link to='/dashboard/shop'><button className="w-full bg-green-700 hover:bg-green-800 text-white py-3 font-semibold">
                Shop Now
              </button></Link>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Plants */}
      <section className="max-w-7xl mx-auto py-12 px-5">
        <h2 className="text-4xl font-semibold text-center mb-10">
          Trending Plants
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featuredProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow hover:shadow-xl transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-56 w-full object-cover rounded-t-lg"
              />

              <div className="p-4">
                <h3 className="font-semibold">
                  {item.name}
                </h3>

                <p className="text-gray-600 my-2">
                  ${item.price}
                </p>

                <button className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800">
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blogs */}
      <section className="max-w-7xl mx-auto py-12 px-5">
        <h2 className="text-4xl font-semibold text-center mb-10">
          Blogs
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="relative rounded-xl overflow-hidden">
            <img
              src={care3}
              alt=""
              className="h-72 w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
              <h3 className="text-2xl text-center font-semibold">
                8 Best
                <br />
                Low Maintenance Plants
                <br />
                for a Busy Home
              </h3>

              <button className="mt-5 bg-green-700 px-6 py-2 rounded">
                Read
              </button>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden">
            <img
              src={care4}
              alt=""
              className="h-72 w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
              <h3 className="text-2xl text-center font-semibold">
                Air Purifying Plants
                <br />
                You Should Take Home
                <br />
                Today
              </h3>

              <button className="mt-5 bg-green-700 px-6 py-2 rounded">
                Read
              </button>
            </div>
          </div>

        </div>
      </section>

      <Hotsale />

      <Footer />
    </div>
  );
}

export default DashboardImage;