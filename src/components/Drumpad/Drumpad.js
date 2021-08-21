import React, {useContext, useEffect, useState} from 'react';
import styles from './Drumpad.module.css';
import { Song, Track, Instrument } from 'reactronica';
import {Button, StepButton, StepButtonsList} from "../index";
import {AppContext} from "../../context/AppContext";

const addItemToObj = (selectedRhythm, userRhythms, timeSignature) => {

    if(userRhythms.data[selectedRhythm] === undefined) {
        let item = {
            timeSignature : timeSignature.value,
            instruments: []
        }
        userRhythms.data[selectedRhythm] = item;
    } else {
        if(timeSignature.value !== userRhythms.data[selectedRhythm].timeSignature){
            userRhythms.data[selectedRhythm].timeSignature = timeSignature.value
        }
    }

}

const Drumpad = (props) => {
    const appData = useContext(AppContext);
    const [numRhythm, setNumRhythm] = useState([0]);



    return(
        <>
            <div className={styles.container}>
                {/*<Song bpm={appData.tempo.bpm} isPlaying={appData.play.isPlay} volume={appData.volume.value}>

                </Song>*/}
                {/*Inizio per i bottoni per i vari ritmi*/}
                <div className={styles.rhythmButtons}>
                    {numRhythm.map((x) => {
                        return <Button onClick={() => appData.rhythm.setNumber(x)}>{x}</Button>
                    })}
                    <Button onClick={() => setNumRhythm(numRhythm.concat(numRhythm.length))}> + </Button>
                </div>
                {/*FINE*/}
                {addItemToObj(appData.rhythm.number, appData.userRhythms, appData.timeSignature)}
                {console.log("I RITMI DELL'UTENTE SONO: ", appData.userRhythms.data)}
                {/*Inizio per i vari ritmi*/}
                {appData.samplesList.map((x) => {
                    return <>
                        <div className={styles.line}>
                            <div className={styles.title}>
                                {x.name}
                            </div>
                            <div className={styles.stepButton}>
                                <StepButtonsList idInstrument={x.id} instrument={x.name} idRhythm={appData.rhythm.number} />
                            </div>
                        </div>
                    </>

                })}

            </div>

        </>
    );
}

export default Drumpad;