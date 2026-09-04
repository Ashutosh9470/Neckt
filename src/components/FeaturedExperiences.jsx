import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FEATURED_EXPERIENCES } from '../data/experiencesData';

export function FeaturedExperiences({ onInquire }) {
  return (
    <section
      className="neckt-section neckt-experiences-section"
      id="experiences"
      aria-label="Featured Experiences and Formats"
    >
      <div className="neckt-container">
        {/* Section Header */}
        <div className="neckt-section-header">
          <div className="neckt-kicker">
            <span className="neckt-kicker-line" />
            <span className="neckt-kicker-text">PORTFOLIO OF FORMATS</span>
          </div>

          <div className="neckt-section-header__row">
            <div className="neckt-section-header__titles">
              <h2 className="neckt-heading-2">FEATURED EXPERIENCES</h2>
              <p className="neckt-subheading">
                Signature formats pushing the boundaries of sound, light, and performance.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Large Visual Cards - Asymmetric, Editorial, Not generic product boxes */}
        <div className="neckt-experiences-grid">
          {FEATURED_EXPERIENCES.map((exp, index) => (
            <div
              key={exp.id}
              className={`neckt-exp-card neckt-exp-card--${index % 2 === 0 ? 'tall' : 'wide'}`}
            >
              {/* Background Image Layer */}
              <div className="neckt-exp-card__image-wrap">
                <img
                  src={exp.image}
                  alt={exp.name}
                  className="neckt-exp-card__img"
                  loading="lazy"
                />
                <div className="neckt-exp-card__overlay" />
                <div className="neckt-exp-card__ambient-glow" />
              </div>

              {/* Card Meta & Header */}
              <div className="neckt-exp-card__top">
                <span className="neckt-exp-card__category">{exp.category}</span>
                <span className="neckt-exp-card__stats">{exp.stats}</span>
              </div>

              {/* Card Content & Text */}
              <div className="neckt-exp-card__bottom">
                <div className="neckt-exp-card__titles">
                  <span className="neckt-exp-card__subtitle">{exp.subtitle}</span>
                  <h3 className="neckt-exp-card__name">{exp.name}</h3>
                </div>

                <p className="neckt-exp-card__desc">{exp.description}</p>

                <div className="neckt-exp-card__footer">
                  <button
                    type="button"
                    className="neckt-exp-card__action-btn"
                    onClick={onInquire}
                    aria-label={`Inquire about ${exp.name}`}
                  >
                    <span>Curate Experience</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedExperiences;
