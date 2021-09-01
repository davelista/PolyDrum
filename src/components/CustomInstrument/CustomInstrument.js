import React from 'react';
import {Instrument} from "reactronica";

const CustomInstrument = React.memo(props => {
        const {samples} = props;
        console.log("PIPPO")

        return (
            <>
                <Instrument
                    type="sampler"
                    samples={samples}
                    /*onLoad={(buffers) => {
                        play.setLoad(true)
                    }}*/
                />

            </>
        );
    }
)

export default CustomInstrument;