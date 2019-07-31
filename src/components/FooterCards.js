import React from "react";
import "../components/FooterCards.css";


export default class FooterCards extends React.Component{

    render(){
        return(
            <div className="wrapper">
                <div className="cards-heading">
                    <h2>Contact Us</h2>
                </div>
                <div className="footercards">
            <div className="cards">
                <h2>Fully Responsive</h2>
                <p> ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.It is a long using Lorem Ipsum is </p>
            </div>
            
            <div className="cards">
                <h2>Web Design</h2>
                <p> et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.It is a long using Lorem Ipsum is </p>
            </div>
            
            <div className="cards">
                <h2>Graphic Design</h2>
                <p>eiusmod tempor incididunt exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.It is a long using Lorem Ipsum is </p>
            </div>
            
            <div className="cards">
                <h2>Web Design</h2>
                <p>incidienim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.It is a long using Lorem Ipsum is </p>
            </div>
                
            </div>
            </div>
        );
    }
}