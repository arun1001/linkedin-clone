import { createSlice } from "@reduxjs/toolkit";
interface UserState {
  email: string;
  uid: string;
  displayName: string;
  photoUrl: string;
}
interface InitialUserState {
  user: null | UserState;
}
const initialState = { user: null } as InitialUserState;
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state: any) => state.user.user;

export default userSlice.reducer;
