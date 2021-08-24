import React, {useContext, useEffect, useState} from 'react';
import styles from './Drumpad.module.css';
import { Song, Track, Instrument } from 'reactronica';
import {StepButtonsList} from "../../../index";
import {AppContext} from "../../../../context/AppContext";
import * as Tone from "tone";
import {useSteps, useMusic} from "../../../../hooks";

const CHOSEN_OCTAVE = "4";

const Drumpad = (props) => {
    const appData = useContext(AppContext);
    const [grid, setGrid] = useSteps(appData.userRhythms.data[appData.selectedRhythm.number], appData.stepButtons.value);
    const [currentColumn, setCurrentColumn] = useState(null); //non c'
    const [music, setMusic] = useMusic(grid); // Variable for storing our note in a appropriate format for our synth

    //Notice the new PolySynth in use here, to support multiple notes at once
    const synth = new Tone.PolySynth().toDestination();

    const PlayMusic = async () => {
        console.log("MUSIC: ", music, "PLAY È: ", appData.play.value)
        // Starts our Tone context
        await Tone.start();

        // Tone.Sequence()
        //@param callback
        //@param "events" to send with callback
        //@param subdivision  to engage callback
        const Sequencer = new Tone.Sequence(
            (time, column) => {
                // Highlight column with styling
                setCurrentColumn(column);

                //Sends the active note to our PolySynth
                synth.triggerAttackRelease(music[column], "10n", time);
            },
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            "10n"
        );

        if (appData.play.value) {
            // Turn of our player if music is currently playing
            appData.play.setValue(false);
            setCurrentColumn(null);

            Tone.Transport.stop();
            Sequencer.stop();
            Sequencer.clear();
            Sequencer.dispose();

            return;
        }
        appData.play.setValue(true);
        // Toggles playback of our musical masterpiece
        Sequencer.start();
        Tone.Transport.start();
    };

    return(
        <>
            <div className={styles.container}>
                <button className="play-button" onClick={() => PlayMusic()}>
                    {appData.play.value ? "Stop" : "Play"}
                </button>
                {appData.samplesList.map((x) => {
                    return <>
                        <div className={styles.line} >
                            <div className={styles.title}>
                                {x.name}
                            </div>
                            <div className={styles.stepButton}>
                                {appData.selectedRhythm.item !== undefined ?
                                    <StepButtonsList key={x.id}
                                                     idInstrument={x.id}
                                                     instrument={x.name}
                                                     idRhythm={appData.selectedRhythm.number}
                                    /> : null}
                            </div>
                        </div>
                    </>

                })}

            </div>

        </>

    );
}

export default Drumpad;