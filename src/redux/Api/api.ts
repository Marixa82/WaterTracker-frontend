
import axios, {AxiosError} from "axios";



export const instance = axios.create({
    baseURL: 'https://watertracker-t8-backend.onrender.com/',
});

export const token = {
    set: (token: string ) => {
        instance.defaults.headers['Authorization'] = token;
    },
    unset: () => {
        instance.defaults.headers['Authorization'] = '';
    },
};
export const handleAsyncError = (
    error: unknown,
    thunkAPI: {
        rejectWithValue: (value: string) =>  unknown; 
    }
  ) => {
    const e = error as AxiosError;
    return thunkAPI.rejectWithValue(e.message || 'Unknown error occurred'); 
  };
