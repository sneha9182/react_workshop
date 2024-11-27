import React, { useState, useEffect } from "react";
import throttle from "./throttle"; // Import the throttle utility function

const ScrollComponent = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Scroll event handler
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
    console.log("Scroll Position:", window.scrollY);
  };

  // Apply throttling to the scroll handler
  const throttledScrollHandler = throttle(handleScroll, 200);

  useEffect(() => {
    window.addEventListener("scroll", throttledScrollHandler);
    return () => {
      window.removeEventListener("scroll", throttledScrollHandler);
    };
  }, [throttledScrollHandler]);

  return (
    <div style={{ height: "200vh", padding: "1rem" }}>
      <h1>Scroll to See Throttling in Action</h1>
      <p>Scroll Position: {scrollPosition}px</p>
    </div>
  );
};

export default ScrollComponent;
