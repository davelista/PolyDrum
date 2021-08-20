import React, {useContext} from 'react';
import styles from "./Drumbit.module.css";
import {
    SampleLine,
    SettingsSection, RhythmSection
} from "../components";
import {AppContext} from "../context/AppContext";

function Drumbit(props) {
    const appData = useContext(AppContext);
    return (
/*GENERAL CONTAINER*/
        <div className={styles.container}>

            {/*FIRST SECTION --> AUX AND BUTTONS*/}
            <SettingsSection volume={appData.volume} tempo={appData.tempo} play={appData.play} samplesList={appData.samplesList}/>
            {/*THIRD SECTION ON THE RIGHT */}
            <RhythmSection />

            <SampleLine/>

        </div>
    );
}

export default Drumbit;