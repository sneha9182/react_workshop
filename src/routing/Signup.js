import React from "react";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-blue-600">Create an Account</h1>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full p-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
