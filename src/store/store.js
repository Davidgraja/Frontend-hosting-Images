import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { themeSliceSlice } from './theme'

export const store = configureStore({
    reducer: {
        auth :  authSlice.reducer,
        theme : themeSliceSlice.reducer
    },
})