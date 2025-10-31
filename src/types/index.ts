export type {ILogin,ILoginPayload,ISignupPayload}  from './auth.types'


export interface IResponse<T>{
  success: boolean
  message: string
  data: T
}


export interface ISendOTP{
    email : string
}

export interface IverifyOTP{
    email : string,
    otp :string
}

