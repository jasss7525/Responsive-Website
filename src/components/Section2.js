import React from "react";
import "../components/Section2.css";

export default class Section2 extends React.Component{

    render(){

        return(
            <div className="Section2-container">
                <div className="about">
                    <h4>ABOUT<span className="color"> US</span></h4>
                    
                    
                    <p id="create"><span className="color">WE CREATE </span>AWESOME STUFF</p>
                </div>
                <div className="Parag">
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some don't look even slightly believable. If you are form</p>
                </div>
        
            </div>
        );
    }
}