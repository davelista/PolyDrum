import React, {useContext, useState} from 'react';
import styles from "./SettingsSection.module.css";
import {Dropdown, HorizontalSlider, NumberControl, Button, ButtonsList, Popup} from "../../index";
import {HiVolumeUp, HiVolumeOff, BsQuestionSquareFill} from "react-icons/all";
import {AppContext} from "../../../context/AppContext";
import SlidersContainer from "./SlidersContainer";


const SettingsSection = (props) => {
    const appData = useContext(AppContext);
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);

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
                    <Button onClick={() => setOpen(!open)} buttonStyle={"btn--secondary"}><BsQuestionSquareFill size={20}/></Button>

                    <NumberControl tempo={appData.tempo} play={appData.play}/>
                    <Dropdown/>
                    <Button onClick={() => setOpen2(!open2)} buttonStyle={"btn--secondary"}><BsQuestionSquareFill size={20}/></Button>
                </div>

                {
                    open ? <Popup title={appData.popupsList[0].title} body={appData.popupsList[0].body} open={open} onChangeOpen={setOpen}/> : null
                }
                {
                    open2 ? <Popup title={appData.popupsList[1].title} body={appData.popupsList[1].body} open={open2} onChangeOpen={setOpen2}/> : null
                }
                <SlidersContainer />
            </div>
        </>
    );
}

export default SettingsSection;