import React from 'react';
import {makeStyles, TextField, withStyles} from "@material-ui/core";

const CustomTextField = withStyles({
    root: {
        color: "white",
        width: "7rem",
        textAlign: "center",
        "& label.Mui-focused": {
            color: "darkred",
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "darkred",
            color: "white"
        },
        "& .MuiInput-underline:before": {
            borderBottomColor: "darkred",
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
            "&.Mui-focused fieldset:hover": {
                borderColor: "darkred",
            },
        },

        "& .MuiOutlinedInput-root:hover":{
            borderColor: "white"
        },
        "& .MuiInputLabel-outlined":{
            color:"white",
            borderColor:"white"
        },
        "& .MuiOutlinedInput-outlined:hover":{
            borderColor: "white"
        },
        "& .MuiOutlinedInput-notchedOutline":{
            borderColor: "white"
        },
        "& .MuiOutlinedInput-notchedOutline:hover":{
            borderColor: "white"
        },
    },
})(TextField);

const NumberControl = (props) => {
    const {tempo} = props
    return (
        <>
            <form  noValidate autoComplete="off">

                <CustomTextField
                    id="outlined-number"
                    label="Tempo (BPM)"
                    type="number"
                    variant="outlined"
                    color="secondary"
                    InputLabelProps={{
                        shrink: true,

                    }}
                    inputProps={{min: 1, style: {textAlign: 'center'}}}

                    defaultValue={tempo.value}/*NON CAMBIARE*/
                    onChange={(e) => tempo.setValue(e.target.value)}/*NON CAMBIARE*/

                />

            </form>
        </>
    );
}

export default NumberControl;