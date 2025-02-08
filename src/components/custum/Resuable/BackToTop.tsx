"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react"; 

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Track scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-1 rounded-full shadow-xl hover:bg-blue-800 transition-transform transform md:hover:scale-125 hover:scale-110"
          aria-label="Back to Top"
        >
          <ArrowUp/>
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
