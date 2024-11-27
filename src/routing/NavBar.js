import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeClass = "text-blue-500 font-bold";

  return (
    <nav className="p-4 bg-gray-200 shadow-md">
      <div className="flex space-x-4">
        <NavLink to="/" end className={({ isActive }) => (isActive ? activeClass : "")}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? activeClass : "")}>
          About
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? activeClass : "")}>
          Contact
        </NavLink>
        <NavLink to="/profile/1" className={({ isActive }) => (isActive ? activeClass : "")}>
          Profile
        </NavLink>
        <NavLink to="/admin" className={({ isActive }) => (isActive ? activeClass : "")}>
          Admin
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
