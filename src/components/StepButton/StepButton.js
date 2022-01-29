import React, {useContext} from 'react';
import styles from './StepButton.module.css'
import produce from "immer"
import {Instrument, Song, Track} from "reactronica";
import {AppContext} from "../../context/AppContext";

const StepButton = (props) => {
    const appData = useContext(AppContext);
    const {id, idInstrument, idRhythm, userRhythms, active} = props;
    const {children} = props
    const noteDict = ["A1", "A#1", "B1", "C1", "C#1", "D1", "D#1", "E1"]
    const [notes, setNotes] = React.useState(null);
    return (
        <>
            <div
                onMouseDown={() => { //se lo si attiva al click del mouse allora suona la nota, altrimenti no
                    if(!active){
                        setNotes([{name: noteDict[idInstrument]}])
                    }
                }}
                onMouseUp={() => {
                    if(!active) {
                        setNotes(null)
                    }
                }}
                className={active ? styles.active : styles.container}
                 onClick={() => {userRhythms.setData(produce(userRhythms.data, draft => { /*Cambia lo stato dello stepButton all'interno del JSON*/
                     draft[idRhythm].instruments[idInstrument].pad[id] = !active;
                 }))}}>
                {children}


            </div>
            {/*<Song>
                <Track>
                    <Instrument
                        type="sampler"
                        notes={notes}
                        samples={appData.noteDict[0]}
                        onLoad={(buffers) => {
                            // Runs when all samples are loaded
                        }}
                    />
                </Track>
            </Song>
            */}
        </>
    );
}

export default StepButton;