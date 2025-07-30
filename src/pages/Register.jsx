import React from "react";

function Register() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-600 p-4">
      {}
      <div className="pointer-events-none absolute -top-10 -left-10 w-72 h-72 rounded-full bg-fuchsia-400/30 blur-3xl"></div>
      <div className="pointer-events-none absolute top-32 -right-16 w-96 h-96 rounded-full bg-indigo-300/30 blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-0 left-1/3 -translate-x-1/2 w-80 h-80 rounded-full bg-violet-400/30 blur-3xl"></div>

      {}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.28),transparent_55%)]"></div>

      {}
      <div className="relative z-10 w-full max-w-md rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create an Account
        </h2>

        <form className="space-y-5">
          <div>
            <label className="block mb-1 text-gray-600 font-medium">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-black caret-black bg-white/90"
            />
          </div>

          <div>
            <label className="block mb-1 text-black font-medium">
              Number
            </label>
            <input
              type="tel"
              placeholder="Your number"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-black caret-black bg-white/90"
            />
          </div>

          <div>
            <label className="block mb-1 text-black font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-black caret-black bg-white/90"
            />
          </div>

          <div>
            <label className="block mb-1 text-black font-medium">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-black caret-black bg-white/90"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-xl font-semibold hover:bg-purple-700 transition"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-black">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-purple-600 font-medium hover:underline"
          >
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}

export default Register;
