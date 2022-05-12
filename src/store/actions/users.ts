import HttpService from "../../services/http";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUserResponse, IAllUsersResponse } from "../../interfaces/users";

const http = new HttpService();

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  try {
    const response = await http.get("users");
    console.log('Get users: ', response.data);
    return { users: response.data } as IAllUsersResponse;
  } catch (error: any) {
    console.log("Error in getUsers", error.response.data);
    return { ...error.response.data.error };
  }
})

export const getUser = createAsyncThunk("users/getUser", async (id: number) => {
  try {
    const response = await http.get(`users/${id}`);
    console.log('response getUser: ', response.data);
    return { user: response.data } as IUserResponse;
  } catch (error: any) {
    console.log("Error in getUser", error.response.data);
    return { ...error.response.data.error };
  }
})