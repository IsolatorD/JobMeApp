import { IUser } from "./auth";

export interface IUsersState {
  selectedUser: IUser | null;
  users: IUser[]
  errors: any;
  loading: boolean;
}

export interface IAllUsersResponse {
  users: IUser[];
}

export interface IUserResponse {
  user: IUser;
}