import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import BrandLogo from './BrandLogo';

export function Footer() {
  return (
    <footer className="landing-footer" role="contentinfo">
      <div className="footer-main">
        <BrandLogo />

        <nav className="footer-nav" aria-label="Footer Navigation">
          <a href="/">Home</a>
          <a href="/events">Events</a>
          <a href="/services">Services</a>
          <a href="/about">About</a>
          <a href="/moments">Moments</a>
          <a href="/contact">Contact</a>
        </nav>

        <div className="footer-contact-links">
          <a href="https://www.instagram.com/neckt.india/" target="_blank" rel="noopener noreferrer">
            Instagram @Neckt.India
          </a>
          <a href="mailto:hello@neckt.in">hello@neckt.in</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-copyright">© 2026 NECKT. ALL RIGHTS RESERVED.</span>
        <span className="footer-developer-credit">
          Developed by{' '}
          <a href="https://projectx-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">
            WebTiqo <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
