import React, {useContext, useState} from 'react';
import styles from "./SettingsSection.module.css";
import {Button, CheckBox, Dropdown, HorizontalSlider, NumberControl, VerticalSlider} from "../index";
import {FaPlay,HiVolumeUp, HiVolumeOff} from "react-icons/all";
import {AppContext} from "../../context/AppContext";

const SettingsSection = (props) => {
    const appData = useContext(AppContext);

    return (
        <>
            <div className={styles.container}>
                <HorizontalSlider title={"Volume"} defaultValue={50} icon={!appData.volume.mute ? <HiVolumeUp /> : <HiVolumeOff />}
                                  volumeValue={appData.volume.value}
                                  onChangeValue={appData.volume.setValue}
                                  mute={appData.mute.value}
                                  onChangeMute={appData.mute.setValue}/>
                <Button onClick={() => appData.play.setValue(!appData.play.value)} ><FaPlay/> </Button>
                {console.log("play è: ", appData.play.value)}
                {console.log("ho cambiato la VELOCITA' in: ", appData.tempo.value)}
                {console.log("ho cambiato il VOLUME in: ", appData.volume.value)}
                {console.log("ho cambiato il TEMPO in: ", appData.timeSignature.value)}
                {/*NON ELIMINARE NUMBERCONTROL*/}
                <NumberControl tempo={appData.tempo} play={appData.play}/>
                <Dropdown/>

                <div className={styles.sliders} >
                    {appData.samplesList.filter((vs,i) => i < 4).map((x, i) => {
                        return <>
                            <VerticalSlider title={x.name} defaultValue={appData.volume.value} onChangeValue={appData.volume.setValue}/>
                        </>
                    })}
                    <br/>
                </div>

            </div>
        </>
    );
}

export default SettingsSection;