import React, {useContext, useEffect, useState} from 'react';
import styles from './Drumpad.module.css';
import { Song, Track, Instrument } from 'reactronica';
import {StepButtonsList} from "../../../index";
import {AppContext} from "../../../../context/AppContext";
import {useSteps} from "../../../../hooks";

const Drumpad = (props) => {
    const appData = useContext(AppContext);
    const [steps, setSteps] = useSteps(appData.selectedRhythm.item, appData.stepButtons.value);
    const [currentColumn, setCurrentColumn] = useState(null);

    return(
        <>
            <div className={styles.container}>
                {appData.selectedRhythm.item !== undefined && appData.selectedRhythm.item.instruments !== undefined && appData.selectedRhythm.item.instruments.length === 8  ?
                    <Song isPlaying={appData.play.value} bpm={appData.tempo.value} volume={appData.volume.value / 25}
                          isMuted={appData.mute.value}>
                        {steps.map((x, i) => {
                            return (<Track
                                volume={appData.selectedRhythm.item.instruments[i].volume / 25} /*divido per 25 altrimenti gracchia troppo*/
                                mute={appData.selectedRhythm.item.instruments[i].volume / 25 === 0 ? true : false}
                                steps={x}
                            >
                                <Instrument
                                    type="sampler"
                                    samples={appData.noteDict[0]}
                                />

                            </Track>)
                        })}

                    </Song> : null
                }

                {appData.samplesList.map((x) => {
                    return <>
                        <div className={styles.line} >
                            <div className={styles.title}>
                                {x.name}
                            </div>
                            <div className={styles.stepButton}>
                                {appData.selectedRhythm.item !== undefined ?
                                    <StepButtonsList key={x.id}
                                                     idInstrument={x.id}
                                                     instrument={x.name}
                                                     idRhythm={appData.selectedRhythm.number}
                                    /> : null}
                            </div>
                        </div>
                    </>

                })}

            </div>

        </>

    );
}

export default Drumpad;