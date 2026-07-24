import React from "react";
import { Trash2 } from "lucide-react";
import { useCart } from "../context/Context";

function Cart() {
  const { cart } = useCart();

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-700">
            Your Cart is Empty
          </h2>

          <p className="mt-3 text-gray-500">
            Looks like you haven't added any plants yet.
          </p>

          <a
            href="/dashboard/shop"
            className="inline-block mt-8 bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800 transition"
          >
            Continue Shopping
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-10">
          Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">

            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-sm p-5 flex flex-col md:flex-row gap-6"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full md:w-44 h-44 object-cover rounded-xl"
                />

                <div className="flex-1">

                  <h2 className="text-2xl font-bold">
                    {item.name}
                  </h2>

                  <p className="text-gray-500 mt-2">
                    Beautiful indoor decorative plant.
                  </p>

                  <p className="text-3xl text-green-700 font-bold mt-4">
                    ${item.price}
                  </p>

                  <div className="flex items-center justify-between mt-6">

                    <div className="flex items-center border rounded-lg overflow-hidden">

                      <button className="px-4 py-2 hover:bg-gray-100">
                        -
                      </button>

                      <span className="px-6">
                        {item.quantity}
                      </span>

                      <button className="px-4 py-2 hover:bg-gray-100">
                        +
                      </button>

                    </div>

                    <button className="text-red-500 hover:text-red-600">
                      <Trash2 size={22} />
                    </button>

                  </div>

                </div>

              </div>
            ))}

          </div>

          {/* Summary */}
          <div>

            <div className="bg-white rounded-2xl shadow-sm p-8 sticky top-28">

              <h2 className="text-2xl font-bold mb-8">
                Order Summary
              </h2>

              <div className="flex justify-between mb-4 text-gray-600">
                <span>Items</span>
                <span>{cart.length}</span>
              </div>

              <div className="flex justify-between mb-4 text-gray-600">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <div className="flex justify-between mb-8 text-gray-600">
                <span>Tax</span>
                <span>$0</span>
              </div>

              <hr />

              <div className="flex justify-between text-2xl font-bold my-8">
                <span>Total</span>
                <span className="text-green-700">
                  ${subtotal}
                </span>
              </div>

              <button className="w-full bg-green-700 text-white py-4 rounded-xl text-lg font-semibold hover:bg-green-800 transition">
                Proceed to Checkout
              </button>

              <button className="w-full mt-4 border border-green-700 text-green-700 py-4 rounded-xl font-semibold hover:bg-green-50 transition">
                Continue Shopping
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Cart;