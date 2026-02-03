import React from "react";

const AboutTeam = () => {
  return (
    <section className="py-8 sm:py-16 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="text-center mb-12">
          <h2 className="heading text-2xl sm:text-4xl font-bold text-foreground sm:mb-4">
            Our Team
          </h2>
          <p className="sm:text-lg text-muted-foreground">
            Passionate people dedicated to creating amazing travel experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {["👨‍💼", "👩‍💼", "👨‍💼", "👩‍💼"].map((avatar, idx) => (
            <div key={idx} className="text-center">
              <div className="text-6xl mb-4 text-center">{avatar}</div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                Team Member
              </h3>
              <p className="text-muted-foreground">Founder & CEO</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
