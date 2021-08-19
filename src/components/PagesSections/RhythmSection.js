import React from 'react';
import styles from "./RhythmSection.module.css";
import {CheckBox, Drumpad} from "../index";

const RhythmSection = (props) => {
    const {tempo, volume, play, stepButtons, samplesList} = props;
    return (
        <>
            <div className={styles.container}>
                <div className={styles.display}>
                    <CheckBox label={"Display"}/>
                </div>

            {/*FOURTH SECTION --> DRUMPAD */}
            <div className={styles.drumpad}>
                <CheckBox label={"Drumpad"}/>
                <Drumpad tempo={tempo} volume={volume} play={play} numberStepButton={stepButtons.numStepButtons} samplesList={samplesList}/>
            </div>

        </div>

        </>
    );
}

export default RhythmSection;