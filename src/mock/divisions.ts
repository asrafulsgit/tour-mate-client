export interface Division {
  id: string;
  name: string;
  slug: string;
  thumbnail: string;
  description: string;
}

export const mockDivisions: Division[] = [
  {
    id: "1",
    name: "Dhaka",
    slug: "dhaka",
    thumbnail:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop",
    description:
      "The capital division of Bangladesh, known for its vibrant culture and historical sites.",
  },
  {
    id: "2",
    name: "Chattogram",
    slug: "chattogram",
    thumbnail:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=300&h=200&fit=crop",
    description:
      "A major port city with scenic beauty and bustling trade activities.",
  },
  {
    id: "3",
    name: "Sylhet",
    slug: "sylhet",
    thumbnail:
      "https://images.unsplash.com/photo-1500595046891-cd271c66d84e?w=300&h=200&fit=crop",
    description: "Known for its tea gardens and lush green landscape.",
  },
  {
    id: "4",
    name: "Cox's Bazar",
    slug: "coxs-bazar",
    thumbnail:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=200&fit=crop",
    description: "Home to the longest sea beach and diverse marine tourism.",
  },
  {
    id: "5",
    name: "Khulna",
    slug: "khulna",
    thumbnail:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop",
    description: "The gateway to the Sundarbans mangrove forest.",
  },
  {
    id: "6",
    name: "Rajshahi",
    slug: "rajshahi",
    thumbnail:
      "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=300&h=200&fit=crop",
    description: "Famous for silk production and historical monuments.",
  },
];
