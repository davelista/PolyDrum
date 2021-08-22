import React, {useContext, useEffect, useState} from 'react';
import {FormControl, InputLabel, makeStyles, MenuItem, Select} from "@material-ui/core";
import {AppContext} from "../../context/AppContext";



const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        color: "white",

    },
    text: {
        color: "white"
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const Dropdown = (props) => {
    //const {list, fun} = props
    const appData = useContext(AppContext);
    const classes = useStyles();
    const [state, setState] = React.useState('');

    const handleChange = (event) => {
        setState(event.target.value);
    };


    return (
        <>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Time Signature</InputLabel>
                <Select
                    classes={{root: classes.text}}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={state}
                    onChange={handleChange}
                    variant="filled"
                    color="primary"
                >
                    {appData.timeSignaturesList.map((x) => {
                        return <MenuItem value={x.n} onClick={() => {
                            appData.userRhythms.update(x.n, x.value);
                        }} key={x.value}>{x.value}</MenuItem>

                    })}

                </Select>
            </FormControl>
            {console.log("il numero di stepbutton è: ", appData.stepButtons.value)}
        </>
    );
}

export default Dropdown;