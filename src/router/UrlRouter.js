import React, { Component } from 'react';
import Nhansu from './../component/container/nhansu.js';
import {
    Route
} from "react-router-dom";

export default class UrlRouter extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Nhansu}/>
                {/* <Route exact path="/" component={Content}/>
                <Route exact path="/news" component={News}/> 
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/detail/:id" component={Detail}/> */}
            </div>
        )
    }
}
