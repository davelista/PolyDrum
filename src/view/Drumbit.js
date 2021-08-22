import React, {useContext} from 'react';
import styles from "./Drumbit.module.css";
import {
    SettingsSection, RhythmSection
} from "../components";

function Drumbit(props) {
    return (
        <div className={styles.container}>
            <SettingsSection />
            <RhythmSection/>
        </div>

    );
}

export default Drumbit;