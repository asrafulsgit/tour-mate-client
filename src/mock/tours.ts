export interface Tour {
  id: string;
  title: string;
  description: string;
  image: string;
  location: string;
  rating: number;
  reviews: number;
  duration: string;
  groupSize: number;
  price: number;
  category: string;
  guide: {
    name: string;
    avatar: string;
  };
}
export const mockTours = [
  {
    id: '1',
    title: 'Sunset Hike in the Mountains',
    description: 'Experience breathtaking views of the sunset from the mountain peak.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
    location: 'Colorado Rockies, USA',
    rating: 4.9,
    reviews: 284,
    duration: '4 hours',
    groupSize: 12,
    price: 49,
    category: 'Adventure',
    guide: {
      name: 'Alex Johnson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop',
    },
  },
  {
    id: '2',
    title: 'Tropical Island Beach Tour',
    description: 'Explore pristine beaches, crystal waters, and local marine life.',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=300&fit=crop',
    location: 'Fiji Islands',
    rating: 4.8,
    reviews: 156,
    duration: '6 hours',
    groupSize: 15,
    price: 65,
    category: 'Beach',
    guide: {
      name: 'Maria Santos',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop',
    },
  },
  {
    id: '3',
    title: 'Ancient Ruins Exploration',
    description: 'Discover hidden archaeological sites and learn about ancient civilizations.',
    image: 'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=500&h=300&fit=crop',
    location: 'Peru',
    rating: 4.7,
    reviews: 421,
    duration: '8 hours',
    groupSize: 10,
    price: 89,
    category: 'History',
    guide: {
      name: 'Diego Morales',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop',
    },
  },
  {
    id: '4',
    title: 'Urban Food & Culture',
    description: 'Taste authentic local cuisine and explore vibrant neighborhoods.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&h=300&fit=crop',
    location: 'Bangkok, Thailand',
    rating: 4.9,
    reviews: 512,
    duration: '5 hours',
    groupSize: 8,
    price: 42,
    category: 'Food',
    guide: {
      name: 'Niran Thakur',
      avatar: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=32&h=32&fit=crop',
    },
  },
  {
    id: '5',
    title: 'Alpine Skiing Adventure',
    description: 'Hit the slopes with expert instructors on world-class ski terrain.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
    location: 'Swiss Alps',
    rating: 4.8,
    reviews: 203,
    duration: '4 hours',
    groupSize: 6,
    price: 120,
    category: 'Sports',
    guide: {
      name: 'Marco Schmid',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop',
    },
  },
  {
    id: '6',
    title: 'Wildlife Safari Expedition',
    description: 'Experience African wildlife in their natural habitat with expert guides.',
    image: 'https://images.unsplash.com/photo-1488747807830-63789f68bb65?w=500&h=300&fit=crop',
    location: 'Kenya',
    rating: 4.95,
    reviews: 678,
    duration: '7 hours',
    groupSize: 10,
    price: 150,
    category: 'Nature',
    guide: {
      name: 'Kwame Osei',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop',
    },
  },
  {
    id: '7',
    title: 'Mediterranean Sailing',
    description: 'Sail through stunning Mediterranean coastlines and secluded coves.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=300&fit=crop',
    location: 'Greece',
    rating: 4.7,
    reviews: 289,
    duration: '6 hours',
    groupSize: 12,
    price: 95,
    category: 'Water',
    guide: {
      name: 'Dimitri Papadopoulos',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop',
    },
  },
  {
    id: '8',
    title: 'Desert Camel Trekking',
    description: 'Journey through golden dunes on camelback through historic trade routes.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
    location: 'Morocco',
    rating: 4.8,
    reviews: 345,
    duration: '5 hours',
    groupSize: 8,
    price: 55,
    category: 'Adventure',
    guide: {
      name: 'Rachid Ben Salem',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop',
    },
  },
];


export const categories = [
  'All',
  'Adventure',
  'Beach',
  'History',
  'Food',
  'Sports',
  'Nature',
  'Water',
];

export const mockGuides = [
  {
    id: '1',
    name: 'Alex Johnson',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    title: 'Mountain & Adventure Guide',
    bio: 'With 10+ years of experience, Alex specializes in mountain expeditions and outdoor adventures across North America.',
    toursCount: 156,
    rating: 4.9,
    reviews: 284,
    languages: ['English', 'Spanish', 'French'],
  },
  {
    id: '2',
    name: 'Maria Santos',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    title: 'Tropical & Beach Expert',
    bio: 'Maria brings island life to life with her deep knowledge of tropical ecosystems and local island culture.',
    toursCount: 203,
    rating: 4.8,
    reviews: 156,
    languages: ['English', 'Portuguese', 'Spanish'],
  },
];

export type BookingStatus = "confirmed" | "pending" | "cancelled";

export interface Booking {
  id: string;
  tourId: string;
  tourTitle: string;
  date: string;        
  duration: string;     
  groupSize: number;
  price: number;
  status: BookingStatus;
  image: string;       
}


export const mockUserBookings :Booking[] = [
  {
    id: 'booking-1',
    tourId: '1',
    tourTitle: 'Sunset Hike in the Mountains',
    date: '2024-03-15',
    duration: '4 hours',
    groupSize: 5,
    price: 245,
    status: 'confirmed',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=150&fit=crop',
  },
  {
    id: 'booking-2',
    tourId: '4',
    tourTitle: 'Urban Food & Culture',
    date: '2024-03-20',
    duration: '5 hours',
    groupSize: 3,
    price: 126,
    status: 'pending',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=200&h=150&fit=crop',
  },
];

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string; // image URL
  tourId: string;
  rating: number; // 1–5
  date: string; // ISO date string (YYYY-MM-DD)
  title: string;
  comment: string;
}

export const mockReviews : Review[] = [
  {
    id: 'review-1',
    userId: 'user-123',
    userName: 'Sarah Mitchell',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=48&h=48&fit=crop',
    tourId: '1',
    rating: 5,
    date: '2024-02-15',
    title: 'Amazing experience!',
    comment: 'Alex was an incredible guide. The sunset views were absolutely breathtaking, and he shared so much knowledge about the area. Highly recommended!',
  },
  {
    id: 'review-2',
    userId: 'user-456',
    userName: 'James Chen',
    userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=48&h=48&fit=crop',
    tourId: '1',
    rating: 4,
    date: '2024-02-10',
    title: 'Great tour, worth the price',
    comment: 'Really enjoyed this tour. The guide was knowledgeable and friendly. The only minor thing was the hiking was a bit more challenging than expected.',
  },
  {
    id: 'review-3',
    userId: 'user-789',
    userName: 'Emma Wilson',
    userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop',
    tourId: '1',
    rating: 5,
    date: '2024-02-05',
    title: 'Unforgettable memory',
    comment: 'Best decision ever! The whole experience was perfectly organized. Alex made us feel so comfortable and safe throughout the entire hike.',
  },
];