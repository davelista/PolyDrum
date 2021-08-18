import React, {useContext} from 'react';
import {FormControl, InputLabel, makeStyles, MenuItem, Select} from "@material-ui/core";
import {AppContext} from "../../context/AppContext";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const Dropdown = (props) => {
    const appData = useContext(AppContext);
    const classes = useStyles();
    const [state, setState] = React.useState('');

    const handleChange = (event) => {
        setState(event.target.value);
    };
    return (
        <>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">First tempo</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={state}
                    onChange={handleChange}
                >
                    {appData.rhythmsList.map((x) => {
                        return <MenuItem value={x.n} onClick={() => appData.stepButtons.setNumStepButton(x.n)}>{x.value}</MenuItem>

                    })}

                </Select>
            </FormControl>
            {console.log("il numero di stepbutton è: ", appData.stepButtons.numStepButtons)}
        </>
    );
}

export default Dropdown;