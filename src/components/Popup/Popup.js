import React from 'react';
import styles from "./Popup.module.css"
import {AiOutlineCloseSquare, GrClose} from "react-icons/all";

function Popup(props) {
    const {title, body, open, onChangeOpen} = props;
    return (
        <>
            <div>
                <div className={styles.overlay}>
                 <div className={styles.container}>
                     <div className={styles.closeSection}>
                         <span className={styles.closeButton} onClick={() => onChangeOpen(!open)}><GrClose size={20}/></span>
                     </div>

                    <div className={styles.titleContainer}>
                        <div className={styles.title}>{title}</div>
                    </div>
                     <div className={styles.divider}/>
                    <div className={styles.body}>
                        <p>{body}</p>
                    </div>
                </div>

                </div>
            </div>
        </>
    );  
}

export default Popup;