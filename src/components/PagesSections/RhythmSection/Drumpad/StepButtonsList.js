import React, {useContext, useEffect} from 'react';
import {StepButton} from "../../../index";
import {AppContext} from "../../../../context/AppContext";
import produce from "immer";


const updatePad = (userRhythms, idRhythm, idInstrument, itemInstrument, instrument, pad, stepButtons, array) => {

    itemInstrument.pad = pad; /* popola l'oggetto JSON */

    for (let i = 0; i < stepButtons.value; i++) { /* Crea 2 array di stepButtons, il primo da disegnare, il secondo da mettere nel JSON */
        pad.push(false);
    }
    if(userRhythms.data[idRhythm] !== undefined){
        if(userRhythms.data[idRhythm].instruments.length - 1 < idInstrument){ /* se non sono stati inseriti tutti gli strumenti */
            userRhythms.data[idRhythm].instruments.push(itemInstrument) /* Aggiunge l'elemento all'array */
        } else { /* ALTRIMENTI */
            userRhythms.data[idRhythm].instruments.map((x, i) => { /* Sostituisce il numero di stepButton all'interno di pad se l'utente cambia il ritmo */
                if(x.name === instrument && x.pad.length !== pad.length) {
                    /*produce(appData.userRhythms.data, draft => { /!*Cambia il pad all'interno del JSON*!/
                        draft[idRhythm].instruments[i].pad = pad;
                    })*/
                    x.pad = pad;
                }
            })
        }
        for (let i = 0; i < stepButtons.value; i++) {
            array.push(<StepButton id={i} instrument={instrument} idInstrument={idInstrument} idRhythm={idRhythm} userRhythms={userRhythms}  active={userRhythms.data[idRhythm].instruments[idInstrument].pad[i]}/>);
        }
    }
}

const StepButtonsList = (props) => {
    const {idInstrument, instrument, idRhythm} = props;
    const appData = useContext(AppContext)

    let array = [];
    let pad = [];
    let itemInstrument = {
        name: instrument,
        pad: []
    };

    useEffect(() => {
        if(appData.userRhythms[idRhythm] !== undefined){
            updatePad(appData.userRhythms, idRhythm, idInstrument, itemInstrument, instrument, pad, appData.stepButtons, array)
        }
    }, [appData.userRhythms, appData.stepButtons])

    {updatePad(appData.userRhythms, idRhythm, idInstrument, itemInstrument, instrument, pad, appData.stepButtons, array)}

    return array;

}

export default StepButtonsList;