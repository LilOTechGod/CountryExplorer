import axios from "axios";
import React, { useState } from "react";
import { BsFillFlagFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setPotentialCountries } from "../redux/slices/potentialCountries";
import { deletePotentialCountries } from "../redux/slices/potentialCountries";
import { selectDisplay, deleteDisplayCountry } from "../redux/slices/displayCountrySlice";


const Header = () => {

    const [input, setInput] = useState();
    
    const dispatch = useDispatch();
    const currentDisplay = useSelector(selectDisplay)

    return (
        <div className="header">
            <div className="home">
                <BsFillFlagFill
                    style={{ marginRight: "10px" }}
                    fontSize="1.6em"
                />
                <h3 className="home-country">
                    {/* This statement is checking to see if there is anything currently set on the displayCountry state, and if there is, it will display the common name of that country */}
                    {currentDisplay && currentDisplay.name.common}
                </h3>
            </div>
            <div className="country-input">
                <input
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                />
                <button
                    onClick={() => {
                        axios
                            .get(`https://restcountries.com/v3.1/name/${input}`)
                            .then((res) => {
                                console.log(res.data);
                                dispatch(deleteDisplayCountry());
                                // a function that allows you to send info to the store(dispatch)
                                dispatch(deletePotentialCountries());
                                // becomes the action.payload
                                dispatch(setPotentialCountries(res.data));
                            })
                            .catch((err) => {
                                alert(
                                    "No countries found that match your search!"
                                );
                            });
                    }}
                >
                    search
                </button>
            </div>
        </div>
    );
};

export default Header;
