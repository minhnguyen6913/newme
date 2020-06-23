import React from 'react';
import './App.css';
import TopMenu from './Component/TopMenu/TopMenu.js';

import Footer from './Component/Footer/Footer.js';
import UrlRouter from './router/UrlRouter.js';
import {
  BrowserRouter as Router,
} from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <div className="page">
          <TopMenu/>
          <UrlRouter/>
          <Footer/>
        </div>
      </Router>
    </div>
    
  );
}

export default App;
