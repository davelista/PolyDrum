import React, {useMemo, useState} from "react";
import timeSignaturesList from '../timeSignaturesList.json';
import samplesList from '../samplesList.json';
import noteDict from '../noteDict.json';
import popupsList from '../popupsList.json';
import effectList from '../effectList.json';
import wetList from '../wetList.json';
import patternList from '../patternList.json'
import patternsPreset from '../patternsPreset.json'
import {useSelectedRhythm} from "../hooks";
import produce from "immer";

export const AppContext = React.createContext({});

export function useAppContext() {
    /*Settings*/
    const [bpm, setBpm] = useState(90);

    const [isPlay, setPlay] = useState(false);
    const [volume, setVolume] = useState(50);
    const [mute, setMute] = useState(false);
    const [idRhythm, setIdRhythm] = useState(0);
    const [timeSignature, setTimeSignature] = useState('');
    const [numRhythm, setNumRhythm] = useState([0]);
    const [numStepButtons, setNumStepButton] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [load, setLoad] = useState(false);
    const [effect, setEffect] = useState(null);


    /*JSON*/
    const [db, setDb] = useState([{
        timeSignature : "",
        numStepButtons: 0,
        effect: "",
        wet: 0.0,
        instruments: []
    }]);/*Salva le informazioni di un ritmo*/

    const [itemSelectedRhythm, setItemSelectedRhythm] = useSelectedRhythm(idRhythm, db, setDb);

    const lcm = (a, b) => {
        // looping from 1 to number1 and number2 to find HCF
        let hcf;
        for (let i = 1; i <= a && i <= b; i++) {
            // check if is factor of both integers
            if( a % i === 0 && b % i === 0) {
                hcf = i;
            }
        }
        // find LCM
        return (a * b) / hcf
    }

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

    const updateUserRhythms = (newNumStepButton, newTimeSignature, newDenominator) => {

        setNumStepButton(newNumStepButton);
        setTimeSignature(newTimeSignature);

            setDb(produce(db, draft => {
                draft[idRhythm].timeSignature = newTimeSignature;
                draft[idRhythm].numStepButtons = newNumStepButton;
                draft[idRhythm].denominator = newDenominator;
                updatePad(draft, idRhythm);
            }))
        }

    const updateEffect = (newEffect) => {

        setEffect(newEffect);

        setDb(produce(db, draft => {
            draft[idRhythm].effect = newEffect;

        }))
    }

    const updateWet = (newWet) => {

        setDb(produce(db, draft => {
            draft[idRhythm].wet = newWet;

        }))
    }

    const insertPattern = (pattern, i) => {
        if (db[idRhythm] !== undefined){
            setDb(produce(db, draft => {
                draft[idRhythm] = patternsPreset[i].rhythm;

            }))
            console.log(patternList[i])
        }
    }




    return useMemo(
        () => ({

            popupsList,
            timeSignaturesList,
            samplesList,
            noteDict,
            effectList,
            wetList,
            patternList,
            patternsPreset,

            math:{
                lcm: lcm,
            },
            play:{
                value: isPlay,
                setValue: setPlay,
                index: currentIndex,
                setIndex: setCurrentIndex,
                load: load,
                setLoad: setLoad
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
                update: updateUserRhythms,
                updateEffect: updateEffect,
                updateWet: updateWet,
                insertPattern: insertPattern

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
            },


            effect: {
                value: effect,
                setEffect: setEffect
            }
        }),
        [bpm, setBpm, isPlay, volume, mute, timeSignature,
            numStepButtons, numRhythm, idRhythm, itemSelectedRhythm, currentIndex,
            load, effect]
    );
}