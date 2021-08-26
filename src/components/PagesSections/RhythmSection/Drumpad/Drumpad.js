import React, {useContext, useEffect, useState} from 'react';
import styles from './Drumpad.module.css';
import {PlayRhythm, StepButtonsList} from "../../../index";
import {AppContext} from "../../../../context/AppContext";

const playItem = (item, appData) => {
    if(item !== undefined &&
        item.instruments !== undefined
        && item.instruments.length === 8){
        /*console.log("QUI ITEM: ",item)*/
        return (<PlayRhythm play={appData.play.value}
                            tempo={appData.tempo.value}
                            volume={appData.volume.value}
                            mute={appData.mute.value}
                            noteDict={appData.noteDict}
                            numStepButtons={item.numStepButtons}
                            item={item}
        />)
    }
}

const Drumpad = (props) => {
    const appData = useContext(AppContext);

    return(
        <>
            <div className={styles.container}>
                {appData.selectedRhythm.number !== null ? playItem(appData.selectedRhythm.item, appData) :
                    appData.selectedRhythm.item.length === appData.rhythmsList.item.length ?
                    appData.selectedRhythm.item.map((x,i) => {
                        return playItem(x, appData)
                    }) : null
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