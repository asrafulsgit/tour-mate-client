export type RePaymentResponse = {
  success: boolean;
  message: string;
  data: {
    paymentUrl: string;
  };
};