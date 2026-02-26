export type UsersByRole = {
  _id: "USER" | "GUIDE" | "ADMIN" | "SUPER_ADMIN";
  count: number;
};

export type UserStats = {
  totalUsers: number;
  totalActiveUsers: number;
  totalInActiveUsers: number;
  totalBlockedUsers: number;
  newUsersInLast7Days: number;
  newUsersInLast30Days: number;
  usersByRole: UsersByRole[];
};

export type GetUserStatsResponse = {
  success: boolean;
  message: string;
  data: UserStats;
};

export interface TourStatsResponse {
  success: boolean;
  message: string;
  data: TourStatsData;
}

export interface TourStatsData {
  totalTour: number;
  totalTourByTourType: TourTypeCount[];
  avgTourCost: AvgTourCost[];
  totalTourByDivision: DivisionCount[];
  totalHighestBookedTour: HighestBookedTour[];
}

export interface TourTypeCount {
  _id: string;  
  count: number;
}

export interface AvgTourCost {
  _id: null;
  avgCostFrom: number;
}

export interface DivisionCount {
  _id: string;  
  count: number;
}

export interface HighestBookedTour {
  _id: string;  
  bookingCount: number;
  tour: {
    title: string;
    slug: string;
  };
}

export interface BookingStatsResponse {
  success: boolean;
  message: string;
  data: BookingStatsData;
}

export interface BookingStatsData {
  totalBooking: number;
  totalBookingByStatus: BookingStatusCount[];
  bookingsPerTour: BookingsPerTour[];
  avgGuestCountPerBooking: number | null;
  bookingsLast7Days: number;
  bookingsLast30Days: number;
  totalBookingByUniqueUsers: BookingStatusCount[];
}

export interface BookingStatusCount {
  _id: string;  
  count: number;
}

export interface BookingsPerTour {
  _id: string;  
  bookingCount: number;
  tour: {
    title: string;
    slug: string;
  };
}

export interface PaymentStatsResponse {
  success: boolean;
  message: string;
  data: PaymentStatsData;
}

export interface PaymentStatsData {
  totalPayment: number;
  totalPaymentByStatus: PaymentStatusCount[];
  totalRevenue: TotalRevenue[];
  avgPaymentAmount: AvgPaymentAmount[];
  paymentGatewayData: PaymentGatewayCount[];
}

export interface PaymentStatusCount {
  _id: string;  
  count: number;
}

export interface TotalRevenue {
  _id: null;
  totalRevenue: number;
}

export interface AvgPaymentAmount {
  _id: null;
  avgPaymentAMount: number;  
}

export interface PaymentGatewayCount {
  _id: string;  
  count: number;
}