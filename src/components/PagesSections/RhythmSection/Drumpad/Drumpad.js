import React, {useContext, useEffect, useState} from 'react';
import styles from './Drumpad.module.css';
import {PlayRhythm, StepButtonsList} from "../../../index";
import {AppContext} from "../../../../context/AppContext";
import {Instrument, Song, Track} from "reactronica";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/all";
import app from "../../../../App";

const playItem = (item, appData, indexNoteDict) => {
    if (item !== undefined &&
        item.instruments !== undefined
        && item.instruments.length === 8) {
        return (<PlayRhythm play={appData.play}
                            tempo={appData.tempo.value}
                            volume={appData.volume.value}
                            mute={appData.mute.value}
                            noteDict={appData.noteDict}
                            indexNoteDict={indexNoteDict}
                            numStepButtons={item.numStepButtons}
                            item={item}

        />)
    }
}

const Drumpad = (props) => {
    const {noteDict, indexNoteDict, onChangeNoteDict, onChangeIndexNoteDict} = props
    const appData = useContext(AppContext);
    /*const noteDict = ["A1", "A#1", "B1", "C1", "C#1", "D1", "D#1", "E1"]*/
    const [notes, setNotes] = useState(null);



    return (
        <>
            <div className={styles.container}>



                {appData.selectedRhythm.number !== null ? playItem(appData.selectedRhythm.item, appData, indexNoteDict) :
                    appData.selectedRhythm.item.length === appData.rhythmsList.item.length ?
                        appData.selectedRhythm.item.map((x, i) => {
                            return playItem(x, appData, indexNoteDict)
                        }) : null
                }

                {appData.samplesList.map((x) => {
                    return <>
                        <div className={styles.line}>
                            <div
                                /*To play sound when you click note*/
                                onMouseDown={() => {
                                    setNotes([{name: noteDict[x.id]}])
                                }}
                                onMouseUp={() => {
                                        setNotes(null)
                                }}

                                /*css*/
                                className={styles.title}>
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
            <Song>
                <Track>
                    <Instrument
                        type="sampler"
                        notes={notes}
                        samples={appData.noteDict[indexNoteDict]}
                        onLoad={(buffers) => {
                            // Runs when all samples are loaded
                        }}
                    />
                </Track>
            </Song>

        </>


    );
}

export default Drumpad;