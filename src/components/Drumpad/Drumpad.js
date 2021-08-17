import React, {useState} from 'react';
import styles from './Drumpad.module.css';
import { Song, Track, Instrument } from 'reactronica';

const Drumpad = (props) => {
    const {tempo, volume, play} = props;
    return(
        <>
            <div className={styles.container}>
                <Song bpm={tempo.bpm} isPlaying={play.isPlay} volume={volume.value}>

                </Song>
            </div>

        </>
    );
}

export default Drumpad;