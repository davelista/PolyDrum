import React from 'react';

const DetailsPopup = () => {
    return <>
        <div>
            Time signature is defined in the following way:
            <ul>
                <li><b>m/n</b> --> m beats, each an n-th of the whole note (first)</li>
                <li><b>i/j</b> --> m beats, each an n-th of the whole note (second)</li>
            </ul>

            <ul>
                <li>The first rhythm fits a measure of m beats, each lasting 1/m of a whole note</li>
                <li>The second rhythm fits a measure of i beats, each lasting 1/j of a whole note</li>
            </ul>
            A complex rhythm is indicated as <b>m/n : i/j</b><br/><br/>
            Single signature that accommodates both sub-signatures of a polymetric structure:
            <ul>
                <li>N<sub>i</sub> / D<sub>i</sub> --> i rhythm</li>
                <li>N<sub>1</sub> / D<sub>1</sub> : N<sub>2</sub> / D<sub>2</sub> --> N / D</li><br/>
                Where:
                <ul>
                    <li>D = lcm (D<sub>1</sub>, D<sub>2</sub>)</li>
                    <li>N = lcm (N<sub>1</sub>K<sub>1</sub>, N<sub>2</sub>K<sub>2</sub>)</li>
                    <li> K<sub>i</sub> = D / D<sub>i</sub></li>
                </ul>
            </ul>
            If D > D<sub>1</sub> and D > D<sub>2</sub> the info of the pulse is lost (ex. 4/4:7/7 --> 28/28).
        </div>
    </>
}

export default DetailsPopup;