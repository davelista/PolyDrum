import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import {withStyles} from "@material-ui/core";
import produce from "immer";

const useStyles = makeStyles({ /*come avere un file VerticalSlider.module.css*/
    root: {
        width: "20%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "white",
        border: 2
    },
    title: {
        marginBottom: "0.5rem",
        textAlign: "center"
    }
});

const CustomSlider = withStyles({
root: {
    color: 'darkred',
        height: 8,
        '&$vertical': {
        width: 8
    }
},
thumb: {
    height: 20,
        width: 20,
        backgroundColor: '#fff',
        border: '3px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover': {
        boxShadow: '0px 0px 0px 5px rgba(220, 220, 220, 0.16)'
    },
    '&$active': {
        boxShadow: '0px 0px 0px 8px rgba(220, 220, 220, 0.16)'
    }
},
active: {},
valueLabel: {
    left: 'calc(-50% + 4px)',
},
track: {
    height: 8,
        borderRadius: 4,
        border: "2px inset",
        borderColor: "darkred",
        borderBottom: "0",
        color: "black"
},
rail: {
    height: 8,
        borderRadius: 4,
        border: "2px inset",
        borderColor: "white",
        borderBottom: "0",
        color: "black",
},
vertical: {
    '& $rail': {
        width: 8,
    },
    '& $track': {
        width: 8
    },
    '& $thumb': {
        marginLeft: -4.5 ,
            marginBottom: -11
    }
}
})(Slider);

function valuetext(value) {
    return `${value}`;
}

const VerticalSlider = (props) => {
    const {title, defaultValue, userRhythms, idInstrument, idRhythm} = props;
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                <div className={classes.title}>
                    <Typography id="vertical-slider" gutterBottom>
                        {title}
                    </Typography>
                </div>
                <div style={{height:"6rem"}}>
                    <CustomSlider
                        orientation="vertical"
                        getAriaValueText={valuetext}
                        defaultValue={defaultValue}
                        aria-labelledby="vertical-slider"
                        /*marks={marks}*/
                        onChange={(e, value) => userRhythms.setData(
                            produce(userRhythms.data, draft => {
                                draft[idRhythm].instruments[idInstrument].volume = value;
                            }))}

                    />
                </div>
            </div>
        </>
    );
}
export default VerticalSlider
