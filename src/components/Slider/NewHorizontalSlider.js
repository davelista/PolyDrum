import React, {useState} from 'react';
import styles from './Sliders.module.css'

function NewHorizontalSlider(props) {
    const [state, setState] = useState(50);

    const handleOnChange = (e) => {
        setState(e.target.value)
    }

    return (
        <>
            <div className={styles.container}>
                <input  type="range" min={0} max={100} value={state} onChange={handleOnChange} className={styles.slider}/>
                <div className={styles.value}>
                    {state}
                </div>
            </div>
        </>
    );
}

export default NewHorizontalSlider;