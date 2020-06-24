import React from 'react';
import './App.css';
import TopMenu from './component/core/topMenu.js';

import Footer from './component/core/footer.js';
import UrlRouter from './router/urlrouter.js';
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
