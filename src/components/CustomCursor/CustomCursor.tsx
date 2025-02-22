"use client";
import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Check if the screen is small
    const updateScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    updateScreenSize(); // Set the initial state
    window.addEventListener("resize", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  useEffect(() => {
    if (isSmallScreen) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isSmallScreen]);

  if (isSmallScreen) {
    return null; // Do not render the custom cursor on small screens
  }

  return (
    <div
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        width: "30px", // Increased radius
        height: "30px", // Increased radius
        borderRadius: "50%",
        backgroundColor: "rgba(249, 176, 26, 0.7)", // Add opacity for translucency
        pointerEvents: "none",
        transform: "translate(-50%, -50%) scale(1.2)", // Slightly enlarge
        zIndex: 9999,
        transition: "transform 0.1s ease, background-color 0.2s ease",
      }}
    />
  );
};

export default CustomCursor;
