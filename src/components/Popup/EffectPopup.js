import React from 'react';
import {Button} from "../index";
import {BiHash, BiSelectMultiple, BsFillArrowRightSquareFill, FaMinus, FaPlay, FaPlus} from "react-icons/all";

const EffectPopup = () => {
return <>
    <div>
        Here is the list of available effect:
        <ul>
            <li><b>m/n</b>: m beats, each an n-th of the whole note (first)</li>
            <li><b>i/j</b>: i beats, each an j-th of the whole note (second)</li>
        </ul>

        <ul>
            <li>The first rhythm fits a measure of m beats, each lasting 1/n of a whole note</li>
            <li>The second rhythm fits a measure of i beats, each lasting 1/j of a whole note</li>
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