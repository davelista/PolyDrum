import React, {useContext} from 'react';
import styles from "./Drumbit.module.css";
import {CheckBox, ControlSlider, Dropdown, NumberControl, SampleLine, StepButton, Button, Drumpad} from "../components";
import {AppContext} from "../context/AppContext";
import {FaPlay} from "react-icons/all";

function Drumbit(props) {
    const appData = useContext(AppContext);
    return (
        <div className={styles.container}>

            <CheckBox label={"Pippo"}/>

            <Dropdown/>
            <SampleLine/>
            <ControlSlider title={"Volume"} defaultValue={appData.volume.value} onChangeValue={appData.volume.setValue}/>
            <StepButton/>
            <Button onClick={() => appData.play.setPlay(!appData.play.isPlay)} ><FaPlay/> </Button>
            {console.log("play è: ", appData.play.isPlay)}
            {console.log("ho cambiato il TEMPO in: ", appData.tempo.bpm)}
            {console.log("ho cambiato il VOLUME in: ", appData.volume.value)}
            {/*NON ELIMINARE NUMBERCONTROL*/}
            <NumberControl tempo={appData.tempo} play={appData.play}/>
            <Drumpad tempo={appData.tempo} volume={appData.volume} play={appData.play}/>
        </div>
    );
}

export default Drumbit;