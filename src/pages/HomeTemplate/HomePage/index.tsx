import Hero from './Hero';
import Features from './Features';
import Pricing from './Pricing';
import TrustBadges from './TrustBadges';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <section id="home">
        <Hero />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="about">
        <TrustBadges />
      </section>
    </div>
  );
}
