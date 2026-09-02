import React from 'react';

export function BrandLogo({ className = '' }) {
  return (
    <a
      href="#"
      className={`neckt-logo-link ${className}`}
      aria-label="NECKT Home"
      onClick={(e) => e.preventDefault()}
    >
      <div className="neckt-logo-container">
        <div className="neckt-line" aria-hidden="true" />
        <span className="neckt-brand-text">NECKT</span>
        <div className="neckt-line" aria-hidden="true" />
      </div>
    </a>
  );
}

export default BrandLogo;
