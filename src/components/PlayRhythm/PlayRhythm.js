import React from 'react';
import {Instrument, Song, Track} from "reactronica";
import {useSteps} from "../../hooks";

const PlayRhythm = (props) => {
    const {play, tempo, volume, mute, item, noteDict, numStepButtons, onChangeIndex} = props;
    const [steps, setSteps] = useSteps(item, numStepButtons);
    /*console.log("GLI STEPS SONO: ", steps)*/
    return (
        <>
            <Song isPlaying={play.value} bpm={tempo} volume={volume / 25}
                  isMuted={mute}>
                {steps.map((x, i) => {
                    return (<Track
                        volume={item.instruments[i].volume / 25} /*divido per 25 altrimenti gracchia troppo*/
                        mute={item.instruments[i].volume / 25 === 0}
                        steps={x}
                       /* onStepPlay={(_, i) => {
                            play.setIndex(i);
                            console.log("INDEX È:", i)
                        }}*/
                    >
                        <Instrument
                            type="sampler"
                            samples={noteDict[0]}
                        />

                    </Track>)
                })}

            </Song>
        </>
    );
}

export default PlayRhythm;