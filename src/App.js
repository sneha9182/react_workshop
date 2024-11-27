import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./routing/NavBar";
import Home from "./routing/Home";
import About from "./routing/About";
import Contact from "./routing/Contact";
import Profile from "./routing/Profile";
import Signup from "./routing/Signup";

function App() {

  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
