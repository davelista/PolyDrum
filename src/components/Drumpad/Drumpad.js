import React, {useState} from 'react';
import styles from './Drumpad.module.css';
import { Song, Track, Instrument } from 'reactronica';
import {StepButton} from "../index";

const generatePad = (length) => {
    let pad = [];
    for (let i = 1; i <= length; i++) {
        pad.push(<StepButton id={i} key={i} />);
    }
    return pad;

}

const Drumpad = (props) => {
    const {tempo, volume, play, numberStepButton, samplesList} = props;
    return(
        <>
            <div className={styles.container}>
                {/*<Song bpm={tempo.bpm} isPlaying={play.isPlay} volume={volume.value}>

                </Song>*/}

                    {samplesList.map((x) => {
                        return <div className={styles.line}>{x.name} {generatePad(numberStepButton)}</div>
                    })}

            </div>

        </>
    );
}

export default Drumpad;