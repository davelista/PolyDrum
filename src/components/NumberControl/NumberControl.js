import React from 'react';
import {makeStyles, TextField, withStyles} from "@material-ui/core";

const CustomTextField = withStyles({
    root: {
        color: "white",
        width: "10rem",
        height: "3rem",
        textAlign: "center",
        "& label.Mui-focused": {
            color: "white",
        },
        "& .MuiOutlinedInput-input": {
            padding: "1.2rem"
        },
        "& .MuiInput-underline:after": {
            border: "2px solid",
            borderBottomColor: "blue",
            color: "blue"
        },
        "& .MuiOutlinedInput-root": {
            borderRadius: "0.5rem",
            width: "100%",
            color: "white",
            textAlign: "center",
            boxShadow: "0 3px 10px 0 rgba(0, 0, 0, 0.6)",
            "&.Mui-focused fieldset": {
                borderColor: "darkred",
            },
        },
        "& .MuiInputLabel-outlined":{
            color:"white",
            borderColor:"white"
        },
        /* dropdown icon */
        "& .MuiSelect-icon": {
            color: "yellow"
        },
        /* color of the border */
        "& .MuiOutlinedInput-notchedOutline":{
            borderColor: "white"
        }
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