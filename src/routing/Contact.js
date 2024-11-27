import React from "react";

const Contact = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <form className="mt-4 space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
