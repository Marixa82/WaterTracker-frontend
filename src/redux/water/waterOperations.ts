import { handleAsyncError, instance, token } from "../Api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {  UserWaterResponse, UserToken } from "../types";

const fetchWaterData = createAsyncThunk<UserWaterResponse, UserToken,{rejectValue: string}>(
    "waterData/fetchAll",
    async (userToken, thunkAPI) => {
        try {
            token.set(userToken.token);
            const response = await instance.get(`waterData/${userToken.userId}`);
            return response.data;
            
        } catch (error) {
            return handleAsyncError(error, thunkAPI);
        }
    }
);
//Registration user//
// const signUp = createAsyncThunk<SignInResponse,Credentials,{rejectValue: string;}>('auth/singUp', async (credentials, thunkAPI) => {
//     try {
//         const { data } = await instance.post(`/users/signUp`, credentials);
//         token.set(data.token);
//         console.log('credentials', data)
//         return data;
//     } catch (error) {
//         return handleAsyncError(error, thunkAPI);
        
// }});

// //LoginIn user//
// const signIn = createAsyncThunk<SignInResponse,Credentials,{rejectValue: string;}>('auth/signIn', async (credentials, thunkAPI) => {
    
//         const response = await instance.post(`/users/signIn`, credentials);
//         const {data} = response;
//         token.set(data.token);
//         if (!data) {
//         return thunkAPI.rejectWithValue('message'); }
//         return data;
//     }
// );

// //LogOut user//
// const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
//     try {
//         await instance.post(`/users/logOut`);
//         token.unset();
//     } catch (error) {
//         return handleAsyncError(error, thunkAPI);
        
// }
// });

// //Back user from LocalStorage - refresh//

// const fetchCurrentUser = createAsyncThunk<CurrentUser,void,{rejectValue: string;}>('auth/refresh', async (_, thunkAPI) => {
//     const state = thunkAPI.getState()as { auth: { token: string | null }} ;
//     const persistedToken = state.auth.token;

//     if (!persistedToken) {
//         return thunkAPI.rejectWithValue('Please register...');
//     }
//     token.set(persistedToken);
//     try {
//         const { data } = await instance.get('/users/current');
//         return data;
//     } catch (error) {
//         return handleAsyncError(error, thunkAPI);
        
// }
// })


const waterOperations = {  fetchWaterData };
export default waterOperations;