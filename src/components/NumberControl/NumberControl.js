import React from 'react';
import {makeStyles, TextField} from "@material-ui/core";

const useStyles = makeStyles ((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '15ch',
            /*color: "#fff",*/
            /*Da modificare -> COLORI DA INSERIRE*/

        },
    },
    specialOutline: {
        borderColor: "pink",
        borderWidth: 4
    }
}));


const NumberControl = (props) => {
    const {tempo} = props /*NON CAMBIARE*/
    const classes = useStyles();
    return (
        <>
            <form className={classes.root} noValidate autoComplete="off">

                <TextField
                    id="outlined-number"
                    label="Tempo (BPM)"
                    type="number"
                    variant="outlined"

                    InputLabelProps={{
                        shrink: true,

                    }}
                    inputProps={{min: 1, style: { textAlign: 'center', color:"red", background:"yellow", border:"3px solid yellowgreen"}}}

                    defaultValue={tempo.bpm}/*NON CAMBIARE*/
                    onChange={(e) => tempo.setBpm(e.target.value)}/*NON CAMBIARE*/

                />

            </form>
        </>
    );
}

export default NumberControl;