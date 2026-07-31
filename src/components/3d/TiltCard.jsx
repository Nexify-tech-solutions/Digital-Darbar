import React, { useState, useRef } from 'react';

export default function TiltCard({ children, className = '', maxTilt = 15, glare = true }) {
  const [style, setStyle] = useState({});
  const [glareStyle, setGlareStyle] = useState({ opacity: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width;
    const yPct = mouseY / height;

    const rotateX = (0.5 - yPct) * maxTilt;
    const rotateY = (xPct - 0.5) * maxTilt;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'transform 0.1s cubic-bezier(0.03, 0.98, 0.52, 0.99)',
    });

    if (glare) {
      setGlareStyle({
        opacity: 0.25,
        background: `radial-gradient(circle at ${xPct * 100}% ${yPct * 100}%, rgba(255,255,255,0.8) 0%, rgba(212,175,55,0.2) 40%, transparent 80%)`,
      });
    }
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.6s cubic-bezier(0.03, 0.98, 0.52, 0.99)',
    });
    setGlareStyle({ opacity: 0, transition: 'opacity 0.6s ease' });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden transition-all duration-300 transform-gpu ${className}`}
      style={style}
    >
      {children}
      {glare && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 z-10"
          style={glareStyle}
        />
      )}
    </div>
  );
}
