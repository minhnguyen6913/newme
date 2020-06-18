import React from 'react';
import './App.css';
import TopMenu from './Component/TopMenu/TopMenu.js';
import Header from './Component/Header/Header.js';
import Footer from './Component/Footer/Footer.js';
import Url_router from './router/Url_router.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="page">
        <TopMenu/>
        {/* <Header/> */}
        <Header/>
        <Url_router/>
        {/* <Content src="https://i.pcmag.com/imagery/reviews/069PhzykC3xUAFsH0VKc8rG-13.fit_lpad.size_624x364.v_1569471925.jpg"/>   */}
        {/* <Contact/> */}
        {/* <News/> */}
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
