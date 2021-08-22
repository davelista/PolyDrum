import React from 'react';
import styles from "./RhythmSection.module.css";
import {CheckBox, Drumpad} from "../../index";

const RhythmSection = (props) => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.display}>
                    <CheckBox label={"Display"}/>
                </div>

            {/*FOURTH SECTION --> DRUMPAD */}
            <div className={styles.drumpad}>
                <CheckBox label={"Drumpad"}/>
                <Drumpad />
            </div>

        </div>

        </>
    );
}

export default RhythmSection;