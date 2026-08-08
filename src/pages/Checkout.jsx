import React, { useState } from "react";
import { useCart } from "../context/Context";
import API from "../api/axios";


function Checkout() {
  const { cart } = useCart();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    streetAddress1: "",
    streetAddress2: "",
    city: "",
    state: "",
    zipCode: "",
    shipToDifferentAddress: false,
    notes: "",
    payment: "card",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.payment === "card") {
    await handlePaystackPayment();
    return;
  }

  if (formData.payment === "cash") {
    console.log("Cash on delivery");
    return;
  }

  if (formData.payment === "chapa") {
    console.log("Chapa selected");
    return;
  }

  if (formData.payment === "telebirr") {
    console.log("Telebirr selected");
    return;
  }
};

 const handlePaystackPayment = async () => {
  try {
    console.log("CART:", cart);
    console.log("SUBTOTAL:", subtotal);

    const orderItems = cart.map((item) => ({
      product: item.product._id,
      name: item.product.name,
      price: Number(item.product.price),
      quantity: item.quantity,
    }));

    const orderData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
      email: formData.email,

      streetAddress1: formData.streetAddress1,
      streetAddress2: formData.streetAddress2,
      city: formData.city,
      state: formData.state,
      zipCode: formData.zipCode,

      notes: formData.notes,

      payment: formData.payment,

      items: orderItems,

      totalAmount: subtotal,
    };

    console.log("SENDING ORDER:", orderData);

    // Create order in MongoDB
    const orderResponse = await API.post(
      "/orders",
      orderData
    );

    console.log("ORDER RESPONSE:", orderResponse.data);

    if (!orderResponse.data.success) {
      alert("Could not create order");
      return;
    }

    const order = orderResponse.data.order;

    console.log("ORDER CREATED:", order);

    // Initialize Paystack
    const paymentResponse = await API.post(
      "/payment/initialize",
      {
        email: formData.email,
        amount: subtotal,
        orderId: order._id,
      }
    );

    console.log(
      "PAYMENT RESPONSE:",
      paymentResponse.data
    );

    if (paymentResponse.data.success) {
      window.location.href =
        paymentResponse.data.authorization_url;
    }

  } catch (error) {
    console.error("CHECKOUT ERROR:", error);

    console.log(
      "SERVER RESPONSE:",
      error.response?.data
    );

    alert(
      error.response?.data?.message ||
        "Unable to process order"
    );
  }
};

  const subtotal = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );
  return (
    <section className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-10">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left Section */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-8">Billing Details</h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block mb-2 font-medium">First Name</label>

                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    required
                    className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">Last Name</label>

                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    required
                    className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>
              </div>

              {/* Contact */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block mb-2 font-medium">Phone Number</label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+251..."
                    required
                    className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">Email</label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block mb-2 font-medium">
                  Street Address *
                </label>

                <input
                  type="text"
                  name="streetAddress1"
                  value={formData.streetAddress1}
                  onChange={handleChange}
                  placeholder="House No / Apartment"
                  required
                  className="w-full border rounded-lg p-3 mb-3 outline-none focus:ring-2 focus:ring-green-600"
                />

                <input
                  type="text"
                  name="streetAddress2"
                  value={formData.streetAddress2}
                  onChange={handleChange}
                  placeholder="Street Name"
                  className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

              {/* City */}
              <div className="grid md:grid-cols-3 gap-5">
                <div>
                  <label className="block mb-2 font-medium">City</label>

                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">State</label>

                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">ZIP Code</label>

                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>
              </div>

              {/* Shipping */}
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="shipToDifferentAddress"
                  checked={formData.shipToDifferentAddress}
                  onChange={handleChange}
                  className="accent-green-700 w-5 h-5"
                />

                <span className="font-medium">Ship to a different address</span>
              </label>

              {/* Notes */}
              <div>
                <label className="block mb-2 font-medium">Order Notes</label>

                <textarea
                  name="notes"
                  rows={5}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Special delivery instructions..."
                  className="w-full border rounded-lg p-3 outline-none resize-none focus:ring-2 focus:ring-green-600"
                ></textarea>
              </div>

              {/* Payment */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Payment Method</h3>

                <div className="space-y-3">
                  <label className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={formData.payment === "card"}
                      onChange={handleChange}
                    />
                    Credit / Debit Card
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full mt-6 bg-red-700 hover:bg-red-800 transition text-white py-4 rounded-xl text-lg font-semibold"
                >
                  Place Order
                </button>
              </div>
            </form>
          </div>

          {/* Right Section */}
          <div>
            <div className="bg-white rounded-2xl shadow-md p-8 sticky top-24">
              <h2 className="text-2xl font-bold mb-8">Order Summary</h2>

              <div className="space-y-5">
                {cart.map((item) => (
                  <div key={item.product._id} className="flex justify-between">
                    <span>
                      {item.product.name} × {item.quantity}
                    </span>

                    <span>
                      ${(Number(item.product.price) * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}

                <hr />

                <div className="flex justify-between">
                  <span>subtotal</span>
                  <span>${subtotal}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-700">Free</span>
                </div>

                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>$0</span>
                </div>

                <hr />

                <div className="flex justify-between text-2xl font-bold">
                  <span>Total</span>

                  <span className="text-green-700">${subtotal}</span>
                </div>

                <p className="text-sm text-gray-500 text-center leading-6">
                  By placing your order, you agree to our Terms & Conditions and
                  Privacy Policy.
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
