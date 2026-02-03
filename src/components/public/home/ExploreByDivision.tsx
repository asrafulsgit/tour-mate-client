import SectionHeader from "@/components/shared/SectionHeader";
import Link from "next/link";

const ExploreByDivision = () => {
  return (
    <section className="py-10 sm:py-15 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <SectionHeader title="Explore by Division" subTitle="Discover amazing experiences across Bangladesh"/>
        <div className="mt-8 sm:mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {[
            { name: "Dhaka", tours: "45 tours", image: "🏙️" },
            { name: "Chattogram", tours: "38 tours", image: "⛰️" },
            { name: "Sylhet", tours: "32 tours", image: "🌿" },
            { name: "Cox's Bazar", tours: "28 tours", image: "🏖️" },
          ].map((division) => (
            <Link
              key={division.name}
              href={`/tour?division=${division.name}`}
              className="group relative overflow-hidden rounded-lg border border-border 
              bg-background p-2 sm:p-6 hover:border-primary transition cursor-pointer  flex 
              flex-col justify-end"
            >
              <div className="text-3xl sm:text-5xl mb-4 group-hover:scale-110 transition">
                {division.image}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                {division.name}
              </h3>
              <p className="text-muted-foreground">{division.tours}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreByDivision;
