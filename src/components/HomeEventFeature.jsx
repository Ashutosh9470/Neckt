import React from 'react';
import { ArrowRight, Calendar, MapPin, Ticket } from 'lucide-react';
import { UPCOMING_EVENTS } from '../data/eventsData';

export function HomeEventFeature() {
  const event = UPCOMING_EVENTS.find((item) => item.id === 'literati-26-roots-and-rhythm');

  if (!event) return null;

  return (
    <section className="neckt-home-event neckt-section" aria-labelledby="home-event-title">
      <div className="neckt-container">
        <div className="neckt-home-event__layout">
          <div className="neckt-home-event__media">
            <img src={event.image} alt="LITERATI’26 - Roots & Rhythm" loading="lazy" />
            <span className="neckt-home-event__edition">3-4 OCTOBER 2026</span>
          </div>

          <div className="neckt-home-event__content">
            <div className="neckt-kicker">
              <span className="neckt-kicker-line" />
              <span className="neckt-kicker-text">UP NEXT AT NECKT</span>
            </div>
            <h2 id="home-event-title">{event.title}</h2>
            <p className="neckt-home-event__description">{event.description}</p>

            <div className="neckt-home-event__meta">
              <span><Calendar size={16} />{event.date}</span>
              <span><MapPin size={16} />{event.venue}</span>
            </div>

            <ul className="neckt-home-event__programme" aria-label="Event programme">
              {event.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>

            <div className="neckt-home-event__actions">
              <a
                className="neckt-btn neckt-btn--primary"
                href={event.ticketUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Ticket size={16} />
                <span>GET TICKETS</span>
                <ArrowRight size={14} />
              </a>
              <span className="neckt-home-event__eligibility">Free entry · BIT Mesra, Patna Campus students</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeEventFeature;