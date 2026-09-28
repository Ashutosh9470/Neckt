import React from 'react';

export function NotFoundPage() {
  return (
    <section className="neckt-section neckt-not-found" aria-labelledby="not-found-title">
      <div className="neckt-container">
        <div className="neckt-kicker">
          <span className="neckt-kicker-line" />
          <span className="neckt-kicker-text">404</span>
        </div>
        <h1 id="not-found-title" className="neckt-heading-1">PAGE NOT<br /><span className="neckt-text-gold">FOUND.</span></h1>
        <p className="neckt-lead">The page you requested is not part of the NECKT experience.</p>
        <a href="/" className="neckt-btn neckt-btn--primary">RETURN HOME</a>
      </div>
    </section>
  );
}

export default NotFoundPage;
