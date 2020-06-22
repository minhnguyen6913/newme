import React, { Component } from 'react'
import Content from './../Component/Content/Content.js';
import Contact from './../Component/Content/Contact.js';
import Detail from './../Component/Content/Detail.js';
import News from './../Component/Content/News.js';

import {
    Route
} from "react-router-dom";
export default class Url_router extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Content}/>
                <Route exact path="/news" component={News}/> 
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/detail/:id" component={Detail}/>
            </div>
        )
    }
}
