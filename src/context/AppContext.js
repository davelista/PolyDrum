import React, { useMemo, useState } from "react";
import rhythmsList from '../rhythmsList.json'
import samplesList from '../samplesList.json'

export const AppContext = React.createContext({});

export function useAppContext() {
    const [bpm, setBpm] = useState(80);
    const [isPlay, setPlay] = useState(false);
    const [value, setValue] = useState(50);
    const [mute, setMute] = useState(false);
    const [oldValue, setOldValue] = useState(0)
    const [rhythmValue, setRhythm] = useState(null);
    const [numStepButtons, setNumStepButton] = useState(null);
    const [array, setArray] = useState([]); /*Salva le informazioni di un ritmo*/

    return useMemo(
        () => ({
            rhythmsList,
            samplesList,
            play:{
              isPlay,
              setPlay
            },
            stepButtons:{
                numStepButtons,
                setNumStepButton
            },
            userRhythms: {
                array,
                setArray
            },
            rhythm: {
                rhythmValue,
                setRhythm
            },
            tempo: {
                bpm,
                setBpm
            },
            volume: {
                value,
                setValue,
                mute,
                setMute,
                oldValue,
            }
        }),
        [bpm, setBpm, isPlay, setPlay, value, setValue, mute, setMute,
            oldValue, rhythmValue, setRhythm, numStepButtons, setNumStepButton,
            array, setArray]
    );
}