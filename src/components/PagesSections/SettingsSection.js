import React from 'react';
import styles from "./SettingsSection.module.css";
import {Button, CheckBox, Dropdown, HorizontalSlider, NumberControl, VerticalSlider} from "../index";
import {FaPlay} from "react-icons/all";

const SettingsSection = (props) => {
    const {volume, play, tempo, samplesList} = props;

    return (
        <>
            <div className={styles.container}>
                <CheckBox label={"Mute"}/>
                <HorizontalSlider title={"Volume"} defaultValue={volume.value} onChangeValue={volume.setValue}/>
                <Button onClick={() => play.setPlay(!play.isPlay)} ><FaPlay/> </Button>
                {console.log("play è: ", play.isPlay)}
                {console.log("ho cambiato il TEMPO in: ", tempo.bpm)}
                {console.log("ho cambiato il VOLUME in: ", volume.value)}
                {/*NON ELIMINARE NUMBERCONTROL*/}
                <NumberControl tempo={tempo} play={play}/>
                <Dropdown/>

                <div className={styles.sliders} >
                    {samplesList.filter((vs,i) => i < 4).map((x, i) => {
                        return <>
                            <VerticalSlider title={x.name} defaultValue={volume.value} onChangeValue={volume.setValue}/>
                        </>
                    })}
                    <br/>
                </div>

            </div>
        </>
    );
}

export default SettingsSection;