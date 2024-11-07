import { RootState } from "../store";


const selectWaterMonthData = (state: RootState) => state.water.waterMonthData;
const selectWaterTodayData = (state: RootState) => state.water.waterTodayData;
const selectIsLoadingWater = (state: RootState) => state.water.isLoading;
const selectErrorWater = (state: RootState) => state.water.error;


const waterSelectors = {
    selectWaterMonthData,
    selectWaterTodayData,
    selectIsLoadingWater,
    selectErrorWater,
};
export default waterSelectors;