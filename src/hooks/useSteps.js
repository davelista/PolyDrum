import React, {useContext, useEffect, useState} from 'react';
import {AppContext} from "../context/AppContext";

const useSteps = (item, length) => {
    const appData = useContext(AppContext);
    const [steps, setSteps] = useState([])

    const noteDict = ["A1", "A#1", "B1", "C1", "C#1", "D1", "D#1", "E1"]
    useEffect(() => {
        /*if(item !== undefined && item.instruments !== undefined) {
            updateSteps();
        }*/
        updateSteps()
    }, [item, length]);

    const updateSteps = () => { /* crea steps per poter settare singolarmente tutti i volumi*/
        let temp = [];
        item.instruments.map((x, i) =>{
            let column = []
            for (let j = 0; j < length; j++){
                if(x.pad[j]){
                    column.push(noteDict[i]);
                } else {
                    column.push([]);
                }
            }
            temp.push(column)
        })
        console.log("\n\nTEMP DI MERDA È: ",temp)
        setSteps(temp);
    }

    return [steps, setSteps];
}

export default useSteps;