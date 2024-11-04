import { RootState } from "../root/rootReduser";


const selectWaterData = (state: RootState) => state.water.waterData;



const waterSelectors = {
    selectWaterData,
};
export default waterSelectors;