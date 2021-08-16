import './App.css';
import {Drumbit} from "./view";
import { AppContext, useAppContext } from "./context/AppContext";

function App() {
    const appData = useAppContext();
  return (
    <>
        <AppContext.Provider value={appData}>
            <Drumbit/>
        </AppContext.Provider>
    </>
  );
}

export default App;
