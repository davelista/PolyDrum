import React, {useState} from 'react';
import {Instrument, Song, Track} from "reactronica";
import {useSteps} from "../../hooks";

const PlayRhythm = (props) => {
    const {play, tempo, volume, mute, item, noteDict, numStepButtons} = props;
    const [steps, setSteps] = useSteps(item, numStepButtons);
    const [buffer, setBuffer] = useState(false)
    let bpm = tempo * (item.denominator/4);
    return (

        <>
            <Song isPlaying={play.value && buffer} bpm={bpm} volume={volume / 25}
                  isMuted={mute || volume === 0}>
                {steps.map((x, i) => {
                    return (<Track
                        volume={item.instruments[i].volume / 25} /*divido per 25 altrimenti gracchia troppo*/
                        mute={item.instruments[i].volume / 25 === 0 || mute}
                        steps={x}

                    >
                        <Instrument
                            type="sampler"
                            samples={noteDict[0]}
                            onLoad={(buffers) => {
                                setBuffer(true)
                            }}
                        />

                    </Track>)
                })}

            </Song>
        </>
    );
}

export default PlayRhythm;