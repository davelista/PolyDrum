import React, {useContext, useEffect} from 'react';
import {AppContext} from "../../../../context/AppContext";
import styles from "./Display.module.css";
import {useIndices} from "../../../../hooks";

const FinalInstrumentsRhythm = (props) => {
    const appData = useContext(AppContext);
    const [indices, setIndices] = useIndices();
    let minute = 60000;
    let seconds = minute/appData.tempo.value - 50;

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
    }, [appData.play.value, appData.play.index]);

    /*disegna, assieme a draqFinalRhythm, la colonna del
     ritmo finale indicando quali strumenti vengono suonati per ogni indice*/
    const controlPad = (index, db) => {
        let array = [];
        for (let i = 0; i < db.length; i++){
            let padIndex = index % db[i].numStepButtons;
            for (let y = 0; y < db[i].instruments.length; y++){
                if(db[i].instruments[y].pad[padIndex]){
                    array[y] = true;
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
                draw.push(<div className={styles.box}><div className={styles.toggleActive}> </div></div>)
            } else {
                draw.push(<div className={styles.box}><div className={styles.toggle}> </div></div>)
            }
        }
        return draw;
    }


    return (
        <>
            <div className={styles.columnTitles}>
                {appData.samplesList.map((x) => {
                    return <>
                        <div className={styles.title}>
                            {x.name}
                        </div>
                    </>
                })}
            </div>
            <div className={styles.tab}>
            {
                indices.map((x, i) => {
                    return (
                        <div className={styles.columnSteps} >
                            <div className={styles.box} style={appData.play.index === i ? {color: "red"} : null}>{x}</div>
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