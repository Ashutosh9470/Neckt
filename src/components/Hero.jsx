import React from 'react';

export function Hero() {
  return (
    <div className="hero-content">
      <div className="hero-pill-badge">
        <span className="beacon-pulse" aria-hidden="true" />
        <span>Private Preview • 2026</span>
      </div>

      <h1 className="hero-headline">
        <span>A New Experience</span>
        <span className="hero-headline-accent">Is Coming Soon.</span>
      </h1>
    </div>
  );
}

export default Hero;
