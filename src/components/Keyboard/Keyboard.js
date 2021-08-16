import React, {useState} from 'react';
import { Song, Track, Instrument } from 'reactronica';

const Keyboard = (props) => {
    const {tempo, play} = props;
    return(
        <>
            <Song bpm={tempo.bpm} isPlaying={play.isPlay}>

            </Song>
        </>
    );
}

export default Keyboard;