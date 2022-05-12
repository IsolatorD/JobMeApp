import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getUsers,
  getUser
} from '../actions/users'
import { IUsersState } from "../../interfaces/users";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    selectedUser: null,
    users: [],
    errors: null,
    loading: false,
  } as IUsersState,
  reducers: {
    setSelectedUser: (state, action: PayloadAction<any>) => {
      state.selectedUser = action.payload;
    },
    resetState: (state) => {
      state.users = [];
      state.errors = null;
      state.loading = false;
    }
  },
  extraReducers: builder => {
    // Get users
    builder.addCase(getUsers.pending, (state, action) => {
      state.loading = true;
    })
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload?.users) {
        state.users = action.payload?.users;
      }
    })
    builder.addCase(getUsers.rejected, (state) => {
      state.loading = false;
    })
    // Get user
    builder.addCase(getUser.pending, (state, action) => {
      state.loading = true;
    })
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload?.user) {
        state.selectedUser = action.payload?.user;
      }
    })
    builder.addCase(getUser.rejected, (state) => {
      state.loading = false;
    })
  }
});

export default usersSlice.reducer;