import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProgressBar from './components/ProgressBar';
import Footer from './components/Footer';
import BackgroundLighting from './components/BackgroundLighting';

export function App() {
  return (
    <>
      {/* Abstract Cinematic Lighting & Atmospheric Background */}
      <BackgroundLighting />

      {/* Main Structural Layout */}
      <div className="landing-shell">
        <Header />

        <main className="landing-main" id="main-content">
          <Hero />
          <ProgressBar />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
