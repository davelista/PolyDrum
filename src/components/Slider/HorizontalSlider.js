import React, {useEffect, useState} from 'react';
import {makeStyles, Slider, Typography, withStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import styles from "./Sliders.module.css";


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
        marginRight: "1rem",
        "&:hover":{
            cursor: "pointer",
        }
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

    const handleOnChange = (e) =>{
        onChangeValue(e.target.value)
    }
    return (
        <>

                <div className={styles.container}>
                    <div className={classes.icon}> {/* icon of volume */}
                        <Grid item>
                            <div onClick={() => {
                                onChangeMute(!mute);
                            }}>{icon}</div>
                        </Grid>
                    </div>
                    <input  type="range" min={0} max={100} value={volumeValue}
                            className={styles.slider}
                            onChange={handleOnChange}
                    />
                    <div className={styles.value}>
                        {volumeValue}
                    </div>
                </div>
        </>
    );
}

export default HorizontalSlider;

