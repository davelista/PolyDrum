import React, {useContext, useState} from 'react';
import styles from "./Dropdown.module.css";
//per modifcare le diverse tipologie di dropdown (primary = time signature and effects | secondary = wet)
import "./DiffertDropdown.css";
import {RiArrowDownSLine} from "react-icons/all";
import {AppContext} from "../../context/AppContext";

const dropdownStyles = ['dropdown--primary', 'dropdown--secondary'];
const contentStyles = ['content--primary','content--secondary'];

const Dropdown = (props) => {
    const appData = useContext(AppContext);
    const [open, setOpen] = useState(false);
    const {name, listInRhythm, jsonList, type, dropdownStyle, contentStyle} = props;

    const checkDropdownStyle = dropdownStyles.includes(dropdownStyle) ? dropdownStyle : dropdownStyles[0];
    const checkContentStyle = contentStyles.includes(contentStyle) ? contentStyle : contentStyles[0];
    return (
        <>

            {appData.userRhythms.data[appData.selectedRhythm.number] !== undefined && (
                <div className={`${checkDropdownStyle}`}>
                    <div className={open ? styles.activeDrop : styles.button} onClick={() => {setOpen(!open)}}>
                        {listInRhythm === "" || listInRhythm === null ?
                            <> <div className={styles.dropLabel}>{name}</div> <RiArrowDownSLine/></> :
                            <>{type === "wet" ? listInRhythm*100 : listInRhythm} <RiArrowDownSLine/> </>}
                        {/* VECCHIO
                        appData.userRhythms.data[appData.selectedRhythm.number].timeSignature === "" ?
                            <> <div className={styles.dropLabel}>{name}</div> <RiArrowDownSLine/></> :
                            <>{appData.userRhythms.data[appData.selectedRhythm.number].timeSignature} <RiArrowDownSLine/> </>*/}

                    </div>

                    {open ? (
                        <div className={`${checkContentStyle}`}>
                            {jsonList.map((x) => {
                                if(type === "time"){
                                    return <div className={styles.item} onClick={() => {
                                        appData.userRhythms.update(x.numerator, x.value, x.denominator, null);
                                        setOpen(false)
                                    }} key={x.value}>{x.value}</div>
                                } else if(type === "effect"){
                                    return <div className={styles.item} onClick={() => {
                                        appData.userRhythms.updateEffect(x.value);
                                        setOpen(false)
                                    }} key={x.value}>{x.value}</div>
                                } else {
                                    return <div className={styles.item} onClick={() => {
                                        appData.userRhythms.updateWet(x.value);
                                        setOpen(false)
                                    }} key={x.value}>{x.name}</div>
                                }
                            })}
                            {/* VECCHIO
                            appData.timeSignaturesList.map((x) => {
                                return <div className={styles.item} onClick={() => {
                                    appData.userRhythms.update(x.numerator, x.value, x.denominator);
                                    setOpen(false)
                                }} key={x.value}>{x.value}</div>

                            })*/}
                        </div>
                    ) : null}

            </div>)}

        </>
    );
}
export default Dropdown;