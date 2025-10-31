


export interface ISignupPayload {
  name: string
  email: string
  password: string
}

export interface ILoginPayload {
  email: string
  password: string
}

export interface ILogin {
  _id: string
  name: string
  email: string
  isActive: string
  isVerified: boolean
  auths: Auth[]
  role: string
  createdAt: string
  updatedAt: string
}

export interface Auth {
  provider: string
  providerId: string
}

