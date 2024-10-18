import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import rootReducer from '../root/rootReduser';
import storage from 'redux-persist/lib/storage';
// import { authReducer } from "./auth";
// для визначення типу state
export type RootState = ReturnType<typeof rootReducer>;
const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
}
export const store = configureStore({
    reducer: {
        
   auth: persistReducer(authPersistConfig, rootReducer),
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    devTools: process.env.NODE_ENV === 'development',
});
export const persistor = persistStore(store);
// export type RootState= ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;