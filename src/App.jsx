import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import UpcomingEvents from './components/UpcomingEvents';
import AboutNeckt from './components/AboutNeckt';
import FeaturedExperiences from './components/FeaturedExperiences';
import EventGallery from './components/EventGallery';
import Footer from './components/Footer';
import BackgroundLighting from './components/BackgroundLighting';
import { ArrowRight, Users, Mail, Phone, MapPin } from 'lucide-react';

export function App() {
  const handleContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleTickets = () => {
    window.alert('Ticket details for AFTER DARK will be announced soon.');
  };

  return (
    <>
      {/* Abstract Cinematic Lighting & Atmospheric Background */}
      <BackgroundLighting />

      {/* Main Structural Layout */}
      <div className="landing-shell">
        <Header onOpenContact={handleContact} />

        <main className="landing-main" id="main-content">
          <Hero />
          <UpcomingEvents onSelectTicket={handleTickets} />
          <AboutNeckt onInquire={handleContact} />
          <FeaturedExperiences onInquire={handleContact} />
          <section className="neckt-audience neckt-section" aria-label="NECKT audience">
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
          <EventGallery />
          <section className="neckt-final-cta" aria-label="Explore NECKT events">
            <div className="neckt-container">
              <div className="neckt-kicker"><span className="neckt-kicker-line" /><span className="neckt-kicker-text">THE NEXT EXPERIENCE</span></div>
              <h2>READY FOR THE<br /><span className="neckt-text-gold">NEXT EXPERIENCE?</span></h2>
              <p>Discover what's next with NECKT.</p>
              <a href="#events" className="neckt-btn neckt-btn--primary"><span>EXPLORE EVENTS</span><ArrowRight size={16} /></a>
            </div>
          </section>
          <section className="neckt-contact neckt-section" id="contact" aria-label="Contact NECKT">
            <div className="neckt-container neckt-contact__grid">
              <div><div className="neckt-kicker"><span className="neckt-kicker-line" /><span className="neckt-kicker-text">CONTACT</span></div><h2 className="neckt-heading-2">LET'S MAKE<br /><span className="neckt-text-gold">SOMETHING LIVE.</span></h2></div>
              <div className="neckt-contact__details">
                <a href="mailto:hello@neckt.in"><Mail size={17} />hello@neckt.in</a>
                <a href="tel:+919546646668"><Phone size={17} />+91-9546646668</a>
                <a href="tel:+919905307514"><Phone size={17} />+91-9905307514</a>
                <span><MapPin size={17} />Startup Bihar Incubation Center Near ATC<br />Patna 800014, Bihar, India</span>
                <a className="neckt-contact__social" href="https://www.instagram.com/neckt.india/" target="_blank" rel="noopener noreferrer">Instagram&nbsp; @Neckt.India</a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
