import React from 'react';
import { Flame, Sparkles, Disc, ArrowUpRight } from 'lucide-react';

export function AboutNeckt({ onInquire }) {
  const strengths = [
    {
      num: '01',
      title: 'PARTIES',
      desc: 'Social experiences shaped from concept to execution.',
      icon: Flame,
      detail: ''
    },
    {
      num: '02',
      title: 'CONCERTS & LIVE SHOWS',
      desc: 'Premium live formats built around sound, stage, and performance.',
      icon: Sparkles,
      detail: ''
    },
    {
      num: '03',
      title: 'CORPORATE EVENTS',
      desc: 'Professionally produced gatherings with design-led identity.',
      icon: Disc,
      detail: ''
    },
    {
      num: '04',
      title: 'ARTIST BOOKINGS',
      desc: 'Artist and performance coordination for live experiences.',
      icon: Disc,
      detail: ''
    }
  ];

  return (
    <section className="neckt-section neckt-about-section" id="about" aria-label="About NECKT">
      <div className="neckt-container">
        {/* Editorial Split Layout */}
        <div className="neckt-about-grid">
          {/* Text & Strengths Column */}
          <div className="neckt-about__content">
            <div className="neckt-kicker">
              <span className="neckt-kicker-line" />
              <span className="neckt-kicker-text">ABOUT NECKT</span>
            </div>

            <h2 className="neckt-heading-1 neckt-about__headline">
              WE CREATE MOMENTS
              <span className="neckt-about__headline-gold"> THAT STAY.</span>
            </h2>

            <p className="neckt-about__lead">
              NECKT came into existence in 2026 with the initiative of its team from Patna, with a
              vision to build a live entertainment culture for Bihar.
            </p>

            <p className="neckt-about__description">
              Our mission is to bring premium, professionally produced events to a city that has never
              had a recurring concert brand of its own. We began with the planning of AFTER DARK and are
              building the foundations of a new entertainment ecosystem for Patna's youth.
            </p>

            {/* Three Simple Strength Blocks */}
            <div className="neckt-strengths-stack">
              {strengths.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.num} className="neckt-strength-card">
                    <div className="neckt-strength-card__aside">
                      <span className="neckt-strength-card__num">{item.num}</span>
                      <div className="neckt-strength-card__icon-box">
                        <Icon size={18} className="neckt-gold-icon" />
                      </div>
                    </div>

                    <div className="neckt-strength-card__body">
                      <h3 className="neckt-strength-card__title">{item.title}</h3>
                      <p className="neckt-strength-card__desc">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Inquire Action */}
            <div className="neckt-about__cta-wrap">
              <button
                type="button"
                className="neckt-btn neckt-btn--ghost"
                onClick={onInquire}
              >
                <span>PARTNER WITH NECKT</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

          {/* Large Event Visual Column */}
          <div className="neckt-about__visual">
            <div className="neckt-about__visual-frame">
              <img
                src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=85"
                alt="Atmospheric concert lighting and stage energy at a NECKT live event"
                className="neckt-about__visual-img"
                loading="lazy"
              />
              <div className="neckt-about__visual-gradient" />
              <div className="neckt-about__visual-border-corner neckt-about__visual-border-corner--tl" />
              <div className="neckt-about__visual-border-corner neckt-about__visual-border-corner--br" />

              {/* Floating Architectural Badge */}
              <div className="neckt-about__floating-badge">
                <span className="neckt-badge-year">EST. 2026</span>
                <span className="neckt-badge-caption">CRAFTING LIVE CULTURE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutNeckt;
