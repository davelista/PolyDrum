import React, {useContext, useEffect, useState} from 'react';
import {AppContext} from "../context/AppContext";
import useSteps from "./useSteps";

const useIndices = () => {
    const appData = useContext(AppContext);
    const [indices, setIndices] = useState([]);

    useEffect(() => {
        if(appData.userRhythms.data !== undefined){
            updateIndices()
        }
    }, [appData.userRhythms.data])

    const findNumIndices = () => {
        let numerator = 1;
        let denominator = 1;
        for(let i = 0; i < appData.userRhythms.data.length; i++){
            numerator = appData.math.lcm(numerator, appData.userRhythms.data[i].numStepButtons);
            denominator = appData.math.lcm(denominator, appData.userRhythms.data[i].denominator);
        }
        return numerator;
    }

    const updateIndices = () => {

        let array = [];
        let numerator = findNumIndices();

        if(numerator !== 1){
            for (let i = 1; i <= numerator; i++){
                array.push(i);
            }
        }
        setIndices(array);
    }
    return [indices, setIndices]


}

export default useIndices;