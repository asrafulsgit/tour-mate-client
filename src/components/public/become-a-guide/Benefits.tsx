import { Award, Calendar, Check, TrendingUp, Users } from "lucide-react";

const BecomeAGuideBenefits = () => {
  return (
    <section className="py-8 sm:py-16  bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="text-center mb-6 sm:mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-2 sm:mb-4">
            Why Become a Guide?
          </h2>
          <p className="sm:text-lg text-muted-foreground">
            Flexible work, unlimited earning potential, and a supportive
            community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          <div className="border border-border rounded-lg p-4 sm:p-6">
            <div className="w-10 sm:w-12 h-10 sm:h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
              <TrendingUp size={24} className="text-primary-foreground" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
              Earn Money
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Set your own rates and earn sustainable income. Guides average
              $500-$2000/month.
            </p>
          </div>

          <div className="border border-border rounded-lg p-4 sm:p-6">
            <div className="w-10 sm:w-12 h-10 sm:h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
              <Calendar size={24} className="text-accent-foreground" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
              Flexible Schedule
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Choose your own hours and tours. Work around your other
              commitments.
            </p>
          </div>

          <div className="text-lg sm:text-xl border border-border rounded-lg p-4 sm:p-6">
            <div className="w-10 sm:w-12 h-10 sm:h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
              <Users size={24} className="text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Meet People
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Connect with travelers from around the world and build meaningful
              relationships.
            </p>
          </div>

          <div className="border border-border rounded-lg p-4 sm:p-6">
            <div className="w-10 sm:w-12 h-10 sm:h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
              <Award size={24} className="text-accent-foreground" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
              Build Your Brand
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Grow your reputation and create a loyal base of returning
              travelers.
            </p>
          </div>

          <div className="border border-border rounded-lg p-4 sm:p-6">
            <div className="w-10 sm:w-12 h-10 sm:h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
              <Check size={24} className="text-primary-foreground" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
              Support Included
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Access resources, training, and 24/7 support from our dedicated
              team.
            </p>
          </div>

          <div className="border border-border rounded-lg p-4 sm:p-6">
            <div className="w-10 sm:w-12 h-10 sm:h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
              <TrendingUp size={24} className="text-accent-foreground" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
              Growth Potential
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Scale your tours, hire assistant guides, and grow your business on
              TourMate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeAGuideBenefits;
