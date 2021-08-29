import React, {useContext} from 'react';
import styles from "./SettingsSection.module.css";
import {VerticalSlider} from "../../index";
import {AppContext} from "../../../context/AppContext";
import logo from "../../../assets/logo.png"

const SlidersContainer = (props) => {
    const appData = useContext(AppContext)

    let slidersContainer;

    appData.userRhythms.data[appData.selectedRhythm.number] !== undefined &&
    appData.userRhythms.data[appData.selectedRhythm.number].instruments.length === 8 ?
        slidersContainer = (<>


                    <div className={styles.section}>
                        {appData.samplesList.filter((vs) => vs.id < 4).map((x) => {
                            return <>
                                <VerticalSlider title={x.name}
                                                defaultValue={appData.userRhythms.data[appData.selectedRhythm.number].instruments[x.id].volume}
                                                userRhythms={appData.userRhythms}
                                                idInstrument={x.id}
                                                idRhythm={appData.selectedRhythm.number}
                                />

                            </>
                        })}
                    </div>

                    <div className={styles.section}>
                        {appData.samplesList.filter((vs) => vs.id > 3).map((x) => {
                            return <>
                                <VerticalSlider title={x.name}
                                                defaultValue={appData.userRhythms.data[appData.selectedRhythm.number].instruments[x.id].volume}
                                                userRhythms={appData.userRhythms}
                                                idInstrument={x.id}
                                                idRhythm={appData.selectedRhythm.number}

                                />
                            </>
                        })}
                    </div>

            </>
    ) : slidersContainer = null;


    return (
        <>
            <div className={styles.slidersContainer} style={appData.selectedRhythm.number === null ? {backgroundImage: `url(${logo})`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat:"no-repeat"} : null} >
                {slidersContainer}
            </div>
        </>
    );
}

export default SlidersContainer;