import React from 'react';

const PAGE_INTROS = {
  events: {
    label: 'THE LIVE CALENDAR',
    title: <>FIND YOUR NEXT<br /><span className="neckt-text-gold">NIGHT OUT.</span></>,
    text: 'From first announcement to final encore, every NECKT event is built to bring people together around a shared live experience.'
  },
  services: {
    label: 'WHAT WE CREATE',
    title: <>FORMATS MADE<br /><span className="neckt-text-gold">TO MOVE.</span></>,
    text: 'We create, curate and deliver considered experiences across sound, light, performance and atmosphere.'
  },
  about: {
    label: 'THE NECKT POINT OF VIEW',
    title: <>LIVE CULTURE,<br /><span className="neckt-text-gold">MADE IN BIHAR.</span></>,
    text: 'NECKT is building the foundations of a new entertainment ecosystem for Patna and its curious, energetic audience.'
  },
  moments: {
    label: 'FROM THE ARCHIVE',
    title: <>EVERY CROWD<br /><span className="neckt-text-gold">LEAVES A TRACE.</span></>,
    text: 'A visual archive of stage craft, crowd energy and the raw live euphoria that defines a NECKT experience.'
  },
  contact: {
    label: 'START A CONVERSATION',
    title: <>BRING THE NEXT<br /><span className="neckt-text-gold">IDEA TO LIFE.</span></>,
    text: 'Whether you are planning a live show, a brand gathering or a new collaboration, let us make something live.'
  }
};

export function PageIntro({ page }) {
  const content = PAGE_INTROS[page];
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="neckt-hero neckt-page-intro-hero" aria-label={`${page} introduction`}>
      {/* Same video background as Hero */}
      <div className="neckt-hero__video-wrap" aria-hidden="true">
        <video
          ref={videoRef}
          className="neckt-hero__video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          src="https://res.cloudinary.com/kpa6g7an/video/upload/v1788555515/bg_video.mp4"
          poster="/hero.png"
        />
        <div className="neckt-hero__overlay-cinematic" />
        <div className="neckt-hero__overlay-vignette" />
        <div className="neckt-hero__overlay-radial" />
      </div>

      {/* Page intro content */}
      <div className="neckt-page-intro__content">
        <div className="neckt-kicker">
          <span className="neckt-kicker-line" />
          <span className="neckt-kicker-text">{content.label}</span>
        </div>
        <h1 className="neckt-hero__headline">{content.title}</h1>
        <p className="neckt-page-intro__text">{content.text}</p>
      </div>
    </section>
  );
}

export default PageIntro;