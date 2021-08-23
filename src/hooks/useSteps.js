import React, {useContext, useEffect, useState} from 'react';
import {AppContext} from "../context/AppContext";

const useSteps = (item) => {
    const appData = useContext(AppContext);
    const [steps, setSteps] = useState([])

    useEffect(() => {
        console.log("ITEM È: ", item)
        if(item !== undefined && item.instruments !== undefined) {

            createSteps()
        }
    }, [item]);

    const createSteps = () => {
        let temp = [];
        for (let i = 0; i < item.instruments[0].pad.length; i++){
            if(item.instruments[0].pad[i]){
                temp.push('C3');
                console.log("HO PUSHATO KEKKO!")
            }
        }
        console.log("----TEMP È: ", temp)
        setSteps(temp);
    }
    return [steps, setSteps];
}

export default useSteps;