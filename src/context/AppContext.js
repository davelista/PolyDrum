import React, {useMemo, useRef, useState} from "react";
import timeSignaturesList from '../timeSignaturesList.json'
import samplesList from '../samplesList.json'
import noteDict from '../noteDict.json'
import {useSelectedRhythm} from "../hooks";
import produce from "immer";

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
    const [db, setDb] = useState([{
        timeSignature : "",
        numStepButtons: 0,
        instruments: []
    }]); /*Salva le informazioni di un ritmo*/
    const [itemSelectedRhythm, setItemSelectedRhythm] = useSelectedRhythm(idRhythm, db, setDb);


        const updatePad = (temp, idRhythm) => {

            samplesList.map((x) => {
                let pad = [];
                let itemInstrument = {
                    name: x.name,
                    pad: [],
                    volume: 50
                };
                if(temp[idRhythm].instruments.length === x.id){ /* se non sono stati inseriti tutti gli strumenti */
                    temp[idRhythm].instruments.push(itemInstrument) /* Aggiunge l'elemento all'array */
                } else { /* ALTRIMENTI */
                    temp[idRhythm].instruments.map((y, i) => { /* Sostituisce il numero di stepButton all'interno di pad se l'utente cambia il ritmo */
                        if(y.pad.length !== pad.length) {
                            y.pad = pad;
                        }
                    })
                }
            })
        }


        const updateUserRhythms = (newNumStepButton, newTimeSignature) => {

        setNumStepButton(newNumStepButton);
        setTimeSignature(newTimeSignature);

        setDb(produce(db, draft => {
            draft[idRhythm].timeSignature = newTimeSignature;
            draft[idRhythm].numStepButtons = newNumStepButton;
            updatePad(draft, idRhythm);
        }))
    }

    return useMemo(
        () => ({

            timeSignaturesList,
            samplesList,
            noteDict,
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
            rhythmsList: { /*Lista di ritmi per i bottoni*/
                item: numRhythm,
                setItem: setNumRhythm
            },
            userRhythms: { /*Array di JSON con tutti i ritmi dell'utente*/
                data: db,
                setData: setDb,
                update: updateUserRhythms
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
        [bpm, setBpm, isPlay, volume, mute, timeSignature,
            numStepButtons, numRhythm, idRhythm, itemSelectedRhythm,]
    );
}