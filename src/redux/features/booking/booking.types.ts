export type CreateBookingPayload = {
  tour: string;
  guests: number;
};

export type BookingUser = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
};

export type BookingTour = {
  _id: string;
  title: string;
  costFrom: number;
};

export type PaymentInfo = {
  _id: string;
  booking: string;
  transactionId: string;
  amount: number;
  status: string;
  createdAt: string;
  updatedAt: string;
};

export type Booking = {
  _id: string;
  user: BookingUser;
  tour: BookingTour;
  guests: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  payment: PaymentInfo;
};

export type CreateBookingResponse = {
  success: boolean;
  message: string;
  data: {
    paymentUrl: string;
    booking: Booking;
  };
};

export interface GetMyBookingsResponse {
  success: boolean;
  message: string;
  data: IBooking[];
}

export interface IBooking {
  _id: string;
  user: string;
  tour: ITour;
  guests: number;
  status: "PENDING" | "COMPLETE" | "CANCEL" | "FAILED";
  expiresAt: string;
  createdAt: string;
  updatedAt: string;
  payment: IPayment;
}

export interface ITour {
  _id: string;
  title: string;
  images: string[];
  startDate: string;
  endDate: string;
  maxGuest: number;
}

export interface IBookingDetailsResponse {
  success: boolean;
  message: string;
  data: IBookingDetails;
}

export interface IBookingDetails {
  _id: string;
  user: IUser;
  tour: ITour;
  guests: number;
  status: BookingStatus;
  expiresAt: string;
  createdAt: string;
  updatedAt: string;
  payment: IPayment;
}

export type BookingStatus = "PENDING" | "COMPLETE" | "CANCEL" | "FAILED";

export interface IUser {
  _id: string;
  name: string;
  email: string;
}
export type IPaymentStatus =
  | "PAID"
  | "UNPAID"
  | "CANCELLED"
  | "FAILED"
  | "REFUNDED";
export interface IPayment {
  _id: string;
  amount: number;
  status?: IPaymentStatus;
}

export interface GetAllBookingsResponse {
  success: boolean;
  message: string;
  data: IBooking[];
  meta: { page: number; limit: number; total: number; totalPage: number };
}

export type GetAllBookingsParams = {
  page?: number;
  limit?: number;
  searchTerm?: string;
  status?: string;
};
