import React, {useContext, useEffect, useState} from 'react';
import {AppContext} from "../context/AppContext";

const useSelectedRhythm = (idRhythm, userRhythms, setUserRhythms) => {
    const appData = useContext(AppContext);
    const [selectedRhythm, setSelectedRhythm] = useState({})

    useEffect(() => {
        if(userRhythms[idRhythm] === undefined){
            initRhythmObj();
        } else {
            setRhythmObj();
        }
    }, [idRhythm, userRhythms]);

    const initRhythmObj = () => { /*Crea un oggetto vuoto e lo inserisce*/
        let temp = [...userRhythms];
        let item = {
            timeSignature : "",
            numStepButtons: 0,
            instruments: []
        }
        temp[idRhythm] = item;
        setUserRhythms(temp);
        setSelectedRhythm(userRhythms[idRhythm])
    }

    const setRhythmObj = () => { /*seleziona l'oggetto nell'array di JSON*/
        setSelectedRhythm(userRhythms[idRhythm])
    }

    return [selectedRhythm, setSelectedRhythm];


}

export default useSelectedRhythm;