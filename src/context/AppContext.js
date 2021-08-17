import React, { useMemo, useState } from "react";

export const AppContext = React.createContext({});

export function useAppContext() {
    const [bpm, setBpm] = useState(80);
    const [isPlay, setPlay] = useState(false);
    const [value, setValue] = useState(50);

    return useMemo(
        () => ({
            play:{
              isPlay,
              setPlay
            },
            rhythm: {

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
        [bpm, setBpm, isPlay, setPlay, value, setValue]
    );
}