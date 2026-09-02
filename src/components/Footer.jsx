import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="landing-footer" role="contentinfo">
      <div className="footer-status-pill">
        <span className="footer-system-dot" aria-hidden="true" />
        <span>SYSTEM READINESS • PRODUCTION CANDIDATE</span>
      </div>

      <div className="footer-meta-actions">
        <span className="footer-developer-credit">
          Developed by{' '}
          <a
            href="https://projectx-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="developer-link"
            aria-label="WebTiqo Services portfolio (opens in new tab)"
          >
            <span>WebTiqo Services</span>
            <ArrowUpRight size={11} aria-hidden="true" className="dev-link-icon" />
          </a>
        </span>

        <span className="footer-divider" aria-hidden="true">•</span>

        <span className="footer-copyright">
          © {new Date().getFullYear()} NECKT. ALL RIGHTS RESERVED.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
