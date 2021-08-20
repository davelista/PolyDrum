import React, {useContext} from 'react';
import styles from "./Drumbit.module.css";
import {
    SampleLine,
    SettingsSection, RhythmSection
} from "../components";

function Drumbit(props) {

    return (
/*GENERAL CONTAINER*/
        <div className={styles.container}>

            {/*FIRST SECTION --> AUX AND BUTTONS*/}
            <SettingsSection />
            {/*THIRD SECTION ON THE RIGHT */}
            <RhythmSection />

            <SampleLine/>

        </div>
    );
}

export default Drumbit;