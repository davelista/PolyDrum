import React from 'react';
import {makeStyles, TextField} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '15ch',
            /*Da modificare -> COLORI DA INSERIRE*/
        },
    },
}));

const NumberControl = (props) => {
    const classes = useStyles();
    return (
        <>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    id="outlined-number"
                    label="Tempo (BPM)"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{min: 1, style: { textAlign: 'center' }}}
                    variant="outlined"
                    defaultValue={80}
                />
            </form>
        </>
    );
}

export default NumberControl;