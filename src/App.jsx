import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import UpcomingEvents from './components/UpcomingEvents';
import AboutNeckt from './components/AboutNeckt';
import FeaturedExperiences from './components/FeaturedExperiences';
import EventGallery from './components/EventGallery';
import Footer from './components/Footer';
import BackgroundLighting from './components/BackgroundLighting';
import AudienceSection from './components/AudienceSection';
import ContactSection from './components/ContactSection';
import PageIntro from './components/PageIntro';
import HomeSummary from './components/HomeSummary';

const routes = {
  '/': 'home',
  '/events': 'events',
  '/services': 'services',
  '/about': 'about',
  '/moments': 'moments',
  '/contact': 'contact',
};

function useCurrentRoute() {
  const [path, setPath] = React.useState(window.location.pathname);

  React.useEffect(() => {
    const handleLocationChange = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  return routes[path] || 'home';
}

function navigate(path) {
  if (window.location.pathname === path) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo(0, 0);
}

function PageFrame({ children, onOpenContact, onExploreEvents }) {
  return (
    <>
      <BackgroundLighting />
      <div className="landing-shell">
        <Header onOpenContact={onOpenContact} onExploreEvents={onExploreEvents} />
        <main className="landing-main" id="main-content">{children}</main>
        <Footer />
      </div>
    </>
  );
}

function RoutedPage({ route, onContact, onTickets }) {
  if (route === 'events') return <><PageIntro page="events" /><UpcomingEvents onSelectTicket={onTickets} /></>;
  if (route === 'services') return <><PageIntro page="services" /><FeaturedExperiences onInquire={onContact} /></>;
  if (route === 'about') return <><PageIntro page="about" /><AboutNeckt onInquire={onContact} /><AudienceSection /></>;
  if (route === 'moments') return <><PageIntro page="moments" /><EventGallery /></>;
  if (route === 'contact') return <><PageIntro page="contact" /><ContactSection /></>;
  return null;
}

export function App() {
  const route = useCurrentRoute();
  const handleContact = () => {
    navigate('/contact');
  };

  const handleTickets = () => {
    window.alert('Ticket details for AFTER DARK will be announced soon.');
  };

  if (route !== 'home') {
    return (
      <PageFrame onOpenContact={handleContact} onExploreEvents={() => navigate('/events')}>
        <RoutedPage route={route} onContact={handleContact} onTickets={handleTickets} />
      </PageFrame>
    );
  }

  return (
    <PageFrame onOpenContact={handleContact} onExploreEvents={() => navigate('/events')}>
      <Hero />
      <HomeSummary />
    </PageFrame>
  );
}

export default App;
