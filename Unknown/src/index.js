//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function App(){
    const [greeting, setGreeting] = useState("");
    //const [color, setColor] = useState("");
    const [headingClass, setHeadingClass] = useState("");
    useEffect(() => {
        if (new Date().getHours() >= 0 && new Date().getHours() < 12) {
            setGreeting("Good morning");
            //setColor("red");
            setHeadingClass("heading-morning");
        } else if (new Date().getHours() >= 12 && new Date().getHours() < 18) {
            setGreeting("Good afternoon");
            //setColor("green");
            setHeadingClass("heading-afternoon");
            
        } else {
            setGreeting("Good evening");
            //setColor("blue");
            setHeadingClass("heading-evening");
        }      
    });

    return (
        <div>
            <h1 className={headingClass}>{greeting}</h1>
        </div>      
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
