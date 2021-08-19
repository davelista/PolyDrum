import React, {useContext} from 'react';
import styles from "./Drumbit.module.css";
import {
    SampleLine,
    SettingsSection, RhythmSection
} from "../components";
import {AppContext} from "../context/AppContext";
import {FaPlay} from "react-icons/all";

function Drumbit(props) {
    const appData = useContext(AppContext);
    return (
/*GENERAL CONTAINER*/
        <div className={styles.container}>

            {/*FIRST SECTION --> AUX AND BUTTONS*/}
            <SettingsSection volume={appData.volume} tempo={appData.tempo} play={appData.play}/>
            {/*THIRD SECTION ON THE RIGHT */}
            <RhythmSection tempo={appData.tempo} volume={appData.volume} play={appData.play} stepButtons={appData.stepButtons} samplesList={appData.samplesList}/>

            <SampleLine/>

        </div>
    );
}

export default Drumbit;