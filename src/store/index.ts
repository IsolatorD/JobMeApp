import { configureStore } from "@reduxjs/toolkit";
import authReducer from './reducers/auth';
import userReducer from './reducers/users';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch