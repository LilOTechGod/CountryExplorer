// creates store and gives us the ability to make many reducers, bring them all together and use
import {configureStore} from '@reduxjs/toolkit';
import potentialCountriesReducer from './slices/potentialCountries';

console.log(potentialCountriesReducer);
export default configureStore({
    reducer: {
        potentialCountries: potentialCountriesReducer
    }
});