import React, {useContext, useState} from 'react';
import styles from "./SettingsSection.module.css";
import {Dropdown, HorizontalSlider, NumberControl, VerticalSlider, ButtonsList} from "../../index";
import {HiVolumeUp, HiVolumeOff} from "react-icons/all";
import {AppContext} from "../../../context/AppContext";
import SlidersContainer from "./SlidersContainer";

const SettingsSection = (props) => {
    const appData = useContext(AppContext);

    return (
        <>
            <div className={styles.container}>

                <HorizontalSlider title={"Volume"} defaultValue={50}
                                  icon={!appData.mute.value ? <HiVolumeUp /> : <HiVolumeOff />}
                                  volumeValue={appData.volume.value}
                                  onChangeValue={appData.volume.setValue}
                                  mute={appData.mute.value}
                                  onChangeMute={appData.mute.setValue}/>
                <ButtonsList/>
                <NumberControl tempo={appData.tempo} play={appData.play}/>
                <Dropdown/>
                <SlidersContainer />
            </div>
        </>
    );
}

export default SettingsSection;