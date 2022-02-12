import React from 'react';
import {Effect, Song, Track} from "reactronica";
import {useSteps} from "../../hooks";
import {CustomInstrument} from "../index";

const PlayRhythm = (props) => {

    const {play, tempo, volume, mute, item, noteDict, numStepButtons} = props;
    const [steps, setSteps] = useSteps(item, numStepButtons);
    let bpm = tempo * (item.denominator/4);
    let newVolume = volume/10
    return (

        <>
            <Song isPlaying={play.value } bpm={bpm} volume={newVolume}
                  isMuted={mute || volume === 0}>
                {steps.map((x, i) => {
                    return (<Track
                        volume={item.instruments[i].volume/10} /*divido per 25 altrimenti gracchia troppo*/
                        mute={item.instruments[i].volume === 0 || mute}
                        steps={x}

                    >
                        {item.wet !== 0 ? <Effect type={item.effect} wet={item.wet}/> : null}


                        {/*<Instrument
                            type="sampler"
                            samples={noteDict[0]}
                            /*onLoad={(buffers) => {
                                play.setLoad(true)
                            }}
                        />
*/}
                        <CustomInstrument samples={noteDict[0]} />
                    </Track>)
                })}

            </Song>
        </>
    );
}

export default PlayRhythm;