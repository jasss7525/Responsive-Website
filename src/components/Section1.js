import React from "react";
import phone from "../components/images/phone.png";
import heartoutline from "../components/images/heart-outline.png";
import bell from "../components/images/bell.png";
import wrench from "../components/images/wrench.png";
import "../components/Section1.css";

export default class Section1 extends React.Component {

    render() {
        return (
            <div className="section1-container">
                <div className="box-black">

                    <img src={phone} alt="posterimg" />
                    <h4>FullY RESPONSIVE</h4>
                    <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.It is a long  content of a page when looking at its layout. The point of using Lorem Ipsum is </p>
                </div>

                <div className="box-gray">
                    <img alt="heart" src={heartoutline}/>            
                    <h4>WITH LOVE</h4>
                    <p> It was popular sheets content of a page when containing consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem Ipsum passages, and more recently with desktop </p>
                </div>
            
                
                <div className="box-black">
                    <img src={wrench} alt="posterimg" />
                    <h4>ONE & MULTI PAGE</h4>
                    <p>There areconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. many majority have suffered alteration in some form, by injected humour, or randomised words </p>
                </div>

                <div className="box-gray">
                    <img src={bell} alt="posterimg" />
                    <h4>RETINA READY</h4>
                    <p>Many desktop page editors now use Lorem Ipsum as theirconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. default model text, and a search for 'lorem ipsum' </p>
                </div>

            </div>
        );
    }
}