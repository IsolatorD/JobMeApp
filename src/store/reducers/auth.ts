import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AuthService from "../../services/auth";
import {
  login,
  register,
  me,
  logout,
} from '../actions/auth';
import { IAuthState } from "../../interfaces/auth";

const Auth = new AuthService();

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    isAuthenticated: false,
    errors: null,
    loading: false,
  } as IAuthState,
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
    setUser: (state, action: PayloadAction<any | null>) => {
      state.user = action.payload;
    },
    clearErrors: (state) => {
      state.errors = null;
    },
    logout: (state) => {
      state.errors = null;
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
    }
  },
  extraReducers: builder => {
    builder.addCase(login.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload?.jwt) {
        state.isAuthenticated = true;
        Auth.setToken(action.payload?.jwt);
        state.token = action.payload?.jwt;
        state.user = action.payload?.user
      } else {
        state.errors = action.payload;
      }
    });
    builder.addCase(login.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(register.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload?.jwt) {
        state.isAuthenticated = true;
        Auth.setToken(action.payload?.jwt);
        state.token = action.payload?.jwt;
        state.user = action.payload?.user
      } else {
        state.errors = action.payload;
      }
    });
    builder.addCase(register.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(logout.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
      Auth.logout();
    });
    builder.addCase(logout.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(me.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(me.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload?.user) {
        state.user = action.payload?.user;
        Auth.setUser(action.payload?.user);
      } else {
        state.errors = action.payload;
      }
    });
    builder.addCase(me.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default authSlice.reducer;