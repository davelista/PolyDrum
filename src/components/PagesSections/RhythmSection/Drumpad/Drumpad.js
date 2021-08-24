import React, {useContext, useEffect, useState} from 'react';
import styles from './Drumpad.module.css';
import { Song, Track, Instrument } from 'reactronica';
import {StepButtonsList} from "../../../index";
import {AppContext} from "../../../../context/AppContext";
import {useSteps, useMusic} from "../../../../hooks";

const Drumpad = (props) => {
    const appData = useContext(AppContext);
    const [steps, setSteps] = useSteps(appData.selectedRhythm.item, appData.stepButtons.value);
    const [currentColumn, setCurrentColumn] = useState(null); //non c'
    // const [music, setMusic] = useMusic(grid); // Variable for storing our note in a appropriate format for our synth
    //
    return(
        <>
            <div className={styles.container}>
                <Song isPlaying={appData.play.value} bpm={appData.tempo.value}>
                    <Track
                        steps={steps}
                    >
                        <Instrument
                            type="sampler"
                            samples={appData.noteDict[0]}
                        />
                    </Track>
                </Song>
                {/*<Song isPlaying={appData.play.value} bpm={appData.tempo.value*2}>
                    <Track
                        steps={['C3', 'C3', 'C3', null]}
                    >
                        <Instrument
                            type="synth"
                        />
                    </Track>
                </Song>
                <Song isPlaying={appData.play.value} bpm={appData.tempo.value*4}>
                    <Track
                        steps={['E3', 'E3', 'E3', null]}
                    >
                        <Instrument
                            type="synth"
                        />
                    </Track>
                </Song>*/}
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