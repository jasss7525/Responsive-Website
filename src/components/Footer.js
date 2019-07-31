import React from "react";
import "../components/Footer.css";



export default class Footer extends React.Component {
    render() {
        return(
            <div className="footer-container">
                <div className="content">
                    <p id="services">OUR <span id="service">SERVICES</span></p>
                    <div id="line"></div>
                    </div>
                    
                    <div className="services-para">
                    <p >Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years.</p>
                    </div>
                    <div className="footer-flex-container">
                        <div className="flex-content">
                            <div className="Branding">
                                <h3>Branding</h3>
                                <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will</p>
                            </div>
                            <div className="Branding">
                                <h3>Web design</h3>
                                <p>aken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actua</p>
                            </div>
                            <div className="Branding">
                                <h3>Graphic design</h3>
                                <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks r</p>
                            </div>
                            <div className="Branding">
                                <h3>Development</h3>
                                <p> pleasure  how all this mistaken idea of denouncing pleaain was born and I will give you a complete account of the system, and expound the actua</p>
                            </div>
                        </div>
                        </div>                   
                   
                    </div>

        );
    }
}