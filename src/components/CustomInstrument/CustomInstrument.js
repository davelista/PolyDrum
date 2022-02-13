import React from 'react';
import {Instrument} from "reactronica";

const CustomInstrument = React.memo(props => {
        const {samples} = props;

        return (
            <>
                <Instrument
                    type="sampler"
                    samples={samples}
                />

            </>
        );
    }
)

export default CustomInstrument;