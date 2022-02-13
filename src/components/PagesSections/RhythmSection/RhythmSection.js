import React, {useContext, useEffect, useState} from 'react';
import styles from "./RhythmSection.module.css";
import {Drumpad, Display, Dropdown} from "../../index";
import {AppContext} from "../../../context/AppContext";
import PatternSections from "./PatternSections";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/all";

const RhythmSection = (props) => {
    const appData = useContext(AppContext);
    const [noteDict, setNoteDict] = useState(Object.keys(appData.noteDict[0]))
    const [indexNoteDict, setIndexNoteDict] = useState(0);
    const indexArray = [0, 1, 2, 3, 4];

    useEffect(() => {
        setNoteDict(Object.keys(appData.noteDict[indexNoteDict]));
    }, [indexNoteDict])

    return (
        <>
            <div className={styles.container}
                 style={appData.selectedRhythm.number == null ? {justifyContent: "center"} : {justifyContent: "space-between"}}>
                <Display/>


                <div className={styles.sounds}>
                    <div className={styles.setSounds}>Set of sounds:
                        {indexNoteDict > 0 ? <div className={styles.arrow}><IoIosArrowBack onClick={() => {
                            setIndexNoteDict(indexNoteDict - 1);
                        }}/></div> : <div className={styles.arrow} style={{visibility: "hidden"}}><IoIosArrowBack/></div>} { indexNoteDict + 1 }
                        {
                            indexNoteDict < appData.noteDict.length - 1  ?  <div className={styles.arrow}><IoIosArrowForward onClick={() => {
                                setIndexNoteDict(indexNoteDict + 1);
                            }}/></div> : <div className={styles.arrow} style={{visibility: "hidden"}}><IoIosArrowForward/></div>}

                    </div>
                    <div
                        style={appData.selectedRhythm.number == null ? {display: "none"} : {display: ""}}> {/*Se ha selezionato tutto mostra solo display*/}
                        <PatternSections list={appData.patternList} rhythms={appData.userRhythms}/>
                    </div>
                </div>



                <div className={styles.drumpad}
                     style={appData.selectedRhythm.number == null ? {display: "none"} : {display: ""}}> {/*Se ha selezionato tutto mostra solo display*/}
                    <Drumpad noteDict={noteDict} indexNoteDict={indexNoteDict} onChangeNoteDict={setNoteDict} onChangeIndexNoteDict={setIndexNoteDict}/>
                </div>

            </div>
        </>
    );
}

export default RhythmSection;