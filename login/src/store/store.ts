import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './slices/loginSlice'
import { authApi } from './apis/auth'


export const store = configureStore({
    reducer: {
        "login": loginSlice,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware),

})


export default store;