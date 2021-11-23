import React from 'react';
import styles from './StepButton.module.css'
import produce from "immer"

const StepButton = (props) => {
    const {id, idInstrument, idRhythm, userRhythms, active} = props;
    const {children} = props

    return (
        <>
            <div className={active ? styles.active : styles.container}
                 onClick={() => {userRhythms.setData(produce(userRhythms.data, draft => { /*Cambia lo stato dello stepButton all'interno del JSON*/
                     draft[idRhythm].instruments[idInstrument].pad[id] = !active;
                 }))}}>
                {children}
            </div>

        </>
    );
}

export default StepButton;