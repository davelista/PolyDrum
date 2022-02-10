import React, {useState} from 'react';
import {Button} from "../../index";
import styles from "./SettingsSection.module.css"
import {GiMetronome} from "react-icons/all";

function CalculateBpm(props) {
    const {tempo} = props;
    const [count, setCount] = useState(0);
    const [timeFirst, setTimeFirst] = useState(0);
    const [timePrevious, setTimePrevious] = useState(0);

    const handleMouseDown = () => {
        const timeSeconds = new Date();
        const time = timeSeconds.getTime();

        //if its been 3 seconds since last click reset the counter & previous time
        if (timePrevious !== 0 && time - timePrevious > 3000) {
            setCount(0);
            setTimePrevious(time)
            return false;
        }
        //if first click set the initial time and count
        if (count === 0) {
            setTimeFirst(time);
            setCount(count+1);

        } else {
            const bpm = Math.round((60000 * count) / (time - timeFirst));
            setCount(count+1)
            setTimePrevious(time)
            tempo.setValue(bpm)

        }
    };

    return (
        <>
            <div onKeyDown={handleMouseDown}>
                <Button onMouseDown={handleMouseDown}>
                    <div className={styles.text}>BPM by CLICK </div>
                    {/*<GiMetronome size={25}/> */}
                </Button>
            </div>
            </>
    );
}

export default CalculateBpm;