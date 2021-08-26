import React, {useContext} from 'react';
import styles from "./RhythmSection.module.css";
import {CheckBox, Drumpad} from "../../index";
import {AppContext} from "../../../context/AppContext";

const RhythmSection = (props) => {
    const appData = useContext(AppContext);
    return (
        <>
            <div className={styles.container}>
                <div className={styles.display} style={appData.selectedRhythm.number === null ? { height: "50rem"} : { height: "20rem"}}>
                    <CheckBox label={"Display"}/>
                </div>

                {appData.selectedRhythm.number !== null ? <div className={styles.drumpad}>
                    <Drumpad />
                </div> : null}

            </div>
        </>
    );
}

export default RhythmSection;