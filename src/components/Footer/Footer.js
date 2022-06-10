//rafce = para crear el fichero automatico

import React from "react";
import './Footer.css';

const Footer = ({ title, subtitle, text }) => {

    return (<div className="Footer">

        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <p>{text}</p>
    </div>
    );
}

export default Footer;