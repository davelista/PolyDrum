import React, {useContext, useEffect, useState} from 'react';
import {AppContext} from "../context/AppContext";

const useUserRhythms = (selectedRhythm, timeSignature) => {
    const appData = useContext(AppContext);
    const [userRhythms, setUserRhythms] = useState( []);

    useEffect(() => {
        setRhythms();
    }, [selectedRhythm, timeSignature]);

    const setRhythms = () => {
        if(timeSignature !== null){
            userRhythms.data[selectedRhythm] = {
                timeSignature: timeSignature,
                instruments: []
            };
            if (timeSignature !== appData.userRhythms.data[selectedRhythm].timeSignature) {
                userRhythms.data[selectedRhythm].timeSignature = timeSignature
            }
        }

    }

    return [userRhythms, setUserRhythms];


}

export default useUserRhythms;