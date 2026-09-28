import React from 'react';
import { Calendar, MapPin, ArrowRight, Ticket } from 'lucide-react';
import { UPCOMING_EVENTS } from '../data/eventsData';

export function UpcomingEvents({ onSelectTicket }) {
  return (
    <section className="neckt-section neckt-events-section" id="events" aria-label="Upcoming Events">
      <div className="neckt-container">
        {/* Section Header */}
        <div className="neckt-section-header">
          <div className="neckt-kicker">
            <span className="neckt-kicker-line" />
            <span className="neckt-kicker-text">LIVE SCHEDULE</span>
          </div>

          <div className="neckt-section-header__row">
            <div className="neckt-section-header__titles">
              <h2 className="neckt-heading-2">UPCOMING EVENTS</h2>
              <p className="neckt-subheading">Discover what’s next.</p>
            </div>

          </div>
        </div>

        {/* Events Grid */}
        <div className="neckt-events-grid">
          {UPCOMING_EVENTS.map((event, idx) => (
            <article
              key={event.id}
              className="neckt-event-card"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Media Container with Image Zoom on Hover */}
              <div className="neckt-event-card__media">
                <img
                  src={event.image}
                  alt={`${event.title} ${event.category} event`}
                  className="neckt-event-card__img"
                  loading="lazy"
                  decoding="async"
                />
                <div className="neckt-event-card__media-scrim" />

                {/* Status Badge */}
                <div className="neckt-event-card__tag">
                  <span className="neckt-badge-glow" />
                  <span>{event.tag}</span>
                </div>

                {/* Price / Availability Badge */}
                {event.ticketPrice && (
                  <div className="neckt-event-card__price-badge">
                    <span>{event.ticketPrice}</span>
                  </div>
                )}
              </div>

              {/* Event Content Details */}
              <div className="neckt-event-card__body">
                {/* Meta Row: Date, Time & Venue */}
                <div className="neckt-event-card__meta">
                  <div className="neckt-event-card__meta-item">
                    <Calendar size={14} className="neckt-gold-icon" />
                    <span>{event.date}</span>
                  </div>
                  {event.time && <><span className="neckt-meta-dot">•</span><span>{event.time}</span></>}
                </div>

                {/* Location */}
                <div className="neckt-event-card__venue">
                  <MapPin size={14} className="neckt-gold-icon" />
                  <span>{event.venue}</span>
                </div>

                {/* Title */}
                <h3 className="neckt-event-card__title">
                  {event.title}
                </h3>

                {/* Short Description */}
                <p className="neckt-event-card__desc">
                  {event.description}
                </p>

                {/* Highlights Tags */}
                {event.highlights && (
                  <div className="neckt-event-card__highlights">
                    {event.highlights.map((hl, i) => (
                      <span key={i} className="neckt-highlight-chip">
                        {hl}
                      </span>
                    ))}
                  </div>
                )}

                {(event.faqs || event.terms) && (
                  <div className="neckt-event-card__disclosures">
                    {event.faqs && (
                      <details className="neckt-event-disclosure">
                        <summary>Frequently Asked Questions</summary>
                        <div className="neckt-event-disclosure__content">
                          {event.faqs.map((faq) => (
                            <details className="neckt-event-faq" key={faq.question}>
                              <summary>{faq.question}</summary>
                              <p>{faq.answer}</p>
                            </details>
                          ))}
                        </div>
                      </details>
                    )}
                    {event.terms && (
                      <details className="neckt-event-disclosure">
                        <summary>Terms &amp; Conditions</summary>
                        <div className="neckt-event-disclosure__content">
                          {event.terms.map((section) => (
                            <section className="neckt-event-terms" key={section.title}>
                              <h4>{section.title}</h4>
                              <ul>
                                {section.items.map((term) => <li key={term}>{term}</li>)}
                              </ul>
                            </section>
                          ))}
                          <a
                            className="neckt-event-terms__link"
                            href="https://sortmyscene.com/terms-and-conditions"
                            target="_blank"
                            rel="noreferrer"
                          >
                            SortMyScene Terms &amp; Conditions
                          </a>
                        </div>
                      </details>
                    )}
                  </div>
                )}

                {/* Action Row */}
                <div className="neckt-event-card__action">
                  {event.ticketUrl ? (
                    <a
                      className="neckt-btn neckt-btn--ticket"
                      href={event.ticketUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Get tickets for ${event.title}`}
                    >
                      <Ticket size={16} />
                      <span>GET TICKETS</span>
                      <ArrowRight size={14} className="neckt-btn__arrow" />
                    </a>
                  ) : (
                    <button
                      type="button"
                      className="neckt-btn neckt-btn--ticket"
                      onClick={() => onSelectTicket(event)}
                      aria-label={`Buy tickets for ${event.title}`}
                    >
                      <Ticket size={16} />
                      <span>BUY TICKETS</span>
                      <ArrowRight size={14} className="neckt-btn__arrow" />
                    </button>
                  )}
                  <span className="neckt-ticket-status">{event.ticketStatus}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Events Action Footer */}
        <div className="neckt-events__footer">
          <a
            href="/events"
            className="neckt-view-all-link"
          >
            <span>VIEW ALL EVENTS</span>
            <ArrowRight size={16} className="neckt-view-all-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default UpcomingEvents;
