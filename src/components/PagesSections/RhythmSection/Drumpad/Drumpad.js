import React, {useContext, useEffect, useState} from 'react';
import styles from './Drumpad.module.css';
import { Song, Track, Instrument } from 'reactronica';
import {Button, StepButton, StepButtonsList} from "../../../index";
import {AppContext} from "../../../../context/AppContext";

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

    return(
        <>
            <div className={styles.container}>
                {/*<Song bpm={appData.tempo.bpm} isPlaying={appData.play.isPlay} volume={appData.volume.value}>

                </Song>*/}

                {addItemToObj(appData.selectedRhythm.number, appData.userRhythms, appData.timeSignature)}
                {console.log("I RITMI DELL'UTENTE SONO: ", appData.userRhythms.data)}
                {/*Inizio per i vari ritmi*/}
                {appData.samplesList.map((x) => {
                    return <>
                        <div className={styles.line}>
                            <div className={styles.title}>
                                {x.name}
                            </div>
                            <div className={styles.stepButton}>
                                <StepButtonsList idInstrument={x.id} instrument={x.name} idRhythm={appData.selectedRhythm.number} />
                            </div>
                        </div>
                    </>

                })}

            </div>

        </>
    );
}

export default Drumpad;