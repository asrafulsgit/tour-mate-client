import { baseApi } from "@/redux/api/baseApi"; 
import { SendOtpPayload, SendOtpResponse, VerifyOtpPayload } from "./otp.types";

export const otpApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    sendOtp: builder.mutation<SendOtpResponse, SendOtpPayload>({
      query: (payload) => ({
        url: "/otp/send",
        method: "POST",
        body: payload,
      }),
    }),
    verifyOtp: builder.mutation<SendOtpResponse, VerifyOtpPayload>({
      query: (payload) => ({
        url: "/otp/verify",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useSendOtpMutation,useVerifyOtpMutation } = otpApi;
