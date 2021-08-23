import React, {useContext, useEffect, useState} from 'react';
import styles from './Drumpad.module.css';
import { Song, Track, Instrument } from 'reactronica';
import {Button, StepButton, StepButtonsList} from "../../../index";
import {AppContext} from "../../../../context/AppContext";
import produce from "immer";
import {useSteps} from "../../../../hooks";
import C3 from "../../../../samples/kicks/kick-1.wav"

const Drumpad = (props) => {
    const appData = useContext(AppContext);
    const [steps, setSteps] = useSteps(appData.selectedRhythm.item);
    console.log("gli steps sono: ", steps)
    const [currentIndex, setCurrentStepIndex] = useState(0);


    return(
        <>
            <div className={styles.container}>
                {/*<Song bpm={appData.tempo.bpm} isPlaying={appData.play.value} volume={appData.volume.value}>
                    <Track steps={steps}
                           onStepPlay={(stepNotes, index) => {
                               setCurrentStepIndex(index);
                           }} ><Instrument
                        type="sampler"
                        samples={{
                            C3: `../../../../samples/kicks/kick-1.wav`,
                        }}
                    />
                    </Track>
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