export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'guide' | 'admin';
  avatar?: string;
  joinDate?: string;
}

export const MOCK_USERS  = [
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