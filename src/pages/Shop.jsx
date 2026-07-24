import React, { useState } from "react";
import Feature from "../components/Feature";
import { featuredProducts } from "../assets/data/data";
import eco from "../assets/eco.jpg";
import { useSearchParams, Link } from "react-router-dom";


function Shop() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search") || "";

  const filteredProducts = featuredProducts.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const currentProducts = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  return (
    <div className="flex flex-col lg:flex-row gap-8 mt-10">
      {/* Left Banner */}
      <div className="lg:w-1/3 relative rounded-xl overflow-hidden">
        <img
          src={eco}
          alt="Eco Friendly Plants"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white p-6">
          <p className="uppercase text-sm tracking-widest">Take Out</p>

          <h2 className="text-3xl font-bold my-2">
            Eco Friendly <br /> Plants
          </h2>

          <p className="text-4xl font-extrabold text-yellow-300">50% OFF</p>

          <button className="mt-6 bg-green-700 px-6 py-3 rounded hover:bg-green-800">
            Shop Now
          </button>
        </div>
      </div>

      {/* Products */}
      <div className="lg:w-2/3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-60 object-cover"
              />

             <div className="p-4">
  <h3 className="font-semibold">{item.name}</h3>

  <p className="my-2 text-gray-600">${item.price}</p>

  <Link
    to={`/dashboard/product/${item.id}`}
    className="block w-full rounded bg-green-700 py-2 text-center text-white hover:bg-green-800"
  >
    Buy
  </Link>
</div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-8">
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded disabled:opacity-50 hover:bg-gray-100"
          >
            Previous
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`w-10 h-10 rounded-full transition ${
                currentPage === index + 1
                  ? "bg-green-700 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded disabled:opacity-50 hover:bg-gray-100"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Shop;
