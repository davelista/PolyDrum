import React, {useContext, useEffect, useState} from 'react';
import styles from './Drumpad.module.css';
import { Song, Track, Instrument } from 'reactronica';
import {Button, StepButton, StepButtonsList} from "../../../index";
import {AppContext} from "../../../../context/AppContext";
import produce from "immer";

const updateItemObj = (idRhythm, userRhythms, timeSignature) => {
    if(userRhythms.data[idRhythm] !== undefined) {
        if (timeSignature !== userRhythms.data[idRhythm].timeSignature) { /*Se non c'è il ritmo*/
            /*produce(userRhythms.data, draft => { /!*Cambia lo stato del timeSignature all'interno del JSON*!/
                draft[idRhythm].timeSignature = timeSignature
            })*/
            userRhythms.data[idRhythm].timeSignature = timeSignature;
        }
    }
}

const Drumpad = (props) => {
    const appData = useContext(AppContext);

   useEffect(() => {
           updateItemObj(appData.selectedRhythm.number, appData.userRhythms, appData.timeSignature.value)
    }, [appData.selectedRhythm.number, appData.timeSignature.value])

    return(
        <>
            <div className={styles.container}>
                {/*<Song bpm={appData.tempo.bpm} isPlaying={appData.play.isPlay} volume={appData.volume.value}>

                </Song>*/}
                {updateItemObj(appData.selectedRhythm.number, appData.userRhythms, appData.timeSignature.value)}

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
            {console.log("I RITMI DELL'UTENTE SONO: ", appData.userRhythms.data)}
        </>

    );
}

export default Drumpad;