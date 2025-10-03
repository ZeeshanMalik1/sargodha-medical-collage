import React, { useState, useEffect } from "react";
import "./Slidshow.css";

const images = [
  "/images/IMG-20250929-WA0011.jpg",
  "/images/IMG-20250929-WA0012.jpg",
  "/images/IMG-20250929-WA0013.jpg",
  "/images/IMG-20250929-WA0014.jpg",
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
