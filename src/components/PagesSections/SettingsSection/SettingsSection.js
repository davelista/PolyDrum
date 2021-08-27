import React, {useContext, useState} from 'react';
import styles from "./SettingsSection.module.css";
import {Dropdown, HorizontalSlider, NumberControl, Button, ButtonsList, Popup} from "../../index";
import {HiVolumeUp, HiVolumeOff, BsQuestionSquareFill} from "react-icons/all";
import {AppContext} from "../../../context/AppContext";
import SlidersContainer from "./SlidersContainer";


const SettingsSection = (props) => {
    const appData = useContext(AppContext);
    const [open, setOpen] = useState(false)

    return (
        <>
            <div className={styles.container}>

                <HorizontalSlider title={"Volume"} defaultValue={50}
                                  icon={!appData.mute.value ? <HiVolumeUp size={24} /> : <HiVolumeOff size={24} />}
                                  volumeValue={appData.volume.value}
                                  onChangeValue={appData.volume.setValue}
                                  mute={appData.mute.value}
                                  onChangeMute={appData.mute.setValue}/>
                <ButtonsList/>

                <div className={styles.divider}></div>

                <div className={styles.auxButtons}>
                    <Button onClick={() => setOpen(!open)} buttonStyle={"btn--secondary"}><BsQuestionSquareFill/></Button>

                    <NumberControl tempo={appData.tempo} play={appData.play}/>
                    <Dropdown/>
                    <Button onClick={() => setOpen(!open)} buttonStyle={"btn--secondary"}><BsQuestionSquareFill/></Button>
                </div>

                {
                    open ? <Popup title={"Inserire titolo"} body={"inserire body"} footer={"inserire footer"} /> : null
                }
                <SlidersContainer />
            </div>
        </>
    );
}

export default SettingsSection;