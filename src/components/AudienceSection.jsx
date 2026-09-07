import React from 'react';
import { Users } from 'lucide-react';

export function AudienceSection() {
  return (
    <section className="neckt-audience neckt-section" id="audience" aria-label="NECKT audience">
      <div className="neckt-container neckt-audience__grid">
        <div>
          <div className="neckt-kicker"><span className="neckt-kicker-line" /><span className="neckt-kicker-text">THE AUDIENCE</span></div>
          <h2 className="neckt-heading-1">BUILT FOR THE<br /><span className="neckt-text-gold">CURIOUS CROWD.</span></h2>
        </div>
        <div className="neckt-audience__content">
          <p className="neckt-lead">A curated audience shaping the next chapter of live entertainment in Bihar.</p>
          <div className="neckt-audience__list">
            {['Young professionals aged 21–45', 'Entrepreneurs & founders', 'Corporate leaders', 'Creators & influencers', 'Students', 'Lifestyle & music enthusiasts'].map((item) => <span key={item}><Users size={15} />{item}</span>)}
          </div>
          <div className="neckt-audience__footfall"><strong>5,000–10,000+</strong><span>Expected footfall</span></div>
        </div>
      </div>
    </section>
  );
}

export default AudienceSection;