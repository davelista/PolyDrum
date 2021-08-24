import React, {useContext, useEffect, useState} from 'react';
import {FormControl, InputLabel, makeStyles, MenuItem, Select, TextField, withStyles} from "@material-ui/core";
import {AppContext} from "../../context/AppContext";

const CustomTextField = withStyles({
    root: {
        color: "white",
        width: "9.5rem",
        textAlign: "center",
        "& label.Mui-focused": {
            color: "white",
        },
        /* not understood */
        "& .MuiInput-underline:after": {
            borderBottomColor: "yellow",
            color: "yellow"
        },
        /* color of the signature */
        "& .MuiOutlinedInput-root": {
            borderRadius: "0.8rem",
            width: "100%",
            color: "white",
            textAlign: "center",
            "&.Mui-focused fieldset": {
                borderColor: "darkred",
            },
        },
        /* label color */
        "& .MuiInputLabel-outlined":{
            color:"white",
            borderColor:"white"
        },
        /* dropdown icon */
        "& .MuiSelect-icon": {
            color: "darkred"
        },
        /* color of the border */
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
        </>
    );
}

export default Dropdown;