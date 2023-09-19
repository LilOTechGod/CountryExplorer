// creates store and gives us the ability to make many reducers, bring them all together and use
import {configureStore} from '@reduxjs/toolkit';
import potentialCountriesReducer from './slices/potentialCountries';
// I simply changed the name to match what im importing because the default exports displaycountryslice.reducers.
import displayCountryReducers from './slices/displayCountrySlice';

console.log(potentialCountriesReducer);
export default configureStore({
    reducer: {
        potentialCountries: potentialCountriesReducer,
        displayedCountry: displayCountryReducers
    }
});