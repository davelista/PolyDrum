import React from 'react';
import {Instrument} from "reactronica";

const CustomInstrument = React.memo(props => {
        const {samples} = props;

        return (
            <>
                <Instrument
                    type="sampler"
                    samples={samples}
                    onLoad={(buffers) => {
                        // Runs when all samples are loaded
                    }}
                />

            </>
        );
    }
)

export default CustomInstrument;