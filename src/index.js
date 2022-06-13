import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { 
  BrowserRouter,
  Routes,
  Route, 
} from "react-router-dom";
import Q1 from "./Q1"
import Q2 from "./Q2"
import Q3 from "./Q3"
import Q4 from './Q4';
import Submit from "./Submit"
import Correct from './Correct'
import Wrong from "./Wrong"
import Wrong2 from "./Wrong2"
import Wrong3 from "./Wrong3"
import Wrong4 from "./Wrong4"
import Correct2 from './Correct2'
import Correct3 from './Correct3'
import Correct4 from "./Correct4"

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <BrowserRouter>
    <Routes>
    <Route path= "/" element={<App />} />
    <Route path= "Q1" element={<Q1 />} />
    <Route path= "Q2" element={<Q2 />} />
    <Route path= "Q3" element={<Q3 />} />
    <Route path= "Q4" element={<Q4 />} />
    <Route path= "Submit" element={<Submit />} />
    <Route path= "Correct" element={<Correct />} />
    <Route path= "Wrong" element={<Wrong />} />
    <Route path= "Wrong2" element={<Wrong2 />} />
    <Route path= "Wrong3" element={<Wrong3 />} />
    <Route path= "Wrong4" element={<Wrong4 />} />
    <Route path= "Correct2" element={<Correct2 />} />
    <Route path= "Correct3" element={<Correct3 />} />
    <Route path= "Correct4" element={<Correct4 />} />

    <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
    </Routes>
  </BrowserRouter>
);

