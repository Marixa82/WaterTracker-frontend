import { RootState } from "../store";

const selectUserIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
const selectUserName = (state: RootState) => state.auth.userData.name;
const selectUserToken = (state: RootState) => state.auth.token;
const selectUserRefreshing = (state: RootState) => state.auth.isRefreshing;
// const selectUserAuthenticated = state => state.auth.authenticated;



const authSelectors = {
    selectUserIsLoggedIn,
    selectUserName,
    selectUserToken,
    selectUserRefreshing,
};
export default authSelectors;