export interface IRegister {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  phone: string;
  avatar: string;
  biography: string;
  born_date: string;
}

export interface IAuthContext {
  token: string | null;
  loading: boolean;
  user: IUser | null;
  signIn(data: ILogin): Promise<void>;
  signUp(data: IRegister): Promise<void>;
  signOut(): void; 
}

export interface IAuthState {
  token: string | null;
  user: IUser | null;
  errors: any;
  isAuthenticated: boolean;
  loading: boolean;
}

export interface IAuthResponse {
  jwt: string | null;
  user: IUser
}

export interface IAuthMeResponse {
  user: IUser
}