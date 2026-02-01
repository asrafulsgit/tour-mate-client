
const Stats = () => {
  return (
    <section className="pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
          <div>
            <div className="text-xl sm:text-5xl font-bold text-primary mb-1 sm:mb-2">
              5,000+
            </div>
            <p className="text-sm sm:text-base text-muted-foreground">Tours Completed</p>
          </div>
          <div>
            <div className="text-xl sm:text-5xl font-bold text-primary mb-1 sm:mb-2">
              50,000+
            </div>
            <p className="text-sm sm:text-base text-muted-foreground">Happy Travelers</p>
          </div>
          <div>
            <div className="text-xl sm:text-5xl font-bold text-primary mb-1 sm:mb-2">
              2,500+
            </div>
            <p className="text-sm sm:text-base text-muted-foreground">Verified Guides</p>
          </div>
          <div>
            <div className="text-xl sm:text-5xl font-bold text-primary mb-1 sm:mb-2">
              8+
            </div>
            <p className="text-sm sm:text-base text-muted-foreground">Years of Service</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
