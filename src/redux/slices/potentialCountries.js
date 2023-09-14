import { createSlice } from "@reduxjs/toolkit";
import React from "react";

export const potentialCountriesSlice = createSlice({
  name: "potentialCountries",
  initialState: {
    value: [
      {
        name: {
          common: "America",
        },
      },
    ],
  },
  reducers: {
    setPotentialCountries: (state, action) => {
      // action.payload will be whatever I passed as dispatch
      state.value = action.payload;
    },
    deletePotentialCountries: (state) => {
      state.value = null;
    },
  },
});

// The createSlice method of “@reduxjs/toolkit” will take whatever reducers you add to the “reducers” property of its argument and turn them into an “actions”. You can then use these actions anywhere in your application to manipulate global state.
export const { setPotentialCountries, deletePotentialCountries } =
  potentialCountriesSlice.actions;

// This function defines how to read the state of potentialCountries. You will use this function elsewhere in your react app to read from state.
export const selectPotentials = (state) => {
  return state.potentialCountries.value;
};

// The reducer from potentialCountriesSlice is created by the “createSlice” method from “@reduxjs/toolkit”. In the next step, you are going to supply this master reducer to your redux store.
export default potentialCountriesSlice.reducer;
