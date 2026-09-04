import React from 'react';

export function BrandLogo({ className = '', withTagline = false }) {
  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a
      href="#hero"
      className={`neckt-logo-link ${className}`}
      aria-label="NECKT — Home"
      onClick={handleScrollToTop}
    >
      <div className="neckt-logo-container">
        <div className="neckt-line" aria-hidden="true" />
        <span className="neckt-brand-text">NECKT</span>
        <div className="neckt-line" aria-hidden="true" />
      </div>
      {withTagline && <span className="neckt-brand-subtag">EXPERIENCES</span>}
    </a>
  );
}

export default BrandLogo;
