import { createSlice } from '@reduxjs/toolkit'


export const themeSliceSlice = createSlice({
    name: 'themeSlice',
    initialState : {
        darkMode : false
    },
    reducers: {
        activeDarkMode : (state) => {
            state.darkMode = true
        },

        disableDarkMode : (state) => {
            state.darkMode = false
        }


    }
    

})

// Action creators are generated for each case reducer function
export const { activeDarkMode , disableDarkMode } = themeSliceSlice.actions