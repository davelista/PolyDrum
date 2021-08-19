import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Grid from "@material-ui/core/Grid";
import VolumeUp from '@material-ui/icons/VolumeUp';

const useStyles = makeStyles({
    root: {
        height: 100,
    },
});

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

            <Typography id="vertical-slider" gutterBottom>
                {title}
            </Typography>
            {/* ICONA <Grid item>
                <VolumeUp/>
            </Grid>*/}
            <div style={{height:"100px"}}>
                <Slider
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
