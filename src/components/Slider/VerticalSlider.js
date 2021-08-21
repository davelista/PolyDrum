import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Grid from "@material-ui/core/Grid";
import VolumeUp from '@material-ui/icons/VolumeUp';
import {withStyles} from "@material-ui/core";

const useStyles = makeStyles({ /*come avere un file VerticalSlider.module.css*/
    root: {
        width: "20%",
        color: "white",
        columnFill: "white",
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
    color: '#52af77',
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
        boxShadow: '0px 0px 0px 8px rgba(84, 199, 97, 0.16)'
    },
    '&$active': {
        boxShadow: '0px 0px 0px 12px rgba(84, 199, 97, 0.16)'
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
    const {title, defaultValue, onChangeValue} = props;
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
                        onChange={(e, value) => onChangeValue(value)}
                    />
                </div>
            </div>
        </>
    );
}
export default VerticalSlider
