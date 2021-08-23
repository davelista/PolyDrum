import React, {useContext} from 'react';
import styles from "./SettingsSection.module.css";
import {VerticalSlider} from "../../index";
import {AppContext} from "../../../context/AppContext";

const SlidersContainer = (props) => {
    const appData = useContext(AppContext)

    let slidersContainer;

    appData.userRhythms.data[appData.selectedRhythm.number] !== undefined &&
    appData.userRhythms.data[appData.selectedRhythm.number].instruments.length === 8 ?
        slidersContainer = (<div className={styles.slidersContainer} >
        <div className={styles.section}>
            {appData.samplesList.filter((vs) => vs.id < 4).map((x, i) => {
                return <>
                    <VerticalSlider title={x.name}
                                    defaultValue={appData.userRhythms.data[appData.selectedRhythm.number].instruments[i].volume}
                                    userRhythms={appData.userRhythms}
                                    idInstrument={i}
                                    idRhythm={appData.selectedRhythm.number}
                                    />
                </>
            })}
        </div>

        <div className={styles.section}>
            {appData.samplesList.filter((vs) => vs.id > 3).map((x, i) => {
                return <>
                    <VerticalSlider title={x.name}
                                    defaultValue={appData.userRhythms.data[appData.selectedRhythm.number].instruments[i].volume}
                                    userRhythms={appData.userRhythms}
                                    idInstrument={i}
                                    idRhythm={appData.selectedRhythm.number}

                    />
                </>
            })}
        </div>
    </div>) : slidersContainer = null;


    return (
        <>

            {slidersContainer}
        </>
    );
}

export default SlidersContainer;