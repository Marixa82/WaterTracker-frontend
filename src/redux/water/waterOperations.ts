import { handleAsyncError, instance } from "../Api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {  UserWaterMonthResponse,UserWaterTodayResponse, UserToken } from "../types";

const getWaterMonthData = createAsyncThunk<UserWaterMonthResponse, UserToken,{rejectValue: string}>(
    "waterMonthData/fetchAll",
    async (_, thunkAPI) => {
        try {
            // token.set(userToken.token);
            const response = await instance.get(`waterMonthData`);
            return response.data;
            
        } catch (error) {
            return handleAsyncError(error, thunkAPI);
        }
    }
);
const getWaterTodayData = createAsyncThunk<UserWaterTodayResponse[], UserToken,{rejectValue: string}>(
    "waterTodayData/fetchAll",
    async (_, thunkAPI) => {
        try {
            
            const response = await instance.get(`waterTodayData`);
            return response.data;
            
        } catch (error) {
            return handleAsyncError(error, thunkAPI);
        }
    }
);
const addWaterData = createAsyncThunk<UserWaterTodayResponse ,{rejectValue: string}>(
    "waterData/addWaterData",
    async (items, thunkAPI) => {
        try {
            const response = await instance.post("waterData", items);
            return response.data;
        } catch (error) {
            return handleAsyncError(error, thunkAPI);
        }
    }
);
const editWaterData = createAsyncThunk<UserWaterTodayResponse,UserWaterTodayResponse ,{rejectValue: string}>(
    "waterData/editWaterData",
    async (items, thunkAPI) => {
        try {
            const response = await instance.post("waterData", items);
            return response.data;
        } catch (error) {
            return handleAsyncError(error, thunkAPI);
        }
    }
);
const deleteWaterData = createAsyncThunk< string, string,{rejectValue: string}>(
    "waterData/deleteWaterItem",
    async (waterId, thunkAPI) => {
        try {
            const response = await instance.delete(`waterData/${waterId}`);
            return response.data;
        } catch (error) {
            return handleAsyncError(error, thunkAPI);
        }
    }
);


const waterOperations = {  getWaterMonthData, getWaterTodayData,editWaterData, addWaterData, deleteWaterData };
export default waterOperations;