import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Md. Asraful",
    role: "Founder & CEO",
    image: "",
  },
  {
    id: 2,
    name: "Sarah Ahmed",
    role: "Tour Operations Manager",
    image: "",
  },
  {
    id: 3,
    name: "Mahmud Hasan",
    role: "Senior Tour Guide",
    image: "",
  },
  {
    id: 4,
    name: "Nusrat Jahan",
    role: "Customer Success Manager",
    image: "",
  },
];

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
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-card rounded-2xl p-6 text-center shadow-sm transition-all duration-300"
            >
              <div className="relative w-28 h-28 mx-auto mb-4">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover group-hover:scale-105 transition"
                  />
                ) : (
                  <p className="font-bold bg-black/30  h-full w-full rounded-full"></p>
                )}
              </div>

              <h3 className="text-lg font-semibold text-foreground">
                {member.name}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
