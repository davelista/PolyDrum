import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        height: 300,
    },
});

function valuetext(value) {
    return `${value}°C`;
}

const marks = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 20,
        label: '20°C',
    },
    {
        value: 37,
        label: '37°C',
    },
    {
        value: 100,
        label: '100°C',
    },
];

export default function VerticalSlider(props) {
    const {title, defaultValue, onChangeValue} = props;
    return (
        <React.Fragment>
            <Typography id="vertical-slider" gutterBottom>
                {title}
            </Typography>
            <div style={{height:"300px"}}>
                <Slider
                    orientation="vertical"
                    getAriaValueText={valuetext}
                    defaultValue={defaultValue}
                    aria-labelledby="vertical-slider"
                    marks={marks}
                    onChange={(e, value) => onChangeValue(value)}
                />
            </div>
        </React.Fragment>
    );
}
