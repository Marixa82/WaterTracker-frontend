import { createSlice } from "@reduxjs/toolkit";
import authOperations from './authOperations';

type UserData = {
    email: string;
    // password: string;
    name?: string; // Опціональне поле, якщо використовується для реєстрації
  }
  type UserDataState = {
    userData: UserData,
    token: string | null,
  isLoggedIn: boolean,
  isRefreshing: boolean,
  }
const initialState: UserDataState = {
    userData: { name: '', email: '' },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(authOperations.signUp.fulfilled, (state, action) => {
                state.userData = action.payload.userData;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(authOperations.signIn.fulfilled, (state, action) => {
                state.userData = action.payload.userData;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(authOperations.logOut.fulfilled, (state) => {
                state.userData = { name: '', email: '' };
                state.token = null;
                state.isLoggedIn = false;
                state.isRefreshing = false;
            })
            .addCase(authOperations.fetchCurrentUser.pending, (state) => {
                state.isRefreshing = true;
            })
            .addCase(authOperations.fetchCurrentUser.fulfilled, (state, action) => {
                state.userData = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            }).addCase(authOperations.fetchCurrentUser.rejected, (state) => {
                state.isRefreshing = false;
            })
    },
});
export default authSlice.reducer;