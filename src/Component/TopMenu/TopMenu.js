import React, { Component } from 'react';
import {
    NavLink,
    } from "react-router-dom";

class TopMenu extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
                    <div className="container"> 
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    
                                    <NavLink className="nav-link" to="/">Home</NavLink>
                                </li>
                                
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/news">Danh sách nhân sự</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default TopMenu;