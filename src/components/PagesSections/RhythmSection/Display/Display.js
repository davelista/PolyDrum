/*
INTRO:
BFN notation:
m/n --> m beats, each an n-th of the whole note (first)
i/j --> m beats, each an n-th of the whole note (second)

The first rhythm fits a measure of m beats (each lasting 1/m of a whole note)
The second rhythm fits a measure of i beats (each lasting 1/j of a whole note)

At the moment, in our case m = j = 4.

A Polyrhythm K against N typically has a BFN of K/K : N/N  <-- Attention
ex. 7/7 : 4/4
VS
Complex Rhythm: 7/8 : 4/4 <-- however is a polymeter

PRAGMATICALLY:
In order to find a single signature that accommodates both sub-signatures of a polymetric structure:
N1 / D1 : N2 / D2 --> N/D
D = LCM (D1, D2),   N = LCM (N1K1, N2K2), where K_index = D/D_index
If D > D1 and D > D2 the info of the pulse is lost (ex. 4/4:7/7 --> 28/28)

Ex. in our case:
7/4 : 11/4
--> D = LCM (4,4) = 4 (it will be always 4 with our rhythms, now)
--> N = LCM(N1, N2) (K is D/D1 = 1) --> LCM (11,7) = 77

*/

import React, {useContext} from 'react';
import styles from "./Display.module.css";
import {AppContext} from "../../../../context/AppContext";
import FinalInstrumentsRhythm from "./FinalInstrumentsRhythm";

const Display = (props) => {
    const appData = useContext(AppContext)

    return (
        <>
            <div className={styles.display} style={appData.selectedRhythm.number == null ? { height: "40rem"} : { height: "20rem"}}>
                <div className={styles.container}>
                       <FinalInstrumentsRhythm/>
                </div>
            </div>

        </>
    );
}

export default Display;