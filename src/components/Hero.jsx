import React, { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        // Autoplay may be restricted if unmuted; default is muted so this is safe
        console.warn('Hero video autoplay notice:', err);
      });
    }
  }, []);

  const scrollToEvents = (e) => {
    e.preventDefault();
    const el = document.getElementById('events');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = (e) => {
    e.preventDefault();
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="neckt-hero" id="hero" aria-label="Hero Introduction">
      {/* Background Video Layer */}
      <div className="neckt-hero__video-wrap" aria-hidden="true">
        <video
          ref={videoRef}
          className="neckt-hero__video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          src="https://res.cloudinary.com/kpa6g7an/video/upload/v1788528073/bg_video.mp4"
          poster="/hero.png"
        />

        {/* Subtle Dark Cinematic Scrim & Gradient Overlays for Readability */}
        <div className="neckt-hero__overlay-cinematic" />
        <div className="neckt-hero__overlay-vignette" />
        <div className="neckt-hero__overlay-radial" />
      </div>

      {/* Main Content Container - Kept unboxed, open, letting the video shine */}
      <div className="neckt-hero__content">
        {/* Main Headline */}
        <h1 className="neckt-hero__headline">
          <span className="neckt-hero__headline-row">EXPERIENCES</span>
          <span className="neckt-hero__headline-row neckt-hero__headline-accent">
            THAT MOVE PEOPLE<span className="neckt-gold-dot">.</span>
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className="neckt-hero__subheadline">
          We create, curate and deliver experiences that bring people together.
        </p>

        {/* Action CTAs */}
        <div className="neckt-hero__cta-group">
          <a
            href="#events"
            onClick={scrollToEvents}
            className="neckt-btn neckt-btn--primary"
            id="hero-explore-cta"
          >
            <span>EXPLORE EVENTS</span>
            <ArrowRight size={16} className="neckt-btn__arrow" />
          </a>

          <a
            href="#about"
            onClick={scrollToAbout}
            className="neckt-btn neckt-btn--ghost"
            id="hero-discover-cta"
          >
            <span>DISCOVER NECKT</span>
          </a>
        </div>
      </div>

    </section>
  );
}

export default Hero;
