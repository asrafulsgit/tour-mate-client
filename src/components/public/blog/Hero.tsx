 
const BlogHero = () => {
  return (
    <section className="py-10 sm:py-20 bg-linear-to-b from-primary/10 to-background border-b border-border">
      <div className="max-w-4xl mx-auto px-2 sm:px-4 text-center">
        <h1 className="heading text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-3 sm:mb-6 text-balance">
          Travel Tips & Stories
        </h1>
        <p className="sm:text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
          Discover expert travel advice, authentic stories, and insider tips
          from our community of guides and travelers.
        </p>
      </div>
    </section>
  );
};

export default BlogHero;
