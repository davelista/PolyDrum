import React, {useContext} from 'react';
import styles from "./RhythmSection.module.css";
import {CheckBox, Drumpad} from "../../index";

const RhythmSection = (props) => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.display}>
                    <CheckBox label={"Display"}/>
                </div>

                <div className={styles.drumpad}>
                    <Drumpad />
                </div>
            </div>
        </>
    );
}

export default RhythmSection;