import React, {useContext, useEffect} from 'react';
import {AppContext} from "../../../../context/AppContext";
import styles from "./Display.module.css";
import {useIndices} from "../../../../hooks";

const FinalRhythmList = (props) => {
    const appData = useContext(AppContext);
    const [indices, setIndices] = useIndices();
    let minute = 60000;
    let seconds = minute/appData.tempo.value - 50;

    useEffect(() => {
        if(appData.play.value){
            const interval = setInterval(() => {
                if(appData.play.index < indices.length-1){
                    appData.play.setIndex(appData.play.index + 1);

                }
                else{
                    appData.play.setIndex(0);
                }
                console.log(appData.play.index);
            }, seconds);
            return () => clearInterval(interval);
        }
    }, [appData.play.value, appData.play.index]);

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

    const updateIndex = (currentIndex, setCurrentIndex, bpm) => {
        let minute = 60000;
        let interval = minute/bpm;

        setInterval(() => {
            setCurrentIndex(currentIndex + 1);

        }, interval)
        console.log(currentIndex);
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
        </>
    );
}

export default FinalRhythmList;