import React, { useMemo, useState } from "react";
import timeSignaturesList from '../timeSignaturesList.json'
import samplesList from '../samplesList.json'

export const AppContext = React.createContext({});

export function useAppContext() {
    const [bpm, setBpm] = useState(80);
    const [isPlay, setPlay] = useState(false);
    const [volume, setVolume] = useState(50);
    const [timeSignature, setTimeSignature] = useState(null);
    const [mute, setMute] = useState(false);
    const [numStepButtons, setNumStepButton] = useState(null);
    const [array, setArray] = useState([]); /*Salva le informazioni di un ritmo*/
    const [selectedRhythm, setSelectedRhythm] = useState(0);

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
            rhythm: {
                number: selectedRhythm,
                setNumber: setSelectedRhythm

            },
            userRhythms: {
                data: array,
                setData: setArray
            },
            timeSignature: {
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
            array, setArray]
    );
}