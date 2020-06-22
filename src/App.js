import React from 'react';
import './App.css';
import TopMenu from './Component/TopMenu/TopMenu.js';

import Footer from './Component/Footer/Footer.js';
import Url_router from './router/Url_router.js';
import {
  BrowserRouter as Router,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="page">
        <TopMenu/>
        <Url_router/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
