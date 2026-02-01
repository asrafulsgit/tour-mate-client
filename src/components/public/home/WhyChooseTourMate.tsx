import SectionHeader from "@/components/shared/SectionHeader";

const features = [
  {
    title: "Expert Local Guides",
    description:
      "Our guides are carefully vetted locals who know their destinations inside and out.",
    bg: "bg-primary",
    text: "text-primary-foreground",
  },
  {
    title: "Best Price Guarantee",
    description:
      "Competitive pricing with transparent fees. No hidden charges, ever.",
    bg: "bg-accent",
    text: "text-accent-foreground",
  },
  {
    title: "24/7 Support",
    description:
      "Our support team is always ready to help with any questions or concerns.",
    bg: "bg-primary",
    text: "text-primary-foreground",
  },
  {
    title: "Safe & Secure",
    description:
      "All tours include insurance and safety certifications for your peace of mind.",
    bg: "bg-accent",
    text: "text-accent-foreground",
  },
  {
    title: "Flexible Booking",
    description:
      "Easy cancellations and rescheduling options to fit your schedule.",
    bg: "bg-primary",
    text: "text-primary-foreground",
  },
  {
    title: "Community Driven",
    description:
      "Join a global community of adventurers and experience sharing.",
    bg: "bg-accent",
    text: "text-accent-foreground",
  },
];

const WhyChooseTourMate = () => {
  return (
    <section className="py-10 sm:py-15 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Why Choose TourMate?"
          subTitle="We connect you with experienced local guides for authentic,
            memorable experiences"
        />
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div
                className={`w-12 h-12 ${feature.bg} rounded-lg flex items-center justify-center mx-auto mb-4`}
              >
                <span className={`${feature.text} text-xl font-bold`}>✓</span>
              </div>
              <h3 className="heading text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseTourMate;
