import HttpService from "../../services/http";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAuthMeResponse, IAuthResponse } from "../../interfaces/auth";

const http = new HttpService();

export const login = createAsyncThunk("auth/login", async (data: any) => {
  try {
    const response = await http.post("/auth/local", data);
    console.log('Login', response.data);
    return response.data as IAuthResponse;
  } catch (error: any) {
    console.log("Error logging in", error.response.data);
    return { ...error.response.data.error }
  }
});

export const register = createAsyncThunk("auth/register", async (data: any) => {
  try {
    const response = await http.post("/auth/local/register", data);
    console.log('Register: ', response.data);
    return response.data as IAuthResponse;
  } catch (error: any) {
    console.log("Error registering", error.response.data);
    return { ...error.response.data.error };
  }
});

export const me = createAsyncThunk("auth/me", async () => {
  try {
    const response = await http.get("users/me");
    return { user: response.data } as IAuthMeResponse;
  } catch (error: any) {
    console.log("Error me", error.response.data);
    return { ...error.response.data.error };
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    const response = await http.post("mobile/auth/logout");
    return response.data as any;
  } catch (error: any) {
    console.log("Error logging out", error.response.data);
    return { ...error.response.data.error };
  }
});