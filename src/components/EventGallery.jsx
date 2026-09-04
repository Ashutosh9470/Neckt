import React from 'react';
import { Camera } from 'lucide-react';
import { GALLERY_MOMENTS } from '../data/galleryData';

export function EventGallery() {
  return (
    <section className="neckt-section neckt-gallery-section" id="moments" aria-label="Event Moments Gallery">
      <div className="neckt-container">
        {/* Section Header */}
        <div className="neckt-section-header">
          <div className="neckt-kicker">
            <span className="neckt-kicker-line" />
            <span className="neckt-kicker-text">VISUAL ARCHIVE</span>
          </div>

          <div className="neckt-section-header__row">
            <div className="neckt-section-header__titles">
              <h2 className="neckt-heading-2">MOMENTS</h2>
              <p className="neckt-subheading">
                Frozen frames of pure crowd energy, stage craft, and raw live euphoria.
              </p>
            </div>
            <div className="neckt-gallery-counter">
              <Camera size={14} className="neckt-gold-icon" />
              <span>{GALLERY_MOMENTS.length} ARCHIVAL FRAMES</span>
            </div>
          </div>
        </div>

        {/* Asymmetric Masonry Grid */}
        <div className="neckt-gallery-grid">
          {GALLERY_MOMENTS.map((moment) => (
            <div
              key={moment.id}
              className={`neckt-gallery-item neckt-gallery-item--${moment.span}`}
            >
              <div className="neckt-gallery-item__inner">
                <img src={moment.image} alt={moment.title} className="neckt-gallery-item__img" loading="lazy" />
                <div className="neckt-gallery-item__scrim" />

                <div className="neckt-gallery-item__overlay">
                  <div className="neckt-gallery-item__top">
                    <span className="neckt-gallery-item__event">{moment.event}</span>
                  </div>

                  <div className="neckt-gallery-item__bottom">
                    <h3 className="neckt-gallery-item__title">{moment.title}</h3>
                    <p className="neckt-gallery-item__caption">{moment.caption}</p>
                    <span className="neckt-gallery-item__location">{moment.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventGallery;
