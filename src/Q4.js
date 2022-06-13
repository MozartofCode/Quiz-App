import './Q1.css'
import React from 'react';
import { Outlet, Link } from "react-router-dom";


function Q4() {

    return (
      
      <div className="Q">
         
         <header className="Q-header">
       
        <p>What year was the first superbowl played?</p>
          
        <nav>
          <Link to = "/Wrong4">1970</Link>
        </nav>

        
        <nav>
          <Link to = "/Wrong4">1969</Link>
        </nav>

        
        <nav>
          <Link to = "/Wrong4">1968</Link>
        </nav>

        
        <nav>
          <Link to = "/Correct4">1967</Link>
        </nav>



          <Outlet />
          </header>
      </div>
    );
  }  

export default Q4;
