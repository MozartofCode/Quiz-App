import './Submit.css'
import React from 'react';
import { Outlet, Link } from "react-router-dom";
import finished from "./finished.png"

function Submit() {

    return (
      
      <div className="Submit">
         
         <header className="Submit-header">
       
        <p>Congratulations you finished the QUIZ!!!</p>
        
        <img src = {finished} alt = ""/>

        <nav>
        <Link to="/">Go Back to Home</Link>
        </nav>


          <Outlet />
          </header>
      </div>
    );
  }  

export default Submit;
