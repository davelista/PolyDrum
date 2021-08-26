import React, {useContext, useState} from 'react';
import {FaPause, FaPlay, FaStop} from "react-icons/all";
import {Button} from "../../index";
import styles from "./SettingsSection.module.css";
import {AppContext} from "../../../context/AppContext";
import produce from "immer";

const ButtonsList = (props) => {
    const appData = useContext(AppContext);
    const [remove, setRemove] = useState();
    return (
        <>
            <div className={styles.playButtons}>
                <Button onClick={() => appData.play.setValue(!appData.play.value)} >{appData.play.value ?<FaPause/> : <FaPlay/>} </Button>
                <Button><FaStop/></Button>
            </div>

            <div className={styles.rhythmButtonsSection} >

                <div className={styles.rhythmButtonsControls}>
                    <Button buttonStyle={appData.selectedRhythm.number == null ? 'btn--primary--active' : 'btn--primary'} onClick={() => appData.selectedRhythm.setNumber(null)}> ALL </Button>
                    <Button onClick={() => appData.rhythmsList.setItem(appData.rhythmsList.item.concat(appData.rhythmsList.item.length))}> + </Button>

                    <Button onClick={() => {
                        appData.rhythmsList.setItem(produce(appData.rhythmsList.item, draft => {
                            draft.splice(appData.rhythmsList.item.length-1)
                        }))
                        if(appData.userRhythms.data[appData.rhythmsList.item.length-1] !== undefined) {
                            appData.userRhythms.setData(produce(appData.userRhythms.data, draft => {
                                draft.splice(appData.rhythmsList.item.length-1)
                            }))
                        }

                    }}> - </Button>
                    {console.log(appData.userRhythms.data)}
                </div>
                <div className={styles.rhythmButtonsList} style={appData.rhythmsList.item.length > 5 ? {overflowY: "scroll"} : {overflow:"hidden"}} >
                    {appData.rhythmsList.item.map((x) => {
                        return <Button buttonStyle={appData.selectedRhythm.number === x ? 'btn--primary--active' : 'btn--primary'} onClick={() => appData.selectedRhythm.setNumber(x)}>{x}</Button>
                    })}
                </div>

            </div>
        </>
    );
}

export default ButtonsList;