export interface User {
  id: string;
  email: string;
  name: string;
  password ?: string;
  role: 'user' | 'guide' | 'admin';
  avatar?: string;
  joinDate?: string;
  verified ?: boolean;
  totalBookings? : string
}

export const MOCK_USERS :User[]  = [
  {
    id: '1',
    email: 'user@example.com',
    password: 'password123',
    name: 'Sarah Johnson',
    role: 'user' as const,
    joinDate: '2023-01-15',
  },
  {
    id: '2',
    email: 'guide@example.com',
    password: 'password123',
    name: 'Ahmed Hassan',
    role: 'guide' as const,
    joinDate: '2022-06-20',
  },
  {
    id: '3',
    email: 'admin@example.com',
    password: 'password123',
    name: 'Emma Williams',
    role: 'admin' as const,
    joinDate: '2021-03-10',
  },
];


type Auth = {
   provider: String ; 
   providerId: String 
}

export type AdminUser = {
  id: string;
  name: string;
  email: string;
  picture ?: string;
  isVerified ?:boolean;
  phone: string;
  address: string;
  avatar: string;
  role: "USER" | "ADMIN" | "GUIDE";
  isActive: "ACTIVE" | "BLOCKED";
  verified: boolean;
  joinDate: string;
  totalBookings: number;
  confirmedTours: number;
  pendingPayments: number;
  isDeleted?:boolean;
  auths: Auth[],
};


export const adminUsers : AdminUser[] = [
  {
    id: "user-1",
    name: "John Doe",
    email: "user@example.com",
    phone: "+1-555-0100",
    address: "New York, USA",
    picture:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    joinDate: "2023",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    isVerified: true,
    isActive: "ACTIVE",
    isDeleted: false,
    role: "USER",
    totalBookings: 8,
    confirmedTours: 6,
    pendingPayments: 126,
    auths: [{ provider: "credentials", providerId: "user@example.com" }],
    verified: true,
  },
  {
    id: "user-2",
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "+1-555-0103",
    address: "Los Angeles, USA",
    picture:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    joinDate: "2022",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    isVerified: true,
    isActive: "ACTIVE",
    isDeleted: false,
    role: "ADMIN",
    totalBookings: 15,
    confirmedTours: 14,
    pendingPayments: 0,
    auths: [{ provider: "credentials", providerId: "jane@example.com" }],
    verified: true,
  },
  {
    id: "user-3",
    name: "Md Asraful Islam",
    email: "asraful@example.com",
    phone: "+8801820286432",
    address: "Dhaka, Bangladesh",
    picture:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    joinDate: "2024",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    isVerified: true,
    isActive: "ACTIVE",
    isDeleted: false,
    role: "GUIDE",
    totalBookings: 3,
    confirmedTours: 2,
    pendingPayments: 0,
    auths: [{ provider: "credentials", providerId: "asraful@example.com" }],
    verified: false,
  },
]