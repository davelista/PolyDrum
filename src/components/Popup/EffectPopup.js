import React from 'react';
import {Button} from "../index";
import {BiHash, BiSelectMultiple, BsFillArrowRightSquareFill, FaMinus, FaPlay, FaPlus} from "react-icons/all";

const EffectPopup = () => {
return <>
    <div>
        Here is the list of available effect:
        <ul>
            <li><b>autoFilter</b>:</li>
        </ul>
        <ul>
            <li><b>autoPanner</b>:</li>
        </ul>
        <ul>
            <li><b>autoWah</b>:</li>
        </ul>
        <ul>
            <li><b>bitCrusher</b>:</li>
        </ul>
        <ul>
            <li><b>distortion</b>:</li>
        </ul>
        <ul>
            <li><b>feedbackDelay</b>:</li>
        </ul>
        <ul>
            <li><b>freeVerb</b>:</li>
        </ul>
        <ul>
            <li><b>panVol</b>:</li>
        </ul>
        <ul>
            <li><b>tremolo</b>:</li>
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