import React from "react";
import { useSelector } from "react-redux";
import { selectPotentials } from "../redux/slices/potentialCountries";
import { useDispatch } from "react-redux";
import { setDisplayCountry } from "../redux/slices/displayCountrySlice";

const OptionDisplay = () => {

    let currentPotentials = useSelector(selectPotentials);
    console.log(currentPotentials);

    const dispatch = useDispatch();

    return <div className="stack">
        {currentPotentials.map((country,index) => {
        return (
            <h2 
                key={country.name.official} 
                className="country-option"
                onClick={() => {dispatch(setDisplayCountry(currentPotentials[index]));
                }}
                >{country.name.common}
            </h2>
        );
    })}</div>;
};

export default OptionDisplay;
