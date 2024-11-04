import { createSlice } from "@reduxjs/toolkit";
import waterOperations from "./waterOperations";
import { UserWaterResponse } from "../types";

type WaterDataState = {
    waterData: UserWaterResponse;
    isLoading: boolean;
    error: string | null;
};
const initialState: WaterDataState = {
    waterData: {
        day: '',
        month: '',
        year: '',
        time: '',
        amount: 0,
        waterRateForThisDay: 2000,
        owner: '',
    },
    isLoading: false,
    error: null,
};
const waterSlice = createSlice({
    name: 'water',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(waterOperations.fetchWaterData.fulfilled, (state, action) => {
                state.waterData = action.payload;
            }).addCase(waterOperations.changeWaterData.fulfilled, (state, action)=>{
                state.waterData = {
                    ...state.waterData,
                    ...action.payload, // action.payload містить нові значення для waterData
                };
            })
            .addMatcher(action => action.type.endsWith('/pending'),
            (state) => {
                state.isLoading = true;
                state.error = null;
            })
        .addMatcher(action => action.type.endsWith('/rejected'),
            (state, action) => {
                state.isLoading = false;
                state.error = action.type as string;
            })
    },
});
export default waterSlice.reducer;

