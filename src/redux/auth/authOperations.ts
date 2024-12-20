import { handleAsyncError, instance, token } from "../Api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Credentials, CurrentUser, SignInResponse, UploadAvatarRequest, UserAvatar, UserData,  } from "../types";


//Registration user//
const signUp = createAsyncThunk<void, Credentials,{rejectValue: string;}>('auth/singUp', async (credentials, thunkAPI) => {
    try {
        const { data } = await instance.post('api/auth/signUp', credentials);
        token.set(data.token);
        return data;
    } catch (error) {
        return handleAsyncError(error, thunkAPI);
        
}});

//LoginIn user//
const signIn = createAsyncThunk<SignInResponse,Credentials,{rejectValue: string;}>('auth/signIn', async (credentials, thunkAPI) => {
    try {
    const { data } = await instance.post('api/auth/signIn', credentials);
    token.set(data.token);
    return data;
    }catch (error) {
        return handleAsyncError(error, thunkAPI);   
}
    }
);

//LogOut user//
const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
    try {
        await instance.post('api/auth/logOut');
        token.unset();
    } catch (error) {
        return handleAsyncError(error, thunkAPI);
        
}
});
const updateUserData = createAsyncThunk<UserData, UserData, { rejectValue: string; }>(
    'auth/updateUserData', 
    async (userData, thunkAPI ) => {
      try {
        const response = await instance.put('/user/update', userData); // Ваш API запит
        return response.data; // Повертаємо дані, які отримуємо від серверу
      } catch (error) {
        return handleAsyncError(error, thunkAPI); 
}
    }
  );

//Back user from LocalStorage - refresh//

const fetchCurrentUser = createAsyncThunk<CurrentUser,void,{rejectValue: string;}>('auth/refresh', async (_, thunkAPI) => {
    const state = thunkAPI.getState()as { auth: { token: string | null }} ;
    const persistedToken = state.auth.token;

    if (!persistedToken) {
        return thunkAPI.rejectWithValue('Please register...');
    }
    token.set(persistedToken);
    try {
        const { data } = await instance.get('api/user/current');
        return data;
    } catch (error) {
        return handleAsyncError(error, thunkAPI);
        
}
})
const uploadAvatarUser = createAsyncThunk<UserAvatar, UploadAvatarRequest, {rejectValue: string;}>('user/avatar', async ({ file }, thunkAPI) =>{
    try {
        const formData = new FormData();
      formData.append('avatar', file); // додаємо файл до FormData
      const { data } = await instance.patch('api/user/avatar', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // потрібен для завантаження файлів
        },
      });
        
        return data;
        }catch (error) {
            return handleAsyncError(error, thunkAPI);   
    }
        }
)
export const waterRate = createAsyncThunk<UserData, UserData,{ rejectValue: string } >(
  'auth/waterRate',
  async (data, thunkAPI ) => {
    try {
      const response = await instance.post('/save-water-data', data);
      return response.data; // Повертає дані у разі успішного запиту
    } catch (error) {
      return handleAsyncError(error, thunkAPI);
    }
  }
);


const authOperations = { signUp, signIn, logOut, fetchCurrentUser, uploadAvatarUser, updateUserData, waterRate };
export default authOperations;

// const response = await instance.post('api/auth/signIn', credentials);
//         const {data} = response;
//         token.set(data.token);
//         if (!data) {
//         return thunkAPI.rejectWithValue('message'); }
//         return data;