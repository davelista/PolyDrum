import React, {useContext, useState} from 'react';
import styles from "./SettingsSection.module.css";
import {Button, CheckBox, Dropdown, HorizontalSlider, NumberControl, VerticalSlider, ButtonsList} from "../../index";
import {FaPlay, HiVolumeUp, HiVolumeOff, FaStop, FaPause} from "react-icons/all";
import {AppContext} from "../../../context/AppContext";

const SettingsSection = (props) => {
    const appData = useContext(AppContext);

    return (
        <>
            <div className={styles.container}>
                <HorizontalSlider title={"Volume"} defaultValue={50} icon={!appData.mute.value ? <HiVolumeUp /> : <HiVolumeOff />}
                                  volumeValue={appData.volume.value}
                                  onChangeValue={appData.volume.setValue}
                                  mute={appData.mute.value}
                                  onChangeMute={appData.mute.setValue}/>



                <ButtonsList/>

                {/*NON ELIMINARE NUMBERCONTROL*/}
                <NumberControl tempo={appData.tempo} play={appData.play}/>

                <Dropdown/>

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
                {console.log("play è: ", appData.play.value)}
                {console.log("ho cambiato la VELOCITA' in: ", appData.tempo.value)}
                {console.log("ho cambiato il VOLUME in: ", appData.volume.value)}
                {console.log("ho cambiato il TEMPO in: ", appData.timeSignature.value)}
            </div>
        </>
    );
}

export default SettingsSection;