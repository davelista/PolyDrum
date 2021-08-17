import React, {useState} from 'react';
import { Song, Track, Instrument } from 'reactronica';

const Drumpad = (props) => {
    const {tempo, play} = props;
    return(
        <>
            <Song bpm={tempo.bpm} isPlaying={play.isPlay}>

            </Song>
        </>
    );
}

export default Drumpad;