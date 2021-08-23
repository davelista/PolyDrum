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
        justifyContent: "center"
    },
    title: {
        marginBottom: "0.5rem",
        textAlign: "center"
    }
});

const CustomSlider = withStyles({
root: {
    color: 'black',
        height: 8,
        '&$vertical': {
        width: 8
    }
},
thumb: {
    height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
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
    left: 'calc(-50% + 4px)'
},
track: {
    height: 8,
        borderRadius: 4
},
rail: {
    height: 8,
        borderRadius: 4
},
vertical: {
    '& $rail': {
        width: 8
    },
    '& $track': {
        width: 8
    },
    '& $thumb': {
        marginLeft: -8,
            marginBottom: -11
    }
}
})(Slider);

function valuetext(value) {
    return `${value}`;
}

const marks = [
    {
        value: 0,
    },
    {
        value: 25,
    },
    {
        value: 50,
    },
    {
        value: 75,
    },
    {
        value: 100,
    },
];

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
                {/* ICONA <Grid item>
                    <VolumeUp/>
                </Grid>*/}

                <div style={{height:"6rem"}}>
                    {/*<Slider
                        orientation="vertical"
                        getAriaValueText={valuetext}
                        defaultValue={defaultValue}
                        aria-labelledby="vertical-slider"
                        marks={marks}
                        onChange={(e, value) => onChangeValue(value)}
                    />*/}
                    <CustomSlider
                        orientation="vertical"
                        getAriaValueText={valuetext}
                        defaultValue={defaultValue}
                        aria-labelledby="vertical-slider"
                        marks={marks}
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
