import React from 'react';
import styles from "./Popup.module.css"
import {AiOutlineCloseSquare} from "react-icons/all";

function Popup(props) {
    const {title, body, footer} = props;
    return (
        <>
            <div>
                <div className={styles.overlay}>
                 <div className={styles.container}>
                    <div className={styles.titleOnTop}>
                        <span className="close"><AiOutlineCloseSquare/></span>
                        <h2>{title}</h2>
                    </div>
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