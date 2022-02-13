import React, {useEffect, useState} from 'react';
import {Effect, Song, Track} from "reactronica";
import {useSteps} from "../../hooks";
import {CustomInstrument} from "../index";

const PlayRhythm = (props) => {

    const {play, tempo, volume, mute, item, noteDict, numStepButtons, indexNoteDict} = props;
    const [steps, setSteps] = useSteps(item, numStepButtons, Object.keys(noteDict[indexNoteDict]));
    const [sample, setSample] = useState(noteDict[indexNoteDict])
    let bpm = tempo * (item.denominator/4);
    let newVolume = volume/25

    useEffect(() =>{
        setSample(noteDict[indexNoteDict])

    }, [indexNoteDict, sample])


    return (

        <>
            <Song isPlaying={play.value } bpm={bpm} volume={newVolume}
                  isMuted={mute || newVolume === 0}>
                {steps.map((x, i) => {
                    return (<Track
                        volume={item.instruments[i].volume/5} /*divido per 25 altrimenti gracchia troppo*/
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
                        <CustomInstrument samples={sample}/>
                    </Track>)
                })}

            </Song>
        </>
    );
}

export default PlayRhythm;