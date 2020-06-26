import React from 'react';
import './App.css';
import TopMenu from './component/core/topMenu.js';

import Footer from './component/core/footer.js';
import UrlRouter from './router/urlrouter.js';
import {
  BrowserRouter as Router,
} from "react-router-dom";


class App extends React.Component {
  
  render() {
    return (
      <div>
        <div>
      <Router>
        <div className="page">
          
          <TopMenu/>
          <UrlRouter/>
          <Footer/>
          
        </div>
      </Router>
    </div>
      </div>
    );
  }
}



export default App;
