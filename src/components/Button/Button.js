import React from "react";
import "./Button.css";

const STYLES = ['btn--primary', 'btn--secondary'];

const Button = ({ children, type, onClick, buttonStyle, buttonSize, buttonColor, ...props }) => {
    //Se è stato definito uno stile del bottone inserisci lo stile altrimenti consideri il primo nell'array (btn primary)
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    //Creo un botton con le proprietà di stile, la proprietà di onClick e type. Children è il testo del bottone
    return (
        <button className={`btn ${checkButtonStyle}`} onClick={onClick} type={type} {...props}>
            {children}
        </button>
    );
};

export default Button;