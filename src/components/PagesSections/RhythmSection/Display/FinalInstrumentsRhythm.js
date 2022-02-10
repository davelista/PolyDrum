import React, {useContext, useEffect, useState} from 'react';
import {AppContext} from "../../../../context/AppContext";
import styles from "./Display.module.css";
import {useIndices} from "../../../../hooks";
import app from "../../../../App";

const FinalInstrumentsRhythm = (props) => {
    const appData = useContext(AppContext);
    const [indices, setIndices] = useIndices();
    let minute = 60000;
    let seconds = minute/appData.tempo.value;

     if(appData.tempo.value >= 120 && appData.tempo.value <= 150){
        seconds = (minute/appData.tempo.value - appData.tempo.value/4);
        console.log("SECONDI", seconds)
    }
    else if(appData.tempo.value > 150){
        seconds = (minute/appData.tempo.value - appData.tempo.value/6);
    }

    useEffect(() => { /*Funzione per evidenziare l'index suonato*/
        if(appData.play.value){
            const interval = setInterval(() => {
                if(appData.play.index < indices.length-1){
                    appData.play.setIndex(appData.play.index + 1);
                }
                else{
                    appData.play.setIndex(0);
                }
            }, seconds);
            return () => clearInterval(interval);
        }
        else {
            appData.play.setIndex(0)
        }

    }, [appData.play]);

    /*disegna, assieme a drawFinalRhythm, la colonna del
     ritmo finale indicando quali strumenti vengono suonati per ogni indice*/
    const controlPad = (index, db) => {
        let array = [];
        for (let i = 0; i < db.length; i++){
            if(db[i] !== undefined) {
                let padIndex = index % db[i].numStepButtons;
                for (let y = 0; y < db[i].instruments.length; y++){
                    if(db[i].instruments[y].pad[padIndex]){
                        array[y] = true;
                    }
                }
            }

        }
        return array;
    }

    const drawFinalRhythm = (index, db, instruments) => {
        let pads = controlPad(index, db);
        let draw = []
        for (let i = 0; i < instruments.length; i++){
            if(pads[i]){
                draw.push(<div className={appData.selectedRhythm.number != null ? styles.box : styles.allDisplayBox}><div className={styles.toggleActive}> </div></div>)
            } else {
                draw.push(<div className={appData.selectedRhythm.number != null ? styles.box : styles.allDisplayBox}><div className={styles.toggle}> </div></div>)
            }
        }
        return draw;
    }


    return (
        <>
            <div className={styles.columnTitles}>
                {appData.samplesList.map((x) => {
                    return <>
                        <div className={styles.title} style={appData.selectedRhythm.number == null ? {height: "3rem"} : null}>
                            {x.name}
                        </div>
                    </>
                })}
            </div>
            <div className={styles.tab}>
            {
                indices.map((x, i) => {
                    return (
                        <div className={styles.columnSteps} style={appData.play.index === i ? {background: "transparent", border: "2px solid #b388ff", color: "white"} : null} >
                            <div className={appData.selectedRhythm.number != null ? styles.box : styles.allDisplayBox}>{x}</div>
                            {drawFinalRhythm(i, appData.userRhythms.data, appData.samplesList)}
                        </div>
                    )
                })
            }
            </div>
        </>
    );
}

export default FinalInstrumentsRhythm;