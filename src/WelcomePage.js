import './WelcomePage.css';
import gameLogo from './logo.png'
import React from 'react';
import { Outlet, Link } from "react-router-dom";

function WelcomePage() {
  
  return (
    <div className="Welcome">
       <img src={gameLogo} alt = "" />
      <header className="Welcome-header">
  
        <p>
          Click GO to start!
        </p>

        <nav>
        <Link to="/Q1">GO</Link>
        </nav>

        <Outlet />
        </header>
    </div>
  );
}


export default WelcomePage;