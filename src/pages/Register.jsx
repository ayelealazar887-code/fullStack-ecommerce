import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <h2 className="mb-2 text-center text-3xl font-bold text-slate-800">
          Create Account
        </h2>

        <p className="mb-8 text-center text-sm text-slate-500">
          Join us and start shopping for your favorite plants.
        </p>

        <form className="space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-600"
          />

          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-600"
          />

          <input
            type="password"
            placeholder="Password"
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-600"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          Already registered?{" "}
          <Link
            to="/login"
            className="font-semibold text-emerald-600 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;