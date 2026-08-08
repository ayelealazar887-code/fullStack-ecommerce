import React, { useState } from "react";
import API from "../api/axios.js";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    // Clear error when user starts typing again
    if (error) {
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous error
    setError("");

    try {
      const { data } = await API.post("/users/login", formData);

      if (data.success) {
        navigate("/dashboard");
      } else {
        setError(data.message || "Invalid email or password.");
      }
    } catch (error) {
      console.log(error);

      if (error.response?.status === 401) {
        setError("Invalid email or password.");
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
        <h1 className="text-3xl font-bold text-center text-slate-800">
          Welcome Back
        </h1>

        <p className="mb-8 mt-2 text-center text-sm text-slate-500">
          Sign in to continue shopping for your favorite plants.
        </p>

        {/* Error Message */}
        {error && (
          <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700"
          >
            Login
          </button>
        </form>

        <div className="mt-4 flex justify-end">
          <Link
            to="/forgot-password"
            className="text-sm text-emerald-600 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <p className="mt-6 text-center text-sm text-slate-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-emerald-600 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;