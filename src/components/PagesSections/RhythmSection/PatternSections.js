import React from 'react';
import styles from "./RhythmSection.module.css";
import {Button} from "../../index";
import {AppContext} from "../../../context/AppContext";

const PatternSections = (props) => {
    const {list, rhythms} = props
    return (
        <>
            <div className={styles.patterns}>

                {list.map((x, i) => {
                    return (
                        <Button buttonStyle={'btn--patterns'} onClick={() => {
                            rhythms.insertPattern(x.name, i)
                        }}>
                            {x.name}
                        </Button>)
                })}

            </div>
        </>
    );
}

export default PatternSections;