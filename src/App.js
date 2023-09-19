import "./App.css";
import Header from "./Components/Header";
import MainDisplay from "./Components/MainDisplay";
import OptionDisplay from "./Components/OptionDisplay";
import { selectPotentials } from "./redux/slices/potentialCountries";
import { useSelector } from "react-redux";
import {selectDisplay} from './redux/slices/displayCountrySlice';


function App() {

    // use the useSelector hook to read from the store
    let potentials = useSelector(selectPotentials);
    console.log(potentials);

    // use the useDispatch hook to write to the store;
    
    const currentDisplay = useSelector(selectDisplay);
    console.log('display', currentDisplay);

    return (
        <div className="App font-link">
            <Header />
            {currentDisplay ? <MainDisplay /> : <OptionDisplay />}
        </div>
    );
}

export default App;
