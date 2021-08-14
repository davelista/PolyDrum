import React from 'react';
import {FormControl, InputLabel, makeStyles, MenuItem, Select} from "@material-ui/core";

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
                    <MenuItem value={1}>2/4</MenuItem>
                    <MenuItem value={2}>3/4</MenuItem>
                    <MenuItem value={3}>4/4</MenuItem>
                </Select>
            </FormControl>
        </>
    );
}

export default Dropdown;