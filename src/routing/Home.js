import React from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();

    const handleSignupClick = () => {
      navigate("/signup");
    };
 

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="p-6 text-center bg-blue-600 text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-xl mb-6">
          Discover amazing features and services tailored just for you.
        </p>
        <button className="px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-200">
          Get Started
        </button>
      </div>

      {/* Features Section */}
      <div className="p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 border rounded-lg shadow-sm hover:shadow-md bg-white">
            <h3 className="text-xl font-bold text-blue-600 mb-2">Feature One</h3>
            <p className="text-gray-600">
              Discover cutting-edge tools to boost your productivity and streamline your work.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm hover:shadow-md bg-white">
            <h3 className="text-xl font-bold text-blue-600 mb-2">Feature Two</h3>
            <p className="text-gray-600">
              Enjoy seamless integration with all your favorite platforms and services.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm hover:shadow-md bg-white">
            <h3 className="text-xl font-bold text-blue-600 mb-2">Feature Three</h3>
            <p className="text-gray-600">
              Get insights and analytics to help you make data-driven decisions.
            </p>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="p-6 text-center bg-blue-100 mt-8">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Ready to Get Started?</h2>
        <p className="text-gray-700 mb-6">
          Join thousands of users who trust us to deliver exceptional service every day.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700" onClick={handleSignupClick}>
          Sign Up Now
        </button>
      </div>
    </div>
  );
};

export default Home;
