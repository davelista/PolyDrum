import React, {useContext} from 'react';
import styles from "./RhythmSection.module.css";
import {CheckBox, Drumpad, Display} from "../../index";
import {AppContext} from "../../../context/AppContext";

const RhythmSection = (props) => {
    const appData = useContext(AppContext);
    return (
        <>
            <div className={styles.container} style={appData.selectedRhythm.number == null ? {justifyContent: "center"} : {justifyContent: "space-between"}}>
                    <Display/>

                <div className={styles.drumpad} style={appData.selectedRhythm.number == null ? {display: "none"} : {display: ""}}> {/*Se ha selezionato tutto mostra solo display*/}
                    <Drumpad />
                </div>

            </div>
        </>
    );
}

export default RhythmSection;