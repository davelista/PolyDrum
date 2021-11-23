import React from 'react';
import styles from "./Drumbit.module.css";
import {
    SettingsSection, RhythmSection
} from "../components";

function Drumbit() {

    return (
        <div className={styles.container}>
            <SettingsSection />
            <RhythmSection/>
        </div>

    );
}

export default Drumbit;