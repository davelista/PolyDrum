import React, {useContext, useEffect, useState} from 'react';
import styles from './Drumpad.module.css';
import { Song, Track, Instrument } from 'reactronica';
import {Button, StepButton, StepButtonsList} from "../index";
import {AppContext} from "../../context/AppContext";



const Drumpad = (props) => {
    const appData = useContext(AppContext);
    const [numRhythm, setNumRhythm] = useState([0]);
    const [selectedRhythm, setSelectedRhythm] = useState(0);
    const [stepButtonList, setStepButtonList] = useState([]); /*array da inserire nell'ogggetto json per salvare lo stato dei pads*/
    const [instruments, setInstruments] = useState([]) /* array di strumenti con i relativi stati dei pads */

    return(
        <>
            <div className={styles.container}>
                {/*<Song bpm={appData.tempo.bpm} isPlaying={appData.play.isPlay} volume={appData.volume.value}>

                </Song>*/}
                {/*Inizio per i bottoni per i vari ritmi*/}
                <div className={styles.rhythmButtons}>
                    {numRhythm.map((x) => {
                        return <Button onClick={() => setSelectedRhythm(x)}>{x}</Button>
                    })}
                    <Button onClick={() => setNumRhythm(numRhythm.concat(numRhythm.length))}> + </Button>
                </div>
                {/*FINE*/}

                {/*Inizio per i vari ritmi*/}
                {appData.stepButtons.value !== null ? appData.samplesList.map((x) => {
                    return <>
                        <div className={styles.line}>
                            <div className={styles.title}>
                                {x.name}
                            </div>
                            <div className={styles.stepButton}>
                                <StepButtonsList instrument={x.name} />
                            </div>
                        </div>
                    </>

                }) : null}

            </div>

        </>
    );
}

export default Drumpad;