import React from "react";
import correctAnswer from "./correctAnswer.png"
import "./Correct.css"
import { Outlet, Link } from "react-router-dom";

function Correct3() {

    return(

        <div className= "Correct">
        
        <header className="Correct-header">
        
        <p>Correct Answer!</p>


        <img src={correctAnswer} alt = "" />
        
        
        <nav>
        <Link to="/Q4">Next Question</Link>
        </nav>

        <Outlet />

        </header>

        </div>
        
    
    );
}



export default Correct3;