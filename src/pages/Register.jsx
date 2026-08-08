import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/axios";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    // Clear messages when user starts typing
    if (error) {
      setError("");
    }

    if (success) {
      setSuccess("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    try {
      const { data } = await API.post("/users/register", formData);

      console.log(data);

      if (data.success) {
        setSuccess("Registration successful! Redirecting to login...");

        // Clear form
        setFormData({
          name: "",
          email: "",
          password: "",
        });

        // Go to login after 1.5 seconds
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } else {
        setError(data.message || "Registration failed.");
      }
    } catch (error) {
      console.log(error.response?.data);

      if (error.response?.status === 409) {
        setError("This email is already registered.");
      } else {
        setError(
          error.response?.data?.message ||
            "Something went wrong. Please try again."
        );
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-center mb-2">
          Create Account
        </h2>

        <p className="mb-8 text-center text-sm text-slate-500">
          Join us and start shopping.
        </p>

        {/* Error Message */}
        {error && (
          <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* Success Message */}
        {success && (
          <div className="mb-5 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-600">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-emerald-600 py-3 text-white font-semibold hover:bg-emerald-700 transition"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          Already have an account?

          <Link
            to="/login"
            className="text-emerald-600 ml-2 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;