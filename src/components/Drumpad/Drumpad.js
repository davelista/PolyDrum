import React, {useContext, useEffect, useState} from 'react';
import styles from './Drumpad.module.css';
import { Song, Track, Instrument } from 'reactronica';
import {Button, StepButton} from "../index";
import {AppContext} from "../../context/AppContext";

const generatePad = (length, idRhythm, instrument) => {
    let array = [];
    for (let i = 0; i < length; i++) {
        array.push(<StepButton id={i} instrument={instrument} rhythm={idRhythm} />);
    }
    return array;
}

const Drumpad = (props) => {
    const appData = useContext(AppContext);
    const [numRhythm, setNumRhythm] = useState([0]);
    const [selectedRhythm, setSelectedRhythm] = useState(0);

    return(
        <>
            <div className={styles.container}>
                {/*<Song bpm={appData.tempo.bpm} isPlaying={appData.play.isPlay} volume={appData.volume.value}>

                </Song>*/}
                <div className={styles.rhythmButtons}>
                    {numRhythm.map((x) => {
                        return <Button onClick={() => setSelectedRhythm(x)}>{x}</Button>
                    })}
                    <Button onClick={() => setNumRhythm(numRhythm.concat(numRhythm.length))}> + </Button>
                </div>

                {appData.stepButtons.numStepButtons !== null ? appData.samplesList.map((x) => {
                    return <>
                        <div className={styles.line}>
                            <div className={styles.title}>
                                {x.name}
                            </div>
                            <div className={styles.stepButton}>
                                {generatePad(appData.stepButtons.numStepButtons, selectedRhythm, x.name)}

                            </div>

                        </div>
                    </>
                }) : null}

            </div>

        </>
    );
}

export default Drumpad;