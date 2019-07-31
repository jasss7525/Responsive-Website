import React from "react";
import "../components/Section3.css";
import cube from "../components/images/cube.jpg"
import insta from "../components/images/insta.png";
import internet from "../components/images/internet.png";

export default class Section3 extends React.Component {

    render() {
        return (
            <div className="about-flex-container">
                <div className="about-flex-content">
                    <div className="about-flex1">
                        {/* <img id="img-cube" src={internet} alt="cube"/> */}
                        <p className="flex-header">WEB<span id="spans"> DEVELOPMENT</span></p>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed. </p>
                    </div>
                
                <div className="about-flex2">
                    {/* <img id="insta" src={insta} rel="insta" /> */}
                    <p className="flex-header">CONTEXT <span id="spans">DVERTISING</span></p>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of leing 'Content here, conten</p>
                </div>
                    <div className="about-flex3">
                        {/* <img id="internet" src={internet} rel="internet" /> */}
                        <p className="flex-header">INTERNET <span id="spans">MARKETING</span></p>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using</p>
                    </div>
            </div>
            </div>
        );
    }
}