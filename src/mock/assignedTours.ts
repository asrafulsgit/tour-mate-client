export interface AssignedTourGuest {
  name: string;
  email: string;
  phone: string;
}

export type AssignedTourStatus = "confirmed" | "pending" | "cancelled";

export interface AssignedTour {
  id: string;
  tourId: string;
  tourTitle: string;
  date: string;
  time: string;
  duration: string;
  location: string;
  price: number;
  maxGuests: number;
  registeredGuests: number;
  guests: AssignedTourGuest[];
  status: AssignedTourStatus;
  image: string;
}

export const mockAssignedTours : AssignedTour[] = [
  {
    id: "assigned-1",
    tourId: "1",
    tourTitle: "Sunset Hike in the Mountains",
    date: "2026-02-15",
    time: "16:00",
    duration: "4 hours",
    location: "Colorado Rockies, USA",
    price: 49,
    maxGuests: 12,
    registeredGuests: 8,
    guests: [
      { name: "John Doe", email: "john@example.com", phone: "+1-555-0100" },
      { name: "Jane Smith", email: "jane@example.com", phone: "+1-555-0103" },
      { name: "Mike Johnson", email: "mike@example.com", phone: "+1-555-0104" },
      {
        name: "Sarah Williams",
        email: "sarah@example.com",
        phone: "+1-555-0105",
      },
      { name: "Chris Brown", email: "chris@example.com", phone: "+1-555-0106" },
      { name: "Emily Davis", email: "emily@example.com", phone: "+1-555-0107" },
      {
        name: "David Miller",
        email: "david@example.com",
        phone: "+1-555-0108",
      },
      {
        name: "Lisa Anderson",
        email: "lisa@example.com",
        phone: "+1-555-0109",
      },
    ],
    status: "confirmed",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
  },
  {
    id: "assigned-2",
    tourId: "2",
    tourTitle: "Tropical Island Beach Tour",
    date: "2026-02-20",
    time: "09:00",
    duration: "6 hours",
    location: "Fiji Islands",
    price: 65,
    maxGuests: 15,
    registeredGuests: 12,
    guests: [
      {
        name: "Robert Taylor",
        email: "robert@example.com",
        phone: "+1-555-0110",
      },
      {
        name: "Jennifer Lee",
        email: "jennifer@example.com",
        phone: "+1-555-0111",
      },
      {
        name: "William Jones",
        email: "william@example.com",
        phone: "+1-555-0112",
      },
      {
        name: "Patricia White",
        email: "patricia@example.com",
        phone: "+1-555-0113",
      },
      {
        name: "Richard Harris",
        email: "richard@example.com",
        phone: "+1-555-0114",
      },
      { name: "Mary Clark", email: "mary@example.com", phone: "+1-555-0115" },
      {
        name: "Charles Lewis",
        email: "charles@example.com",
        phone: "+1-555-0116",
      },
      {
        name: "Barbara Walker",
        email: "barbara@example.com",
        phone: "+1-555-0117",
      },
      { name: "Mark Hall", email: "mark@example.com", phone: "+1-555-0118" },
      {
        name: "Sandra Allen",
        email: "sandra@example.com",
        phone: "+1-555-0119",
      },
      {
        name: "Donald Young",
        email: "donald@example.com",
        phone: "+1-555-0120",
      },
      {
        name: "Ashley King",
        email: "ashley@example.com",
        phone: "+1-555-0121",
      },
    ],
    status: "confirmed",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=300&fit=crop",
  },
  {
    id: "assigned-3",
    tourId: "3",
    tourTitle: "Ancient Ruins Exploration",
    date: "2024-03-22",
    time: "07:00",
    duration: "8 hours",
    location: "Peru",
    price: 89,
    maxGuests: 10,
    registeredGuests: 6,
    guests: [
      {
        name: "Kevin Wright",
        email: "kevin@example.com",
        phone: "+1-555-0122",
      },
      {
        name: "Michelle Lopez",
        email: "michelle@example.com",
        phone: "+1-555-0123",
      },
      {
        name: "Steven Hill",
        email: "steven@example.com",
        phone: "+1-555-0124",
      },
      {
        name: "Angela Scott",
        email: "angela@example.com",
        phone: "+1-555-0125",
      },
      { name: "Paul Green", email: "paul@example.com", phone: "+1-555-0126" },
      { name: "Linda Adams", email: "linda@example.com", phone: "+1-555-0127" },
    ],
    status: "pending",
    image:
      "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=500&h=300&fit=crop",
  },
  {
    id: "assigned-4",
    tourId: "4",
    tourTitle: "Desert Safari Adventure",
    date: "2024-03-25",
    time: "14:00",
    duration: "5 hours",
    location: "Dubai Desert",
    price: 75,
    maxGuests: 8,
    registeredGuests: 5,
    guests: [
      {
        name: "Edward Nelson",
        email: "edward@example.com",
        phone: "+1-555-0128",
      },
      {
        name: "Carol Carter",
        email: "carol@example.com",
        phone: "+1-555-0129",
      },
      {
        name: "Gary Mitchell",
        email: "gary@example.com",
        phone: "+1-555-0130",
      },
      {
        name: "Brenda Roberts",
        email: "brenda@example.com",
        phone: "+1-555-0131",
      },
      {
        name: "Ronald Phillips",
        email: "ronald@example.com",
        phone: "+1-555-0132",
      },
    ],
    status: "confirmed",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=300&fit=crop",
  },
];
