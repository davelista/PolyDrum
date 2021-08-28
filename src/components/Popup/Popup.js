import React from 'react';
import styles from "./Popup.module.css"
import {AiOutlineCloseSquare} from "react-icons/all";

function Popup(props) {
    const {title, body, open, onChangeOpen} = props;
    return (
        <>
            <div>
                <div className={styles.overlay}>
                 <div className={styles.container}>
                    <div className={styles.titleContainer}>

                        <span className={styles.closeButton} onClick={() => onChangeOpen(!open)}><AiOutlineCloseSquare size={20}/></span>
                        <div className={styles.title}>{title}</div>
                        <div> </div>
                    </div>
                     <div className={styles.popupDivider}/>
                    <div className={styles.popup}>
                        <p>{body}</p>
                    </div>
                </div>

                </div>
            </div>
        </>
    );  
}

export default Popup;