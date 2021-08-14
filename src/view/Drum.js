import React from 'react';
import {CheckBox, ControlSlider, Dropdown, NumberControl, SampleLine, StepButton} from "../components";
import styles from './Drum.module.css'

const Drum = (props) => {
    return (
        <>
            <div className={styles.container}>
                <CheckBox label={"Ciao"}/>
                <Dropdown/>
                <SampleLine/>
                <ControlSlider/>
                <StepButton/>
                <NumberControl/>
            </div>
        </>
    );
}

export default Drum;