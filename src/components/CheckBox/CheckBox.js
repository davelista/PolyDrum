import React, {useState} from 'react';
import {Checkbox, FormControlLabel, FormGroup, withStyles} from "@material-ui/core";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const CheckBox = (props) => {
    const {label, id} = props;

    const [state, setState] = useState({
        checked: true
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const ColorCheckBox = withStyles({
        root: {
            color: "red",
            '&$checked': {
                color: "blue",
            },
        },
        checked: {},
    })((props) => <Checkbox color="default" {...props} />);

    return (
        <>
            <FormGroup row>
            <FormControlLabel
                control={
                    <ColorCheckBox
                        checked={state.checked}
                        onChange={handleChange}
                        icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                        checkedIcon={<CheckBoxIcon fontSize="small" />}
                        name="checked"
                    />
                }
                label={label}
            />
            </FormGroup>
        </>
    );
}

export default CheckBox;