import "./App.css";
import Header from "./Components/Header";
import MainDisplay from "./Components/MainDisplay";
import OptionDisplay from "./Components/OptionDisplay";
import { selectPotentials } from "./redux/slices/potentialCountries";
import { useSelector } from "react-redux";


function App() {

    // use the useSelector hook to read from the store
    const potentials = useSelector(selectPotentials);
    console.log(potentials);

    // use the useDispatch hook to write to the store;

    return (
        <div className="App font-link">
            <Header />
            <OptionDisplay />
        </div>
    );
}

export default App;
