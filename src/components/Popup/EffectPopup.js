import React from 'react';
import {Button} from "../index";
import {BiHash, BiSelectMultiple, BsFillArrowRightSquareFill, FaMinus, FaPlay, FaPlus} from "react-icons/all";

const EffectPopup = () => {
return <>
    <div>
        Here is the list of available effect:
        <ul>
            <li><b>autoFilter</b>: versatile filter effect with several unique features</li>
        </ul>
        <ul>
            <li><b>autoPanner</b>: panner with an LFO connected to the pan amount</li>
        </ul>
        <ul>
            <li><b>autoWah</b>: type of wah-wah effects pedal</li>
        </ul>
        <ul>
            <li><b>bitCrusher</b>: distortion by reducing the resolution or bandwidth of digital audio data</li>
        </ul>
        <ul>
            <li><b>distortion</b>: alteration of the original shape of the signal, based on hard-clipping</li>
        </ul>
        <ul>
            <li><b>feedbackDelay</b>: time between the signal and its feedback</li>
        </ul>
        <ul>
            <li><b>freeVerb</b>: stereo reverb</li>
        </ul>
        <ul>
            <li><b>panVol</b>:controls the pan of the sound and its volume</li>
        </ul>
        <ul>
            <li><b>tremolo</b>: modulation that rhythmically changes the volume</li>
        </ul>

        How to use these effects?
        <ul>
            <li> On each different rhythm is possible to apply one effect. </li>
        </ul>
        <ul>
            <li>The effect is applied to all instruments at the same time!</li>
        </ul>
    </div>
</>
}

export default EffectPopup;