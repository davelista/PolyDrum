import React, {useContext, useEffect} from 'react';
import {makeStyles, Slider, Typography, withStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {VolumeDown} from "@material-ui/icons";
import VolumeUp from '@material-ui/icons/VolumeUp';


const useStyles = makeStyles((theme) => ({
    root: {
        width: 300 + theme.spacing(3) * 2,
        textAlign: "center"
    },
    margin: {
        height: theme.spacing(3),
    },
    line: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    icon: {
        marginRight: "1rem"
    }
}));

const RoundSlider = withStyles({
    root: {
        color: 'darkred',
        height: 8,
        display: 'flex',
        flexDirection: 'row'
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: 'white',
        border: '3px solid currentColor',
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
        color: "white"
    },
    rail: {
        height: 8,
        borderRadius: 4,
        color: "black"
    },
})(Slider);

const changeVolume = (mute, onChangeVolumeValue, defaultValue) => {
    if(mute){
        onChangeVolumeValue(0);
    } else {
        onChangeVolumeValue(defaultValue)
    }
}

const HorizontalSlider = (props) => {
    const {title, defaultValue, volumeValue, onChangeValue, icon, mute, onChangeMute} = props;
    const classes = useStyles();

    useEffect(() => {
        changeVolume(mute, onChangeValue, defaultValue)
    }, [mute]);

    return (
        <>
            <div className={classes.root}>
                <Typography gutterBottom>{title}
                </Typography>
                <div className={classes.line}>
                    <div className={classes.icon}>
                        <Grid item>
                            <div onClick={() => {
                                onChangeMute(!mute);
                            }}>{icon}</div>
                        </Grid>
                    </div>
                    
                    <RoundSlider valueLabelDisplay="auto" aria-label="pretto slider"
                        // defaultValue={defaultValue}
                                 min={0} max={100} step={1}
                                 value={volumeValue}
                                 onChange={(e, value) => onChangeValue(value)} />
                </div>


            </div>
        </>
    );
}

export default HorizontalSlider;

