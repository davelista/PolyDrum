import React from 'react';
import {makeStyles, Slider, Typography, withStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 300 + theme.spacing(3) * 2,
    },
    margin: {
        height: theme.spacing(3),
    },
}));

const RoundSlider = withStyles({
    root: {
        color: 'black',
        height: 8,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
})(Slider);


const ControlSlider = (props) => {

    const {title, defaultValue, onChangeValue} = props;
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <Typography gutterBottom>{title}</Typography>
                <RoundSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={defaultValue} min={1} max={100} step={1} onChange={(e, value) => onChangeValue(value)} />
            </div>
        </>
    );
}

export default ControlSlider;

/*
export default function VerticalSlider() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography id="vertical-slider" gutterBottom>
                Temperature
            </Typography>
            <div className={classes.root}>
                <Slider
                    orientation="vertical"
                    getAriaValueText={Pinguini}
                    defaultValue={30}
                    aria-labelledby="vertical-slider"
                />
                <Slider
                    disabled
                    orientation="vertical"
                    getAriaValueText={valuetext}
                    defaultValue={30}
                    aria-labelledby="vertical-slider"
                />
                <Slider
                    orientation="vertical"
                    defaultValue={[20, 37]}
                    aria-labelledby="vertical-slider"
                    getAriaValueText={valuetext}
                    marks={marks}
                />
            </div>
        </React.Fragment>
    );
}
*/