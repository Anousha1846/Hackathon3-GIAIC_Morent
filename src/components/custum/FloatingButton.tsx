"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";

const FloatingButton: React.FC = () => {
  const router = useRouter(); // Initialize useRouter
  const [isDragging, setIsDragging] = useState(false); // Track drag state
  const buttonRef = useRef<HTMLButtonElement | null>(null); // Reference for the button
  const [buttonPosition, setButtonPosition] = useState({ x: 50, y: 50 }); // Initial position

  // Handle the start of dragging
  const startDrag = (e: React.MouseEvent) => {
    setIsDragging(true);
  };

  // Handle dragging movement
  const onDrag = (e: React.MouseEvent) => {
    if (!isDragging || !buttonRef.current) return;
    
    // Calculate new position based on mouse movement
    const newX = e.clientX - buttonRef.current.offsetWidth / 2;
    const newY = e.clientY - buttonRef.current.offsetHeight / 2;
    setButtonPosition({ x: newX, y: newY });
  };

  // Stop dragging
  const stopDrag = () => {
    setIsDragging(false);
  };

  return (
    <div
      style={{
        position: "fixed",
        left: `${buttonPosition.x}px`,
        top: `${buttonPosition.y}px`,
        transition: "all 0.2s ease", // Smooth transition for position changes
      }}
    >
      <button
        ref={buttonRef}
        onMouseDown={startDrag}
        onMouseMove={onDrag}
        onMouseUp={stopDrag}
        onClick={() => router.push("/lisence")} // Route to license page on click
        onMouseLeave={stopDrag} // Stop drag if mouse leaves button
        style={{
          padding: "15px 20px",
          backgroundColor: "#3563E9",
          color: "white",
          borderRadius: "50%",
          border: "none",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          cursor: "pointer",
          position: "relative",
          zIndex: 1000,
          transition: "background-color 0.2s",
        }}
        className="floating-button"
      >
        <span style={{ fontSize: "14px" }}>view License</span>
      </button>
    </div>
  );
};

export default FloatingButton;
