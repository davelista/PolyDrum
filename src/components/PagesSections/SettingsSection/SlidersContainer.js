import React, {useContext} from 'react';
import styles from "./SettingsSection.module.css";
import {VerticalSlider} from "../../index";
import {AppContext} from "../../../context/AppContext";

const SlidersContainer = (props) => {
    const appData = useContext(AppContext)
    return (
        <>

            <div className={styles.slidersContainer} >
                <div className={styles.section}>
                    {appData.samplesList.filter((vs) => vs.id < 4).map((x, i) => {
                        return <>
                            <VerticalSlider title={x.name} defaultValue={appData.volume.value} onChangeValue={appData.volume.setValue}/>
                        </>
                    })}
                </div>
                <div className={styles.section}>
                    {appData.samplesList.filter((vs) => vs.id > 3).map((x, i) => {
                        return <>
                            <VerticalSlider title={x.name} defaultValue={appData.volume.value} onChangeValue={appData.volume.setValue}/>
                        </>
                    })}
                </div>
            </div>
        </>
    );
}

export default SlidersContainer;