export interface SendOtpPayload {
  email: string;
}

export interface VerifyOtpPayload {
  email: string;
  otp : string;
}

export interface SendOtpResponse {
  success: boolean;
  message: string;
  data: null;
}
