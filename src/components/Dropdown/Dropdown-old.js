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

    const [state, setState] = React.useState("");
    const [element, setElement] = useState(null);

    useEffect(() => {
        if(appData.userRhythms.data[appData.selectedRhythm.number] !== undefined)
        renderValue()
        createDropdown()
    }, [appData.userRhythms.data[appData.selectedRhythm.number]])

    const handleChange = (event) => {
        setState(event.target.value);
    };

    let dropdown;

    const renderValue = () => {
        if(state !== appData.userRhythms.data[appData.selectedRhythm.number].timeSignature){
            setState(JSON.stringify(appData.userRhythms.data[appData.selectedRhythm.number].timeSignature))
        }
    }

    const createDropdown = () => {

        if(appData.userRhythms.data[appData.selectedRhythm.number] !== undefined) {
            dropdown = (<FormControl >
                <CustomTextField
                    id="outlined-select-currency"
                    select
                    value={state}
                    label="Time Signature"
                    onChange={handleChange}
                    variant="outlined"
                >
                    {appData.timeSignaturesList.map((x) => {
                        return <MenuItem value={x.n} onClick={() => {
                            appData.userRhythms.update(x.n, x.value);
                        }} key={x.value}>{x.value}</MenuItem>

                    })}
                </CustomTextField>

            </FormControl>)
        } else dropdown = null
        return dropdown
    }


    return (
        <>
            {createDropdown()}
            {console.log(state)}
        </>
    );
}

export default Dropdown;