"use client";
import React, { useEffect, useRef } from "react";

const CursorShape = () => {
  const canvasRef = useRef(null);
  const position = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    const animate = () => {
      // Smoothly follow the cursor
      position.current.x += (target.current.x - position.current.x) * 0.1;
      position.current.y += (target.current.y - position.current.y) * 0.1;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the shape
      ctx.beginPath();
      ctx.moveTo(position.current.x, position.current.y);
      ctx.arc(position.current.x, position.current.y, 40, 0, Math.PI * 2); // Adjust size and shape
      ctx.fillStyle = "rgba(249, 216, 68, 0.8)"; // Yellow color
      ctx.shadowColor = "rgba(249, 216, 68, 0.6)";
      ctx.shadowBlur = 20;
      ctx.fill();
      ctx.closePath();

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 pointer-events-none z-50"
    />
  );
};

export default CursorShape;
