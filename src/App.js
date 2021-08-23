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

        {console.log("-----------\nplay è: ", appData.play.value)}
        {console.log("ho cambiato la VELOCITA' in: ", appData.tempo.value)}
        {console.log("ho cambiato il VOLUME in: ", appData.volume.value, "\n-------------\n")}

        {console.log("Il ritmo selezionato è :", appData.selectedRhythm.number)}
        {console.log("il JSON del ritmo è: ", appData.selectedRhythm.item)}
        {console.log("I RITMI DELL'UTENTE SONO: ", appData.userRhythms.data)}
    </>
  );
}

export default App;
