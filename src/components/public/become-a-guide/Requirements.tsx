import { Check } from "lucide-react"; 
const BecomeAGuideRequirements = () => {
  return (
    <section className="py-8 sm:py-16">
      <div className="max-w-4xl mx-auto px-2 sm:px-4">
        <h2 className="text-2xl font-bold text-foreground mb-6 sm:mb-12 text-center">
          What We're Looking For
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-6">
              Basic Requirements
            </h3>
            <ul className="space-y-4">
              {[
                "At least 18 years old",
                "Valid government ID",
                "Experience guiding tours (professional or personal)",
                "Fluent in English",
                "Reliable and professional communication",
                "Access to a smartphone",
              ].map((req, idx) => (
                <li key={idx} className="text-sm sm:text-base flex items-start sm:gap-3">
                  <Check size={20} className="text-primary sm:mt-1 shrink-0" />
                  <span className="text-foreground">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-6">
              Ideal Qualities
            </h3>
            <ul className="space-y-4">
              {[
                "Deep knowledge of your destination",
                "Exceptional customer service skills",
                "Passion for travel and cultural exchange",
                "Safety-conscious mindset",
                "Responsive and punctual",
                "Continuous learning mentality",
              ].map((qual, idx) => (
                <li key={idx} className="text-sm sm:text-base flex items-start sm:gap-3">
                  <Check size={20} className="text-accent sm:mt-1 shrink-0" />
                  <span className="text-foreground">{qual}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeAGuideRequirements;
