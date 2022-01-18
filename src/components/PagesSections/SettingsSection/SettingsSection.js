import React, {useContext, useState} from 'react';
import styles from "./SettingsSection.module.css";
import {Dropdown, HorizontalSlider, NumberControl, Button, ButtonsList, Popup, InstructionPopup, DetailsPopup} from "../../index";
import {
    HiVolumeUp,
    HiVolumeOff,
    BsQuestionSquareFill,
} from "react-icons/all";
import {AppContext} from "../../../context/AppContext";
import SlidersContainer from "./SlidersContainer";
import EffectPopup from "../../Popup/EffectPopup";



const SettingsSection = (props) => {
    const appData = useContext(AppContext);
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    return (
        <>
            <div className={styles.container}>
                <div style={{
                    width: "120%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    // marginLeft: "-1.4rem",
                    flexWrap: "wrap"

                }}>

                    {/*HERE!*/}
                    <div className={styles.auxButtons}>
                        {/*<Button onClick={() => setOpen(!open)} buttonStyle={"btn--secondary"}><BsQuestionSquareFill size={20}/></Button>*/}

                        <NumberControl tempo={appData.tempo} play={appData.play} label={"BPM"}/>
                        <Dropdown name={"CHOOSE TIME"}/>
                        <Button onClick={() => setOpen2(!open2)} buttonStyle={"btn--secondary"}><BsQuestionSquareFill size={20}/></Button>

                    </div>

                    <HorizontalSlider title={"Volume"} defaultValue={50}
                                      icon={!appData.mute.value ? <HiVolumeUp size={24} /> : <HiVolumeOff size={24} />}
                                      volumeValue={appData.volume.value}
                                      onChangeValue={appData.volume.setValue}
                                      mute={appData.mute.value}
                                      onChangeMute={appData.mute.setValue}/>

                    <Button onClick={() => setOpen(!open)} buttonStyle={"btn--secondary"} style={{marginRight: "-0.2rem"}}><BsQuestionSquareFill size={20}/></Button>

                </div>

                <ButtonsList/>

                <div className={styles.divider}></div>

                <div className={styles.auxButtons}>
                    {/*<Button onClick={() => setOpen(!open)} buttonStyle={"btn--secondary"}><BsQuestionSquareFill size={20}/></Button>*/}

                    <NumberControl tempo={appData.tempo} play={appData.play} label={"Wet %"}/>
                    <Dropdown name={"Effects"}/>
                    <Button onClick={() => setOpen3(!open3)} buttonStyle={"btn--secondary"}><BsQuestionSquareFill size={20}/></Button>


                </div>
                {
                    open ? <Popup title={appData.popupsList[0].title} body={<InstructionPopup/>} open={open} onChangeOpen={setOpen}/> : null
                }

                {
                    open2 ? <Popup title={appData.popupsList[1].title} body={<DetailsPopup/>} open={open2} onChangeOpen={setOpen2}/> : null
                }
                {
                    open3 ? <Popup title={appData.popupsList[2].title} body={<EffectPopup/>} open={open3} onChangeOpen={setOpen3}/> : null
                }
                <SlidersContainer />
            </div>
        </>
    );
}

export default SettingsSection;