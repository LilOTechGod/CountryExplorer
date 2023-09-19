// The role of MainDisplay is to render only one of its children components based on the local state that has already been set up for you. In this step, we will create two of its three children components (Weather.js has already been created for you).

import React, { useState } from "react";
import Overview from "./Overview";
import Weather from "./Weather";
import Symbols from "./Symbols";

const MainDisplay = () => {
    const [view, setView] = useState("Overview");
    return (
        <div className="stack">
            <div className="tab-select">
                <button onClick={() => setView("Overview")}>Overview</button>
                <button onClick={() => setView("Weather")}>
                    Current Weather at Capitol
                </button>
                <button onClick={() => setView("Symbols")}>Symbols</button>
            </div>
            {view === "Overview" && <Overview />}
            {view === "Weather" && <Weather />}
            {view === "Symbols" && <Symbols />}
        </div>
    );
};

export default MainDisplay;
