import React, {useContext, useEffect, useState} from 'react';
import styles from './Drumpad.module.css';
import { Song, Track, Instrument } from 'reactronica';
import {Button, StepButton, StepButtonsList} from "../../../index";
import {AppContext} from "../../../../context/AppContext";
import produce from "immer";

const Drumpad = (props) => {
    const appData = useContext(AppContext);

    return(
        <>
            <div className={styles.container}>
                {/*<Song bpm={appData.tempo.bpm} isPlaying={appData.play.isPlay} volume={appData.volume.value}>

                </Song>*/}

                {/*Inizio per i vari ritmi*/}
                {appData.samplesList.map((x) => {
                    return <>
                        <div className={styles.line} >
                            <div className={styles.title}>
                                {x.name}
                            </div>
                            <div className={styles.stepButton}>
                                {appData.selectedRhythm.item !== undefined ? <StepButtonsList key={x.id} idInstrument={x.id} instrument={x.name} idRhythm={appData.selectedRhythm.number} /> : null}
                            </div>
                        </div>
                    </>

                })}

            </div>

        </>

    );
}

export default Drumpad;