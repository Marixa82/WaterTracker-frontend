import { createSlice } from "@reduxjs/toolkit";
import waterOperations from "./waterOperations";
import { WaterMonthData, WaterTodayData } from "../types";

type WaterDataState = {
    waterMonthData: WaterMonthData;
    waterTodayData: WaterTodayData;
    isLoading: boolean;
    error: string | null;
};
const initialState: WaterDataState = {
    waterMonthData: {
        waterMonth: {},
    },
    waterTodayData:{
        waterList: [],
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
            .addCase(waterOperations.addWaterData.fulfilled, (state, action)=>{
            state.waterTodayData.waterList.push(action.payload)
        })
            .addCase(waterOperations.editWaterData.fulfilled, (state, action)=>{
                state.waterTodayData.waterList = state.waterTodayData.waterList.map(item => 
                    item.id === action.payload.id ? action.payload : item
                );
                 
            })
            .addCase(waterOperations.deleteWaterData.fulfilled, (state, action)=>{
                state.waterTodayData.waterList = state.waterTodayData.waterList.filter(item => 
                    item.id !== action.payload);
                 
            })
            .addCase(waterOperations.getWaterMonthData.fulfilled, (state, action) => {
                state.waterMonthData.waterMonth = action.payload;
            })
            .addCase(waterOperations.getWaterTodayData.fulfilled, (state, action) => {
                state.waterTodayData.waterList = action.payload;
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

