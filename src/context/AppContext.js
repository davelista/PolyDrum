import React, { useMemo, useState } from "react";
import timeSignaturesList from '../timeSignaturesList.json'
import samplesList from '../samplesList.json'
import {useSelectedRhythm} from "../hooks";

export const AppContext = React.createContext({});

export function useAppContext() {
    /*Settings*/
    const [bpm, setBpm] = useState(80);
    const [isPlay, setPlay] = useState(false);
    const [volume, setVolume] = useState(50);
    const [mute, setMute] = useState(false);
    const [idRhythm, setIdRhythm] = useState(0);
    const [timeSignature, setTimeSignature] = useState('');
    const [numRhythm, setNumRhythm] = useState([0]);
    const [numStepButtons, setNumStepButton] = useState(null);
    /*JSON*/
    const [array, setArray] = useState([]); /*Salva le informazioni di un ritmo*/
    const [itemSelectedRhythm, setItemSelectedRhythm] = useSelectedRhythm(idRhythm, array);

    return useMemo(
        () => ({
            timeSignaturesList,
            samplesList,
            play:{
              value: isPlay,
              setValue: setPlay
            },
            stepButtons:{
                value: numStepButtons,
                setValue: setNumStepButton
            },
            selectedRhythm: { /*Ritmo selezionato dall'utente*/
                number: idRhythm, /*id del ritmo scelto dall'utente*/
                setNumber: setIdRhythm, /*set id del ritmo scelto dall'utente*/
                item: itemSelectedRhythm, /*oggetto json del ritmo scelto dall'utente*/
                setItem:  setItemSelectedRhythm /*set oggetto json del ritmo scelto dall'utente*/
            },
            rhythmsList: { /*LIsta di ritmi per i bottoni*/
                item: numRhythm,
                setItem: setNumRhythm
            },
            userRhythms: { /*Array di JSON con tutti i ritmi dell'utente*/
                data: array,
                setData: setArray
            },
            timeSignature: { /*tempo della battuta */
                value: timeSignature,
                setValue: setTimeSignature
            },
            tempo: {
                value: bpm,
                setValue: setBpm
            },
            volume: {
                value: volume,
                setValue: setVolume,
            },
            mute: {
                value: mute,
                setValue: setMute
            }
        }),
        [bpm, setBpm, isPlay, setPlay, volume, setVolume, mute, setMute,
            timeSignature, setTimeSignature, numStepButtons, setNumStepButton,
            array, setArray, numRhythm, setNumRhythm, idRhythm, setIdRhythm, itemSelectedRhythm, setItemSelectedRhythm]
    );
}