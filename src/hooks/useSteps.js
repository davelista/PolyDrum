import React, {useContext, useEffect, useState} from 'react';
import {AppContext} from "../context/AppContext";

const useSteps = (item, length) => {
    const appData = useContext(AppContext);
    const [steps, setSteps] = useState([])

    const noteDict = ["A1", "A#1", "B1", "C1", "C#1", "D1", "D#1", "E1"]
    useEffect(() => {
        if(item !== undefined && item.instruments !== undefined) {
            updateSteps();
        }
    }, [item]);

    const updateSteps = () => {
        let temp = [];
        for (let j = 0; j < length; j++){
            let column = []
            item.instruments.map((x, i) =>{
                if(x.pad[j]){
                    column.push(noteDict[i]);
                }
            })
            temp.push(column)
        }



        console.log("\n\nTEMP DI MERDA È: ",temp)
        setSteps(temp);
    }
    return [steps, setSteps];
}

export default useSteps;