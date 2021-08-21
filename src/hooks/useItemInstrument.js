/*
import React, {useContext, useEffect, useState} from 'react';
import {AppContext} from "../context/AppContext";

const UseItemInstrument = (idRhythm ) => {
    const appData = useContext(AppContext);
    let pad = [];
    const [itemInstrument, setItemInstrument] = useState( {
        name: "",
        pad: []
    });
    useEffect(() => {
            setItem();
    }, [appData.stepButtons.value, appData.userRhythms.data[idRhythm]]);

    const setItem = () => {
        if(appData.userRhythms.data[idRhythm] !== undefined && appData.stepButtons !== undefined){
            appData.samplesList.map((instrument, idInstrument) => { /!*Per ogni strumento*!/
                for(let i = 0; i < appData.stepButtons.value; i++){
                    pad.push(false);
                }
                itemInstrument.name = instrument.name
                itemInstrument.pad = pad; /!* popola l'oggetto JSON *!/
                if(appData.userRhythms.data[idRhythm].instruments.length - 1 < idInstrument){ /!* se non sono stati inseriti tutti gli strumenti *!/
                    appData.userRhythms.data[idRhythm].instruments.push(itemInstrument) /!* Aggiunge l'elemento all'array *!/
                } else { /!* ALTRIMENTI *!/
                    appData.userRhythms.data[idRhythm].instruments.map((x, i) => { /!* Sostituisce il numero di stepButton all'interno di pad se l'utente cambia il ritmo *!/
                        if(x.name === instrument.name && x.pad.length !== pad.length) {
                            x.pad = pad;
                        }
                    })
                }
            })
        }

    }

    return [itemInstrument, setItemInstrument];


}

export default UseItemInstrument;*/
