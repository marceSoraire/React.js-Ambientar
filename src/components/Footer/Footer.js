import React from "react";
import './Footer.css';
import { IoLogoCss3,
    IoLogoHtml5,
    IoLogoJavascript,
    IoLogoLinkedin,
    IoLogoGithub,
    IoLogoReact,
    IoLogoSass
} from "react-icons/io5";

const Footer = () => {

    return (<div className="Footer">
        <div>
            <h3>Info Personal</h3>
            <h4>Soraire Marcelo</h4>
            <h4>Desarrollador web</h4>
            <h4>Rosario, Argentina</h4>
            
            
        </div>
        <div>
        <h3>Skills</h3>
            <IoLogoHtml5 className="lg"/>
            <IoLogoCss3 className="lg"/>
            <IoLogoSass className="lg"/>
            <IoLogoJavascript className="lg"/>
            <IoLogoReact className="lg"/>
            <IoLogoLinkedin className="lg"/>
            <IoLogoGithub className="lg"/>
            <h4>@Copyright</h4>
        </div>
        <div>
            <h3>CoderHouse</h3>
            <h4>Desarrollo web: Comision 24530</h4>
            <h4>JavaScript: Comision 25415</h4>
            <h4>React.Js: Comision 37745</h4>
        </div>
    </div>
    );
}

export default Footer;