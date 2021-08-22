import React, {useContext} from 'react';
import {FaPlay} from "react-icons/all";
import {Button} from "../../index";
import styles from "./SettingsSection.module.css";
import {AppContext} from "../../../context/AppContext";

const ButtonsList = (props) => {
    const appData = useContext(AppContext)
    return (
        <>
            <Button onClick={() => appData.play.setValue(!appData.play.value)} ><FaPlay/> </Button>
            <div className={styles.rhythmButtons}>
                {appData.rhythmsList.item.map((x) => {
                    return <Button onClick={() => appData.selectedRhythm.setNumber(x)}>{x}</Button>
                })}
                <Button onClick={() => appData.rhythmsList.setItem(appData.rhythmsList.item.concat(appData.rhythmsList.item.length))}> + </Button>
            </div>
        </>
    );
}

export default ButtonsList;