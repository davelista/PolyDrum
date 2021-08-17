import React from 'react';
import styles from "./Drumbit.module.css";
import {CheckBox, ControlSlider, Dropdown, NumberControl, SampleLine, StepButton} from "../components";

function Drumbit(props) {
    return (
        <div className={styles.container}>
            <CheckBox label={"Pippo"}/>

            <Dropdown/>
            <SampleLine/>
            <ControlSlider/>
            <StepButton/>
            <NumberControl/>
        </div>
    );
}

export default Drumbit;