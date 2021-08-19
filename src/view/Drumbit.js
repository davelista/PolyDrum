import React, {useContext} from 'react';
import styles from "./Drumbit.module.css";
import {CheckBox, HorizontalSlider, Dropdown, NumberControl, SampleLine, StepButton, Button, Drumpad, VerticalSlider} from "../components";
import {AppContext} from "../context/AppContext";
import {FaPlay} from "react-icons/all";

function Drumbit(props) {
    const appData = useContext(AppContext);
    return (
/*GENERAL CONTAINER*/
        <div className={styles.container}>

            {/*FIRST SECTION --> AUX AND BUTTONS*/}
            <div className={styles.firstSection}>
                <CheckBox label={"Mute"}/>
                <HorizontalSlider title={"Volume"} defaultValue={appData.volume.value} onChangeValue={appData.volume.setValue}/>
                <Button onClick={() => appData.play.setPlay(!appData.play.isPlay)} ><FaPlay/> </Button>
                {console.log("play è: ", appData.play.isPlay)}
                {console.log("ho cambiato il TEMPO in: ", appData.tempo.bpm)}
                {console.log("ho cambiato il VOLUME in: ", appData.volume.value)}
                {/*NON ELIMINARE NUMBERCONTROL*/}
                <NumberControl tempo={appData.tempo} play={appData.play}/>
                <Dropdown/>

                <div className={styles.secondSection} >
                    <VerticalSlider title={"Volume"} defaultValue={appData.volume.value} onChangeValue={appData.volume.setValue}/>
                </div>
            </div>
            {/*THIRD SECTION ON THE RIGHT */}
            <div className={styles.thirdSection}>
                <CheckBox label={"Display"}/>

                {/*FOURTH SECTION --> DRUMPAD */}
                <div className={styles.fourthSection}>
                    <CheckBox label={"Drumpad"}/>
                    <StepButton/>
                    <Drumpad tempo={appData.tempo} volume={appData.volume} play={appData.play} numberStepButton={appData.stepButtons.numStepButtons} samplesList={appData.samplesList}/>
                </div>

            </div>




            <SampleLine/>

        </div>
    );
}

export default Drumbit;