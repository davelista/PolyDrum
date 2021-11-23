import {useEffect, useState} from 'react';

const useSelectedRhythm = (idRhythm, db, setDb) => {
    const [selectedRhythm, setSelectedRhythm] = useState({})

    useEffect(() => {
        if(db[idRhythm] === undefined && idRhythm !== null){
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
        if(idRhythm !== null) {
            setSelectedRhythm(db[idRhythm])
        } else {
            setSelectedRhythm(db);

        }
    }
    return [selectedRhythm, setSelectedRhythm];
}

export default useSelectedRhythm;