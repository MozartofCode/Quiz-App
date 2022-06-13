import './Q1.css'
import React from 'react';
import { Outlet, Link } from "react-router-dom";

function Q1() {

    return (
      
      <div className="Q">

        <header className="Q-header">
       
          <p>Who was the 16th President of the United States?</p>

        <nav>
          <Link to = "/Correct">Abraham Lincoln</Link>
        </nav>

        
        <nav>
          <Link to = "/Wrong">George Washington</Link>
        </nav>

        
        <nav>
          <Link to = "/Wrong">Andrew Jackson</Link>
        </nav>

        
        <nav>
          <Link to = "/Wrong">Bill Clinton</Link>
        </nav>


        <Outlet />
        </header>
        </div>
  );
}  


export default Q1;
