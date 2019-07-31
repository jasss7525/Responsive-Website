import React from "react";
import "../components/TopNav.css"
import Footer from "./Footer";


export default class TopNav extends React.Component {

    render() {
        return (
            <div className="Fullpage">
                <div className="Top-Nav-Container">
                    <div className="Navigation">
                        <div className="Top-Nav-Btn">
                            <button><a href="#">KANTER</a></button>
                        </div>
                        <div className="Navbar">
                            <nav>

                                <a href="#">HOME</a>
                                <a href="#">PAGES</a>
                                <a href="#">ABOUT</a>
                                <a href="#">SERVICES</a>
                                <a href="#">OUR WORKS</a>
                                <a href="#">SKILLS</a>
                                <a href="#">CONTACT</a>

                            </nav>
                        </div>
                        <div className="heading-big">
                            <p className="headings" id="big">PIXEL <span id="perfect">PERFECT</span></p>
                            <p id="small">say hello to the smartest and most flexible bootstrap template</p>
                            <button className="Start-btn">GET STARTED</button>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        
        );
    }
}
