import React from "react";
import { useState } from "react";
import API from "../api/axios.js";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Login() {
  
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
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
      const { data } = await API.post("/users/login", formData);

      if (data.success) {
        navigate("/dashboard");
      } else {
        alert(data.message);
      }

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <h2 className="mb-2 text-center text-3xl font-bold text-slate-800">
          Welcome Back
        </h2>

        <p className="mb-8 text-center text-sm text-slate-500">
          Sign in to continue shopping for your favorite plants.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-600"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-600"
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