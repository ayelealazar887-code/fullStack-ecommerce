import React from "react";

function Checkout() {
  return (
    <section className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-10">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left Section */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-8">
              Billing Details
            </h2>

            <form className="space-y-6">
              {/* Name */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block mb-2 font-medium">
                    First Name
                  </label>

                  <input
                    type="text"
                    placeholder="John"
                    className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    Last Name
                  </label>

                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>
              </div>

              {/* Contact */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block mb-2 font-medium">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="+251..."
                    className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block mb-2 font-medium">
                  Street Address
                </label>

                <input
                  type="text"
                  placeholder="House No / Apartment"
                  className="w-full border rounded-lg p-3 mb-3 outline-none focus:ring-2 focus:ring-green-600"
                />

                <input
                  type="text"
                  placeholder="Street Name"
                  className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

              {/* City */}
              <div className="grid md:grid-cols-3 gap-5">
                <div>
                  <label className="block mb-2 font-medium">
                    City
                  </label>

                  <input
                    type="text"
                    className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    State
                  </label>

                  <input
                    type="text"
                    className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    ZIP Code
                  </label>

                  <input
                    type="text"
                    className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>
              </div>

              {/* Shipping */}
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="accent-green-700 w-5 h-5"
                />

                <span className="font-medium">
                  Ship to a different address
                </span>
              </label>

              {/* Notes */}
              <div>
                <label className="block mb-2 font-medium">
                  Order Notes
                </label>

                <textarea
                  rows="5"
                  placeholder="Special delivery instructions..."
                  className="w-full border rounded-lg p-3 outline-none resize-none focus:ring-2 focus:ring-green-600"
                ></textarea>
              </div>

              {/* Payment */}
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Payment Method
                </h3>

                <div className="space-y-3">
                  <label className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      defaultChecked
                    />
                    Credit / Debit Card
                  </label>

                  <label className="flex items-center gap-3">
                    <input type="radio" name="payment" />
                    Chapa
                  </label>

                  <label className="flex items-center gap-3">
                    <input type="radio" name="payment" />
                    Telebirr
                  </label>

                  <label className="flex items-center gap-3">
                    <input type="radio" name="payment" />
                    Cash on Delivery
                  </label>
                </div>
              </div>
            </form>
          </div>

          {/* Right Section */}
          <div>
            <div className="bg-white rounded-2xl shadow-md p-8 sticky top-24">
              <h2 className="text-2xl font-bold mb-8">
                Order Summary
              </h2>

              <div className="space-y-5">
                <div className="flex justify-between">
                  <span>Snake Plant × 2</span>
                  <span>$50</span>
                </div>

                <div className="flex justify-between">
                  <span>Monstera × 1</span>
                  <span>$35</span>
                </div>

                <hr />

                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>$85</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-700">
                    Free
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>$0</span>
                </div>

                <hr />

                <div className="flex justify-between text-2xl font-bold">
                  <span>Total</span>
                  <span className="text-green-700">
                    $85
                  </span>
                </div>

                <button className="w-full mt-6 bg-green-700 hover:bg-green-800 transition text-white py-4 rounded-xl text-lg font-semibold">
                  Place Order
                </button>

                <p className="text-sm text-gray-500 text-center leading-6">
                  By placing your order, you agree to our Terms &
                  Conditions and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;