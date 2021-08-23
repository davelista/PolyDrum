import React, {useContext, useEffect, useState} from 'react';
import {FormControl, InputLabel, makeStyles, MenuItem, Select, TextField, withStyles} from "@material-ui/core";
import {AppContext} from "../../context/AppContext";

const CustomTextField = withStyles({
    root: {
        color: "white",
        width: "9.5rem",
        textAlign: "center",
        "& label.Mui-focused": {
            color: "darkred",
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "#E53A1E",
            color: "white"
        },
        "& .MuiOutlinedInput-root": {
            borderRadius: "0.8rem",
            width: "100%",
            color: "white",
            textAlign: "center",
            "&.Mui-focused fieldset": {
                borderColor: "darkred",
            },
        },
        "& .MuiInputLabel-outlined":{
            color:"white",
            borderColor:"white"
        },
        "& .MuiSelect-icon": {
            color: "white"
        },
        "& .MuiOutlinedInput-notchedOutline":{
            borderColor: "white"
        }
    },
})(TextField);

const Dropdown = (props) => {
    //const {list, fun} = props
    const appData = useContext(AppContext);

    const [state, setState] = React.useState('');

    const handleChange = (event) => {
        setState(event.target.value);
    };


    return (
        <>
            <FormControl >
                <CustomTextField
                    id="outlined-select-currency"
                    select
                    label="Time Signature"
                    value={state}
                    onChange={handleChange}
                    variant="outlined"
                >
                    {appData.timeSignaturesList.map((x) => {
                        return <MenuItem value={x.n} onClick={() => {
                            appData.userRhythms.update(x.n, x.value);
                        }} key={x.value}>{x.value}</MenuItem>

                    })}
                </CustomTextField>

            </FormControl>

            {appData.userRhythms.data[appData.selectedRhythm.number]!== undefined ?
                console.log("-------------\n IL TEMPO È : ", appData.userRhythms.data[appData.selectedRhythm.number].timeSignature, "\n-------------\n")
                : null}
            {console.log("il numero di stepbutton è: ", appData.stepButtons.value)}
        </>
    );
}

export default Dropdown;