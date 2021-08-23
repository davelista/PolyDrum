import React, {useContext, useEffect, useState} from 'react';
import {AppContext} from "../context/AppContext";

const useSelectedRhythm = (idRhythm, db, setDb) => {
    const appData = useContext(AppContext);
    const [selectedRhythm, setSelectedRhythm] = useState({})

    useEffect(() => {
        if(db[idRhythm] === undefined){
            initRhythmObj();
        } else {
            setRhythmObj();
        }
    }, [idRhythm, db]);

    const initRhythmObj = () => { /*Crea un oggetto vuoto e lo inserisce*/
        let temp = [...db];
        let item = {
            timeSignature : "",
            numStepButtons: 0,
            instruments: []
        }
        temp[idRhythm] = item;
        setDb(temp);
        setSelectedRhythm(db[idRhythm])
    }

    const setRhythmObj = () => { /*seleziona l'oggetto nell'array di JSON*/
        setSelectedRhythm(db[idRhythm])
    }

    return [selectedRhythm, setSelectedRhythm];


}

export default useSelectedRhythm;