import './Q3.css'
import React from 'react';
import { Outlet, Link } from "react-router-dom";


function Q3() {

    return (
      
      <div className="Q">
         
         <header className="Q-header">
       
        <p>What is the Name of Harry Potter's pet owl?</p>
          
        <nav>
          <Link to = "/Wrong3">Gollum</Link>
        </nav>

        
        <nav>
          <Link to = "/Correct3">Hedwig</Link>
        </nav>

        
        <nav>
          <Link to = "/Wrong3">Pikachu</Link>
        </nav>

        
        <nav>
          <Link to = "/Wrong3">Owl</Link>
        </nav>





          <Outlet />
          </header>
      </div>
    );
  }  

export default Q3;
