import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { featuredProducts } from "../assets/data/data";
import { useCart } from "../context/Context";
import API from "../api/axios";


function ProductDetails() {
  const { id } = useParams();

  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await API.get(`/products/${id}`);

        if (data.success) {
          setProduct(data.product);
          console.log(data.product);
        } else {
          setError("Product not found");
        }
      } catch (error) {
        console.log(error.response?.data || error.message);

        setError(error.response?.data?.message || "Unable to load product.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const { addToCart } = useCart();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-green-600 border-t-transparent"></div>

        <p className="text-lg font-medium text-gray-700">Loading product...</p>
      </div>
    );
  }

  // Error
  if (error) {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-4">
        <p className="text-xl font-semibold text-red-600">{error}</p>

        <button
          onClick={() => navigate("/dashboard/shop")}
          className="rounded-lg bg-green-700 px-5 py-2 text-white hover:bg-green-800"
        >
          Back to Shop
        </button>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-xl font-semibold">Product Not Found</p>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-28">
      <div className="grid lg:grid-cols-2 gap-14">
        {/* Images */}
        <div>
          <div className="rounded-xl overflow-hidden shadow">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Thumbnail Images */}
          <div className="flex gap-4 mt-5">
            <img
              src={product.image}
              alt=""
              className="w-24 h-24 rounded-lg object-cover border-2 border-green-700 cursor-pointer"
            />

            <img
              src={product.image}
              alt=""
              className="w-24 h-24 rounded-lg object-cover cursor-pointer"
            />

            <img
              src={product.image}
              alt=""
              className="w-24 h-24 rounded-lg object-cover cursor-pointer"
            />

            <img
              src={product.image}
              alt=""
              className="w-24 h-24 rounded-lg object-cover cursor-pointer"
            />
          </div>
        </div>

        {/* Product Information */}
        <div>
          <h1 className="text-5xl font-bold">{product.name}</h1>

          <div className="flex items-center gap-3 mt-5">
            <p className="text-4xl font-semibold text-green-700">
              ${product.price * quantity}
            </p>

            <p className="line-through text-gray-400 text-xl">
              ${product.price + 50}
            </p>
          </div>

          <p className="text-gray-600 mt-6 leading-8">
            Bring nature into your home with this beautiful indoor plant. Easy
            to care for and perfect for bedrooms, offices and living rooms.
          </p>

          {/* Quantity & Planter */}
          <div className="flex flex-wrap gap-8 mt-8">
            <div>
              <p className="font-medium mb-2">Quantity</p>

              <div className="flex border rounded-lg w-fit">
                <button
                  className="px-4 py-2 hover:bg-gray-100"
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                >
                  -
                </button>

                <span className="px-6 py-2">{quantity}</span>

                <button
                  className="px-4 py-2 hover:bg-gray-100"
                  onClick={() => setQuantity((prev) => Math.max(1, prev + 1))}
                >
                  +
                </button>
              </div>
            </div>

            <div>
              <p className="font-medium mb-2">Include Planter</p>

              <select className="border rounded-lg px-4 py-2">
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
          </div>

          {/* Button */}
          <button
            onClick={() => {
              addToCart(product, quantity);
              navigate("/dashboard/cart");
            }}
            className="mt-10 w-full bg-green-700 text-white py-4 rounded-lg font-semibold text-lg hover:bg-green-800 transition"
          >
            Add To Cart
          </button>

          {/* Delivery */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold">Delivery</h3>

            <p className="text-gray-500 mb-3">Enter your Pincode</p>

            <div className="flex gap-3">
              <input
                type="text"
                placeholder="500009"
                className="border rounded-lg px-4 py-2 flex-1"
              />

              <button className="text-green-700 font-semibold">CHECK</button>
            </div>

            <div className="mt-4 border rounded-lg p-4 text-gray-600">
              Delivery available for this location.
              <br />
              Usually delivered within 5-7 working days.
              <br />
              Standard Delivery.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
