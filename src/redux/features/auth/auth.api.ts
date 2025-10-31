import { baseApi } from "@/redux/baseApi";
import type { ILogin, ILoginPayload, IResponse, ISendOTP, ISignupPayload, IverifyOTP } from "@/types"; 

const authApi = baseApi.injectEndpoints({
  endpoints : (builder)=>({
    signup : builder.mutation<IResponse<null>,ISignupPayload>({
      query : (userInfo) =>({
        url : '/user/register',
        method : 'POST',
        data : userInfo,
      }) 
    }),
    login : builder.mutation<IResponse<ILogin>, ILoginPayload>({
      query : (userInfo)=>({
        url : '/auth/login',
        method : 'POST',
        data : userInfo
      })
    }),
    sendOtp : builder.mutation<IResponse<null>,ISendOTP>({
      query : (email)=>({
        url : '/otp/send',
        method : 'POST',
        data : email
      })
    }),
    verifyOtp : builder.mutation<IResponse<null>,IverifyOTP>({
      query : (verifyInfo)=>({
        url : '/otp/verify',
        method : 'POST',
        data : verifyInfo
      })
    })
  })
}) 


export const { useSignupMutation,useLoginMutation,useSendOtpMutation,useVerifyOtpMutation} = authApi;

