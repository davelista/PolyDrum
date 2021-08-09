import React from 'react';
import styles from './StepButton.module.css'

const StepButton = (props) => {
    const {children} = props
    return (
        <>
            <div className={styles.container}>
                {children}
            </div>

        </>
    );
}

export default StepButton;