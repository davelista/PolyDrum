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

        {console.log("play è: ", appData.play.value)}
        {console.log("ho cambiato la VELOCITA' in: ", appData.tempo.value)}
        {console.log("ho cambiato il VOLUME in: ", appData.volume.value)}
        {console.log("ho cambiato il TEMPO in: ", appData.timeSignature.value)}
    </>
  );
}

export default App;
