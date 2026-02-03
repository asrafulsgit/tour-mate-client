 
const AboutHero = () => {
  return (
    <section className="py-10 sm:py-20 bg-linear-to-b from-primary/10 to-background border-b border-border">
      <div className="max-w-4xl mx-auto px-2 sm:px-4 text-center">
        <h1 className="heading text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-3 sm:mb-6 text-balance">
          About TourMate
        </h1>
        <p className="sm:text-lg text-muted-foreground  mx-auto text-balance">
          We believe travel should be authentic, accessible, and transformative.
          Our mission is to connect adventurous travelers with passionate local
          guides.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
