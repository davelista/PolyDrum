import React from 'react';
import styles from "./RhythmSection.module.css";
import {Button} from "../../index";
import produce from "immer";

const PatternSections = (props) => {
    const {list} = props
    return (
        <>
            <div className={styles.patterns}>

                {list.map((x, i) => {
                    return (
                        <Button buttonStyle={'btn--patterns'}>
                            {x.name}
                        </Button>)
                })}

            </div>
        </>
    );
}

export default PatternSections;