import React from "react";
import wrongAnswer from "./wrongAnswer.png"
import "./Correct.css"
import { Outlet, Link } from "react-router-dom";

function Wrong() {

    return(

        <div className= "Correct">
        
        <header className="Correct-header">
        
        <p>Wrong Answer!</p>


        <img src={wrongAnswer} alt = "" />
        
        
        <nav>
        <Link to="/Q1">TRY AGAIN</Link>
        </nav>

        <Outlet />

        </header>

        </div>
        
    );
}

export default Wrong;