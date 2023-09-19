//! This slice is where we will configure the state related to our displayCountry.
import { createSlice } from "@reduxjs/toolkit";
import initialCountry from '../../assets/initialCountry';



export const displayCountrySlice = createSlice({
    name:'displayCountry',
    initialState: {
        value: initialCountry
    },
    reducers: {
        setDisplayCountry: (state, action) => {
            state.value = action.payload;
        },
        deleteDisplayCountry: (state) => {
            state.value = null;
        }
    },
});

//! Explanation: 
// The createSlice method of “@reduxjs/toolkit” will take whatever reducers you add to the “reducers” property of its argument and turn them into an “actions”. You can then use these actions anywhere in your application to manipulate global state.

export const {setDisplayCountry, deleteDisplayCountry} = displayCountrySlice.actions

// ! Explanation:
// This function defines how to read the state of displayedCountry. You will use this function elsewhere in your react app to read from state.
export const selectDisplay = (state) => {
    return state.displayedCountry.value;
};

// ! Explanation:
// The reducer from displayCountrySlice is created by the “createSlice” method from “@reduxjs/toolkit”. In the next step, you are going to supply this master reducer to your redux store.
export default displayCountrySlice.reducer;