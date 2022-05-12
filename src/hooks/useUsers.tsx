import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { getUser, getUsers } from "../store/actions/users";
import { usersSlice } from "../store/reducers/users";

export const useUsers = () => {
  const { selectedUser, users, loading } = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();

  const fetchUsers = async () => {
    // @ts-ignore
    await dispatch(getUsers())
  }

  const fetchUser = async (userId: number) => {
    // @ts-ignore
    await dispatch(getUser(userId))
  }

  const clearUser = () => {
    // @ts-ignore
    dispatch(usersSlice.actions.setSelectedUser(null))
  }

  return {
    selectedUser,
    users,
    loading,
    fetchUsers,
    fetchUser,
    clearUser,
  }
}