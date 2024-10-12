import { instance, token } from "../Api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Credentials, SignInResponse } from "../types";


//Registration user//
const signUp = createAsyncThunk<
SignInResponse,        // Тип успішного результату
Credentials,           // Тип аргументів (credentials)
{
  rejectValue: string; // Тип помилки
}
>('auth/singUp', async (credentials, thunkAPI) => {
    try {
        const { data } = await instance.post(`/users/signUp`, credentials);
        token.set(data.token);
        console.log('credentials', data)
        return data;
    } catch  {
        // const e = error as AxiosError;
        return thunkAPI.rejectWithValue('Failed to sign in');}
});

//LoginIn user//
const signIn = createAsyncThunk<
SignInResponse,        // Тип успішного результату
Credentials,           // Тип аргументів (credentials)
{
  rejectValue: string; // Тип помилки
}
>('auth/signIn', async (credentials, thunkAPI) => {
    try {
        const { data } = await instance.post(`/users/signIn`, credentials);
        token.set(data.token);
        return data;
    } catch (e) {
        
        return thunkAPI.rejectWithValue(e.message); 
    }
});

//LogOut user//
const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
    try {
        await instance.post(`/users/logOut`);
        token.unset();
    } catch (e) {
       
        return thunkAPI.rejectWithValue(e.message);
    }
});

//Back user from LocalStorage - refresh//

const fetchCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
        return thunkAPI.rejectWithValue('Please register...');
    }
    token.set(persistedToken);
    try {
        const { data } = await instance.get('/users/current');
        return data;
    } catch (error) { }
})


const authOperations = { signUp, signIn, logOut, fetchCurrentUser };
export default authOperations;