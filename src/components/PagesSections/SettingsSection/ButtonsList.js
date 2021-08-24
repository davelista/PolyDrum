import React, {useContext} from 'react';
import {FaPause, FaPlay, FaStop} from "react-icons/all";
import {Button} from "../../index";
import styles from "./SettingsSection.module.css";
import {AppContext} from "../../../context/AppContext";

const ButtonsList = (props) => {
    const appData = useContext(AppContext);

    return (
        <>
            <div className={styles.playButtons}>
                <Button onClick={() => appData.play.setValue(!appData.play.value)} >{appData.play.value ?<FaPause/> : <FaPlay/>} </Button>
                {console.log("PLAY È:", appData.play.value)}
                <Button><FaStop/></Button>
            </div>

            <div className={styles.rhythmButtons}>
                {appData.rhythmsList.item.map((x) => {
                    return <Button buttonStyle={appData.selectedRhythm.number === x ? 'btn--primary--active' : 'btn--primary'} onClick={() => appData.selectedRhythm.setNumber(x)}>{x}</Button>
                })}
                <Button onClick={() => appData.rhythmsList.setItem(appData.rhythmsList.item.concat(appData.rhythmsList.item.length))}> + </Button>
            </div>
        </>
    );
}

export default ButtonsList;