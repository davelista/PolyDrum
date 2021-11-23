import React, {useContext} from 'react';
import {StepButton} from "../../../index";
import {AppContext} from "../../../../context/AppContext";

const StepButtonsList = (props) => {
    const {idInstrument, instrument, idRhythm} = props;
    const appData = useContext(AppContext)

    let array = [];

    if(appData.selectedRhythm.item.instruments !== undefined){
        for (let i = 0; i < appData.selectedRhythm.item.numStepButtons ; i++) {
            array.push(<StepButton id={i}
                                   instrument={instrument}
                                   idInstrument={idInstrument}
                                   idRhythm={idRhythm}
                                   userRhythms={appData.userRhythms}
                                   active={appData.selectedRhythm.item.instruments[idInstrument].pad[i]}
            />);
        }
    }


    return array;

}

export default StepButtonsList;