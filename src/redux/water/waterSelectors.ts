import { RootState } from "../store";


const selectWaterData = (state: RootState) => state.water.waterData;



const waterSelectors = {
    selectWaterData,
};
export default waterSelectors;