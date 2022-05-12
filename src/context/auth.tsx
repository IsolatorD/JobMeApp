import React, { createContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { authSlice } from "../store/reducers/auth";
import { login, logout, me, register } from "../store/actions/auth";
import { IAuthContext, ILogin, IRegister } from "../interfaces/auth";
import AuthService from "../services/auth";

const Auth = new AuthService();
export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const {
    token,
    user,
    loading
  } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const signIn = async ({email, password}: ILogin) => {
    // @ts-ignore
    await dispatch(login({ identifier: email, password }));
  }
  
  const signUp = async ({ first_name, last_name, username, email, password }: IRegister) => {
    // @ts-ignore
    await dispatch(register({
      first_name,
      last_name,
      username,
      email,
      password,
      password_confirmation: password
    }));
  }

  const signOut = async () => {
    // @ts-ignore
    await Auth.logout();
    dispatch(authSlice.actions.logout());
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signUp,
        signOut,
        user,
        token,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}