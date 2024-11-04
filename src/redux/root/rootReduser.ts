import { combineReducers } from "redux";
import { authReducer } from "../auth";
import { waterReducer } from "../water";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Налаштування конфігурації для auth
const authPersistConfig = {
    key: "auth",
    storage,
    whitelist: ["token"],
};

// Створення rootReducer з використанням persistReducer для auth
const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authReducer), // persist лише для authReducer
    water: waterReducer,
});


export default rootReducer;


