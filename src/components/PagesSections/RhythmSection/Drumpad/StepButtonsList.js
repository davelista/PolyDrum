import React, {useContext} from 'react';
import {StepButton} from "../../../index";
import {AppContext} from "../../../../context/AppContext";


const StepButtonsList = (props) => {
    const {idInstrument, instrument, idRhythm} = props;
    const appData = useContext(AppContext)

    let array = [];
    let pad = [];
    let itemInstrument = {
        name: instrument,
        pad: []
    };
    for (let i = 0; i < appData.stepButtons.value; i++) { /* Crea 2 array di stepButtons, il primo da disegnare, il secondo da mettere nel JSON */
        pad.push(false);
    }
    itemInstrument.pad = pad; /* popola l'oggetto JSON */
    if(appData.userRhythms.data[idRhythm].instruments.length - 1 < idInstrument){ /* se non sono stati inseriti tutti gli strumenti */

        appData.userRhythms.data[idRhythm].instruments.push(itemInstrument) /* Aggiunge l'elemento all'array */
    } else { /* ALTRIMENTI */
        appData.userRhythms.data[idRhythm].instruments.map((x, i) => { /* Sostituisce il numero di stepButton all'interno di pad se l'utente cambia il ritmo */
            if(x.name === instrument && x.pad.length !== pad.length) {
                x.pad = pad;
            }
        })
    }

    for (let i = 0; i < appData.stepButtons.value; i++) {
        array.push(<StepButton id={i} instrument={instrument} idInstrument={idInstrument} idRhythm={idRhythm} userRhythms={appData.userRhythms}  active={appData.userRhythms.data[idRhythm].instruments[idInstrument].pad[i]}/>);
    }
    return array;

}

export default StepButtonsList;