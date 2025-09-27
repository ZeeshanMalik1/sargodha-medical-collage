import React, { useState, useEffect } from "react";
import "./Slidshow.css";

const images = [
  "/images/11072020250714508.png",
  "/images/24072020250714558.png",
  "/images/35072020250714928.jpg",
  "/images/47072020250714139.jpg",
];

function Slidshow() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => { 
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="zs-slideshow">
      <div className="zs-slides">
        {images.map((src, index) => (
          <div
            key={index}
            className={`zs-slide ${index === activeIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${src})` }}
          ></div>
        ))}
      </div>

      <div className="zs-bullets">
        {images.map((_, index) => (
          <div
            key={index}
            className={`zs-bullet ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slidshow;
