import React, { useMemo, useState } from "react";
import rhythmsList from '../rhythmsList.json'
import samplesList from '../samplesList.json'

export const AppContext = React.createContext({});

export function useAppContext() {
    const [bpm, setBpm] = useState(80);
    const [isPlay, setPlay] = useState(false);
    const [value, setValue] = useState(50);
    const [rhythmValue, setRhythm] = useState(null);
    const [numStepButtons, setNumStepButton] = useState(null);
    const [item, addItem] = useState({}); /*Salva le informazioni di un ritmo*/

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
            dbRhythms: {
                item,
                addItem
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
                setValue
            }
        }),
        [bpm, setBpm, isPlay, setPlay, value, setValue, rhythmValue, setRhythm, numStepButtons, setNumStepButton, item, addItem]
    );
}