import React, {useContext} from 'react';
import styles from "./Display.module.css";
import {AppContext} from "../../../../context/AppContext";
import FinalInstrumentsRhythm from "./FinalInstrumentsRhythm";

const Display = (props) => {
    const appData = useContext(AppContext)

    return (
        <>
            <div className={styles.display} style={appData.selectedRhythm.number == null ? {height: "30rem"} : { height: "21rem"}}>
                <div className={styles.container}>
                       <FinalInstrumentsRhythm/>
                </div>
            </div>

        </>
    );
}

export default Display;