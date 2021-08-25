import React, {useContext, useState} from 'react';
import styles from "./Dropdown.module.css";
import {FaArrowDown, RiArrowDownSLine} from "react-icons/all";
import {AppContext} from "../../context/AppContext";
import {MenuItem} from "@material-ui/core";

const Dropdown = (props) => {
    const appData = useContext(AppContext);
    const [open, setOpen] = useState(false);

    return (
        <>
            {appData.userRhythms.data[appData.selectedRhythm.number] !== undefined && (
                <div className={styles.dropdown}>
                    <div className={styles.button} onClick={() => {setOpen(!open)}}>
                        {appData.userRhythms.data[appData.selectedRhythm.number].timeSignature === "" ?
                            <>Time Signature <RiArrowDownSLine/></> :
                            <>{appData.userRhythms.data[appData.selectedRhythm.number].timeSignature} <RiArrowDownSLine/> </>}
                        {console.log("OPEN È: ",open)}
                    </div>
                    {open ? (
                        <div className={styles.content}>
                            {appData.timeSignaturesList.map((x) => {
                                return <div className={styles.item} onClick={() => {
                                    appData.userRhythms.update(x.n, x.value);
                                    setOpen(false)
                                }} key={x.value}>{x.value}</div>

                            })}
                        </div>
                    ) : null}

            </div>)}

        </>
    );
}

export default Dropdown;