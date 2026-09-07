import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactSection() {
  return (
    <section className="neckt-contact neckt-section" id="contact" aria-label="Contact NECKT">
      <div className="neckt-container neckt-contact__grid">
        <div>
          <div className="neckt-kicker"><span className="neckt-kicker-line" /><span className="neckt-kicker-text">CONTACT</span></div>
          <h2 className="neckt-heading-2">LET'S MAKE<br /><span className="neckt-text-gold">SOMETHING LIVE.</span></h2>
        </div>
        <div className="neckt-contact__details">
          <a href="mailto:hello@neckt.in"><Mail size={17} />hello@neckt.in</a>
          <a href="tel:+919546646668"><Phone size={17} />+91-9546646668</a>
          <a href="tel:+919905307514"><Phone size={17} />+91-9905307514</a>
          <span><MapPin size={17} />Startup Bihar Incubation Center Near ATC<br />Patna 800014, Bihar, India</span>
          <a className="neckt-contact__social" href="https://www.instagram.com/neckt.india/" target="_blank" rel="noopener noreferrer">Instagram&nbsp; @Neckt.India</a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;