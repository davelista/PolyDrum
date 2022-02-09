import React, {useState} from 'react';
import {makeStyles, TextField, withStyles} from "@material-ui/core";

const CustomTextField = withStyles({
    root: {
        color: "white",
        width: "5.5rem",
        height: "3rem",
        textAlign: "center",
        "& label.Mui-focused": {
            color: "white",
        },
        "& .MuiOutlinedInput-input": {
            padding: "1.2rem",
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
            boxShadow: "1px 2px 2px 1px rgba(0, 0, 0, 0.6)",
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

const WetControl = (props) => {
    const {wet, label, rhythm} = props
    const [state, setState] = useState(wet)
    return (
        <>
            <form  noValidate autoComplete="off">

                <CustomTextField
                    id="outlined-number"
                    label= {label}
                    type="number"
                    variant="outlined"
                    color="secondary"
                    InputLabelProps={{
                        shrink: true,

                    }}
                    inputProps={{min: 1, max: 100, step:10, style: {textAlign: 'center'}}}

                    defaultValue={wet * 100}/*NON CAMBIARE*/
                    onChange={(e) => rhythm.updateWet(Math.round(e.target.value/100))}/*NON CAMBIARE*/

                />

            </form>
        </>
    );
}

export default WetControl;