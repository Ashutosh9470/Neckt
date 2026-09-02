import React, { useEffect, useRef } from 'react';

export function BackgroundLighting() {
  const cursorGlowRef = useRef(null);

  useEffect(() => {
    // Only add cursor interaction if pointer is fine (desktop)
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    let targetX = window.innerWidth * 0.6;
    let targetY = window.innerHeight * 0.35;
    let currentX = targetX;
    let currentY = targetY;
    let animFrameId;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animateGlow = () => {
      // Smooth lerp (damping factor 0.04 for buttery slow motion)
      currentX += (targetX - currentX) * 0.04;
      currentY += (targetY - currentY) * 0.04;

      if (cursorGlowRef.current) {
        cursorGlowRef.current.style.transform = `translate(${currentX}px, ${currentY}px)`;
      }

      animFrameId = requestAnimationFrame(animateGlow);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animFrameId = requestAnimationFrame(animateGlow);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <>
      {/* Film grain noise overlay */}
      <div className="grain-overlay" aria-hidden="true">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <filter id="cinematic-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.85 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#cinematic-grain)" />
        </svg>
      </div>

      {/* Atmospheric lighting layers */}
      <div className="ambient-lighting-wrapper" aria-hidden="true">
        {/* Ambient Warm Streaks */}
        <div className="light-streak-1" />
        <div className="light-streak-2" />
        <div className="light-streak-center-glow" />

        {/* Cinematic Organic Curved Light Ribbon SVG */}
        <svg
          className="ambient-streak-svg"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="ribbonGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0" />
              <stop offset="35%" stopColor="#ea580c" stopOpacity="0.38" />
              <stop offset="60%" stopColor="#f59e0b" stopOpacity="0.5" />
              <stop offset="85%" stopColor="#fbbf24" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="ribbonGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fb923c" stopOpacity="0" />
              <stop offset="45%" stopColor="#f59e0b" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#9a3412" stopOpacity="0" />
            </linearGradient>

            <filter id="ribbonBlur1" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="38" />
            </filter>
            <filter id="ribbonBlur2" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="55" />
            </filter>
          </defs>

          {/* Broad soft ribbon glow */}
          <path
            d="M-100 200 C 400 -80, 850 350, 1550 120"
            stroke="url(#ribbonGrad2)"
            strokeWidth="110"
            fill="none"
            filter="url(#ribbonBlur2)"
          />

          {/* Core luminous curving streak */}
          <path
            d="M 200 -50 C 650 150, 950 420, 1600 220"
            stroke="url(#ribbonGrad1)"
            strokeWidth="50"
            fill="none"
            filter="url(#ribbonBlur1)"
          />

          {/* Whispering tertiary filament */}
          <path
            d="M 350 100 C 750 220, 1050 500, 1500 350"
            stroke="#fbbf24"
            strokeWidth="14"
            strokeOpacity="0.22"
            fill="none"
            filter="url(#ribbonBlur1)"
          />
        </svg>

        {/* Dynamic Subtle Pointer Ambient Glow */}
        <div
          ref={cursorGlowRef}
          style={{
            position: 'absolute',
            top: -200,
            left: -200,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.09) 0%, rgba(234, 88, 12, 0.03) 40%, transparent 70%)',
            pointerEvents: 'none',
            filter: 'blur(50px)',
            willChange: 'transform',
            transition: 'opacity 0.5s ease',
          }}
        />
      </div>

      {/* Ghost Watermark Monolith */}
      <div className="ghost-watermark" aria-hidden="true">
        NECKT
      </div>
    </>
  );
}

export default BackgroundLighting;
