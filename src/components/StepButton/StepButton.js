import React, {useState} from 'react';
import styles from './StepButton.module.css'

const StepButton = (props) => {
    const [active, setActive] = useState(false);
    const {children} = props
    return (
        <>
            <div className={active ? styles.active : styles.container} onClick={() => setActive(!active)}>
                {children}
            </div>

        </>
    );
}

export default StepButton;