import React, { useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/axios";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await API.post("/users/register", formData);

      console.log(data);

      alert("Registration Successful");

    } catch (error) {

      console.log(error.response.data);

      alert(error.response.data.message);

    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-[400px] rounded-xl shadow-lg p-8 bg-white">

        <h2 className="text-3xl font-bold text-center mb-2">
          Create Account
        </h2>

        <p className="mb-8 text-center text-sm text-slate-500">
          Join us and start shopping.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-3"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-3"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-3"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-emerald-600 py-3 text-white"
          >
            Register
          </button>

        </form>

        <p className="mt-6 text-center">
          Already have an account?

          <Link
            to="/login"
            className="text-emerald-600 ml-2"
          >
            Login
          </Link>

        </p>

      </div>
    </div>
  );
}

export default Register;