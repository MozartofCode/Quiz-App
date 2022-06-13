import './Q2.css'
import React from 'react';
import { Outlet, Link } from "react-router-dom";


function Q2() {

    return (
      
      <div className="Q">
         
         <header className="Q-header">
       
            <p>How many colors are there in a rainbow?</p>
          

        <nav>
          <Link to = "/Wrong2">4</Link>
        </nav>

        
        <nav>
          <Link to = "/Wrong2">5</Link>
        </nav>

        
        <nav>
          <Link to = "/Wrong2">6</Link>
        </nav>

        
        <nav>
          <Link to = "/Correct2">7</Link>
        </nav>



          <Outlet />
          </header>
      </div>
    );
  }  

export default Q2;
