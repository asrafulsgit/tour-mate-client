export type GuideApplicationStatus = "pending" | "approved" | "rejected";

export interface GuideApplication {
  id: string;
  userId: string;
  userName: string;
  phone: string;
  email: string;
  division: string;
  experience: string;
  nidPhoto: string;
  status: GuideApplicationStatus;
  appliedOn: string;  
  approvedOn?: string; 
}


export const mockGuideApplications : GuideApplication[] = [
  {
    id: 'guide-app-1',
    userId: 'user-1',
    userName: 'John Doe',
    phone: '+1-555-0100',
    email: 'user@example.com',
    division: 'Dhaka',
    experience: '5+ years leading adventure tours',
    nidPhoto: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=150&fit=crop',
    status: 'pending',
    appliedOn: '2024-02-10',
  },
  {
    id: 'guide-app-2',
    userId: 'user-2',
    userName: 'Jane Smith',
    phone: '+1-555-0103',
    email: 'jane@example.com',
    division: 'Chattogram',
    experience: '3 years of cultural tours',
    nidPhoto: 'https://via.placeholder.com/300x200?text=NID+Photo',
    status: 'rejected',
    appliedOn: '2024-01-15',
    approvedOn: '2024-01-20',
  },
];