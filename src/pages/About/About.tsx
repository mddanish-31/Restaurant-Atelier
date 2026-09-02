import { AboutHero } from './AboutHero';
import { Philosophy } from './Philosophy';
import { TheWayWeCook } from './TheWayWeCook';
import { TheExperience } from './TheExperience';
import { StoryMoment } from './StoryMoment';
import { Principles } from './Principles';
import { EventsSection } from '../Menu/EventsSection';
import { AboutCta } from './AboutCta';

export default function About() {
  return (
    <main>
      <AboutHero />
      <Philosophy />
      <TheWayWeCook />
      <TheExperience />
      <StoryMoment />
      <Principles />
      <EventsSection />
      <AboutCta />
    </main>
  );
}