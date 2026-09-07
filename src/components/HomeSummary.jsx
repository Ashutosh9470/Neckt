import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const focusPoints = [
  ['01', 'LIVE EVENTS', 'Concerts, parties and shows made for real crowd energy.'],
  ['02', 'CURATED FORMATS', 'Distinctive sound, light and performance experiences.'],
  ['03', 'LOCAL CULTURE', 'A new live entertainment ecosystem taking shape in Bihar.']
];

export function HomeSummary() {
  return (
    <section className="neckt-section neckt-home-summary" aria-label="About NECKT">
      <div className="neckt-container">
        <div className="neckt-home-summary__intro">
          <div>
            <div className="neckt-kicker">
              <span className="neckt-kicker-line" />
              <span className="neckt-kicker-text">A LITTLE MORE ABOUT US</span>
            </div>
            <h2 className="neckt-heading-2">BUILT FOR THE<br /><span className="neckt-text-gold">CURIOUS CROWD.</span></h2>
          </div>
          <div className="neckt-home-summary__copy">
            <p className="neckt-lead">NECKT creates moments that stay long after the lights go down.</p>
            <p>We are a Patna-born live entertainment brand creating, curating and delivering experiences that bring people together. From the first idea to the final encore, every detail is shaped around the feeling of being there.</p>
            <a href="/about" className="neckt-view-all-link">
              <span>DISCOVER NECKT</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="neckt-home-summary__points">
          {focusPoints.map(([number, title, text]) => (
            <div className="neckt-home-summary__point" key={number}>
              <span className="neckt-home-summary__number">{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeSummary;