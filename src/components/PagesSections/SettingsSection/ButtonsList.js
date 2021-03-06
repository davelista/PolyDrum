import React, {useContext, useState} from 'react';
import {BiSelectMultiple, GiMetronome, BsFillArrowRightSquareFill, BsInfoSquare, BsQuestionSquareFill, FaMinus, FaPause, FaPlay, FaPlus, FaStop} from "react-icons/all";
import {Button, Popup} from "../../index";
import styles from "./SettingsSection.module.css";
import {AppContext} from "../../../context/AppContext";
import produce from "immer";
import CalculateBpm from "./CalculateBpm";

const ButtonsList = (props) => {
    const [open, setOpen] = useState(false);
    const appData = useContext(AppContext);

    return (
        <>

            <div className={styles.playButtons}>
                <Button onClick={() => {
                    appData.play.setValue(!appData.play.value);
                }} >{appData.play.value ?<FaPause/> : <FaPlay/>} </Button>
                <CalculateBpm tempo={appData.tempo}/>

            </div>

            <div className={styles.rhythmButtonsSection} >

                <div className={styles.rhythmButtonsControls}>
                    {/*<Button onClick={() => setOpen(!open)} buttonStyle={"btn--secondary"} style={{marginRight: "1rem"}}><BsQuestionSquareFill size={20}/></Button>*/}
                    <Button buttonStyle={appData.selectedRhythm.number == null ?
                        'btn--primary--active' : 'btn--primary'}
                            onClick={() => appData.selectedRhythm.setNumber(null)}>

                        All <BiSelectMultiple size={20}/>
                    </Button>
                    <Button onClick={() => appData.rhythmsList.setItem(appData.rhythmsList.item.concat(appData.rhythmsList.item.length))}> <FaPlus/> </Button>

                    <Button onClick={() => {
                        appData.rhythmsList.setItem(produce(appData.rhythmsList.item, draft => {
                            draft.splice(appData.rhythmsList.item.length-1)
                        }))
                        if(appData.userRhythms.data[appData.rhythmsList.item.length-1] !== undefined) { /*nel momento in cui si elimina un ritmo cancella tutti i dati*/
                            appData.userRhythms.setData(produce(appData.userRhythms.data, draft => {
                                draft.splice(appData.rhythmsList.item.length-1)
                            }))
                        }

                    }}> <FaMinus/> </Button>
                </div>
                <div className={styles.rhythmButtonsList} style={appData.rhythmsList.item.length > 5 ? {overflowY: "scroll"} : {overflow:"hidden"}} >
                    {appData.rhythmsList.item.map((x) => {
                        return <Button buttonStyle={appData.selectedRhythm.number === x ? 'btn--primary--active' : 'btn--primary'} onClick={() => appData.selectedRhythm.setNumber(x)}>{x+1}</Button>
                    })}
                </div>
                {/*{
                    open ? <Popup title={appData.popupsList[0].title} body={appData.popupsList[0].body} open={open} onChangeOpen={setOpen}/> : null
                }*/}
            </div>
        </>
    );
}

export default ButtonsList;