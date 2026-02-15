import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    rating: 5,
    review:
      "Best travel experience ever! Our guide was knowledgeable, friendly, and made us feel so welcome. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Ahmed Hassan",
    rating: 5,
    review:
      "TourMate connected us with an amazing local guide. The whole booking process was smooth and transparent.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Emma Williams",
    rating: 5,
    review:
      "The attention to detail and customer service was outstanding. We cannot wait to book another tour!",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const Testimonial = () => {
  return (
    <section className="py-10 sm:py-15">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <SectionHeader
          title="What Our Travelers Say"
          subTitle="Hear from thousands of satisfied travelers"
        />
        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {testimonials.map((review, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-lg p-6"
            >
              <div className="flex items-center mb-4">
                {/* Optimized Avatar */}
                <div className="relative w-14 h-14 mr-3">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    fill
                    sizes="56px"
                    className="rounded-full object-cover"
                  />
                </div>

                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <div className="text-accent">{"★".repeat(review.rating)}</div>
                </div>
              </div>

              <p className="text-muted-foreground italic">"{review.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
