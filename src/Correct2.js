import React from "react";
import correctAnswer from "./correctAnswer.png"
import "./Correct.css"
import { Outlet, Link } from "react-router-dom";

function Correct2() {

    return(

        <div className= "Correct">
        
        <header className="Correct-header">
        
        <p>Correct Answer!</p>


        <img src={correctAnswer} alt = "" />
        
        
        <nav>
        <Link to="/Q3">Next Question</Link>
        </nav>

        <Outlet />

        </header>

        </div>
        
    
    );
}



export default Correct2;