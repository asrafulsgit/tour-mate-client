import { Award, Globe, Smile, Users } from "lucide-react";
 
const AboutValue = () => {
  return (
    <section className="py-8 sm:py-16">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="heading text-2xl sm:text-4xl font-bold text-foreground sm:mb-4">
            Our Core Values
          </h2>
          <p className="sm:text-lg text-muted-foreground">
            These principles guide everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <Smile size={32} className="text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Authenticity
            </h3>
            <p className="text-muted-foreground">
              Real experiences with genuine local guides, not corporate tours.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users size={32} className="text-accent-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Community
            </h3>
            <p className="text-muted-foreground">
              Building meaningful connections between travelers and guides
              worldwide.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <Award size={32} className="text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Excellence
            </h3>
            <p className="text-muted-foreground">
              Commitment to quality in every interaction and experience.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
              <Globe size={32} className="text-accent-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Sustainability
            </h3>
            <p className="text-muted-foreground">
              Supporting local communities and responsible travel practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutValue;
