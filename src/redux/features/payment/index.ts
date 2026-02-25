import { baseApi } from "@/redux/api/baseApi";
import { RePaymentResponse } from "./payment.types";

export const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    rePayment: builder.mutation<RePaymentResponse, {id : string}>({ 
      query: ({id}) => ({
        url: `/payment/re-payment/${id}`,
        method: "POST",
      })
    }),
  }),
});

export const { useRePaymentMutation } = paymentApi;
