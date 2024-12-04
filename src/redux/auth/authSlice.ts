import { createSlice } from "@reduxjs/toolkit";
import authOperations from './authOperations';
import { UserData } from "../types";


  type UserDataState = {
  userData: UserData,
  token: string | null,
  isLoggedIn: boolean,
  isRefreshing: boolean,
  }
const initialState: UserDataState = {
    userData: { 
        email: '',
        name: '',
        gender: '',
        avatarURL: '',
        waterRate: 0,
        verify: '', 
    },
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
            .addCase(authOperations.signUp.fulfilled, (state)=>{
                state.isLoggedIn = true;
            })            
            .addCase(authOperations.signIn.fulfilled, (state, action) => {
                state.userData = action.payload.userData;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(authOperations.updateUserData.fulfilled, (state, action) => {
                state.isLoggedIn = false;
                state.userData = { ...state.userData, ...action.payload }; 
              })
            .addCase(authOperations.logOut.fulfilled, (state) => {
                state.userData = { name: '', email: '', gender: '', avatarURL: '', waterRate: 0, verify: ''  };
                state.token = null;
                state.isLoggedIn = false;
                state.isRefreshing = false;
            }).addCase(authOperations.uploadAvatarUser.fulfilled, (state, action) => {
                state.userData.avatarURL = action.payload.avatarURL;
                
            }).addCase(authOperations.waterRate.pending, (state) => {
                state.isLoggedIn = true;
              }).addCase(authOperations.waterRate.fulfilled, (state, action) => {
                state.userData.waterRate = action.payload.waterRate;
                state.isLoggedIn = false;
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