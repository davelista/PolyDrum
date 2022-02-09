import React, {useContext} from 'react';
import styles from "./Display.module.css";
import {AppContext} from "../../../../context/AppContext";
import FinalInstrumentsRhythm from "./FinalInstrumentsRhythm";
import useMediaQuery, {Device} from "../../../../hooks/useMediaQuery";

const Display = (props) => {
    const appData = useContext(AppContext)
    const isPc = useMediaQuery(Device.xl)

    return (
        <>
            <div className={styles.display} style={appData.selectedRhythm.number == null ? {height: "75%"} : (!isPc ? { height: "40%"} : {height: "auto"}) }>
                <div className={styles.container}>
                       <FinalInstrumentsRhythm/>
                </div>
            </div>

        </>
    );
}

export default Display;