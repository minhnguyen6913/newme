import React, { Component } from 'react'
import Content from './../Component/Content/Content.js';
import Contact from './../Component/Content/Contact.js';
import News from './../Component/Content/News';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
export default class Url_router extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Content}/>
                <Route exact path="/news" component={News}/> 
                <Route exact path="/contact" component={Contact}/>
            </div>
        )
    }
}
