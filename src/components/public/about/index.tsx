"use client";
import AboutHero from "./Hero";
import AboutMission from "./Mission";
import AboutValue from "./Value";
import AboutTeam from "./Team";
import AboutCTA from "./CTA";

export default function AboutPage() {
  return (
    <main className="grow">
      {/* Hero Section */}
      <AboutHero />

      {/* Mission Section */}
      <AboutMission />

      {/* Values Section */}
      <AboutValue />

      {/* Team Section */}
      <AboutTeam />

      {/* CTA Section */}
      <AboutCTA />
    </main>
  );
}
