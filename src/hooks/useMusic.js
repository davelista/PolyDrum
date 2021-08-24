import React, {useContext, useEffect, useState} from 'react';
import {AppContext} from "../context/AppContext";

const useMusic = (grid) => {
    const [music, setMusic] = useState([])

    useEffect(() => {
        if(grid !== undefined) {
            updateMusic();
        }
    }, [grid]);

    const updateMusic = () => {
        let temp = [];
        grid.map((column) => {
            let columnNotes = [];
            column.map(
                (shouldPlay) =>
                    //If isActive, push the given note, with our chosen octave
                    shouldPlay.isActive &&
                    columnNotes.push(shouldPlay.note + 4)
            );
            temp.push(columnNotes);
        });
        setMusic(temp);
    }
    return [music, setMusic];
}

export default useMusic;


