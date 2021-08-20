import React, {useContext} from 'react';
import {StepButton} from "../index";
import {AppContext} from "../../context/AppContext";


const StepButtonsList = (props) => {
    const {instrument, idRhythm} = props;
    const appData = useContext(AppContext)

    let array = [];
    for (let i = 0; i < appData.stepButtons.value; i++) {
        array.push(<StepButton id={i} instrument={instrument} rhythm={idRhythm} />);
    }
    return array;

}

export default StepButtonsList;