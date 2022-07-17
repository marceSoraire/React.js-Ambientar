import React from "react";
import './Footer.css';
import Grid from '@mui/material/Grid';
import {
    IoLogoCss3,
    IoLogoHtml5,
    IoLogoJavascript,
    IoLogoLinkedin,
    IoLogoGithub,
    IoLogoReact,
    IoLogoSass
} from "react-icons/io5";

const Footer = () => {

    return (
        <div className="Footer">
            <Grid container>
                <Grid item xs={12} sm={4} md={4}>
                    <h3 className="titulo-footer">Info Personal</h3>
                    <h4 className="h4-footer">Soraire Marcelo</h4>
                    <h4 className="h4-footer">Desarrollador web</h4>
                    <h4 className="h4-footer">Rosario, Argentina</h4>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <h3 className="titulo-footer">Skills</h3>
                    <IoLogoHtml5 className="lg" />
                    <IoLogoCss3 className="lg" />
                    <IoLogoSass className="lg" />
                    <IoLogoJavascript className="lg" />
                    <IoLogoReact className="lg" />
                    <IoLogoLinkedin className="lg" />
                    <IoLogoGithub className="lg" />
                    <h4 className="h4-footer">@Copyright</h4>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <h3 className="titulo-footer">CoderHouse</h3>
                    <h4 className="h4-footer">Desarrollo web: Comision 24530</h4>
                    <h4 className="h4-footer">JavaScript: Comision 25415</h4>
                    <h4 className="h4-footer">React.Js: Comision 37745</h4>
                </Grid>
            </Grid>
        </div>
    );
}

export default Footer;