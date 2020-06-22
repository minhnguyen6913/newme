import React, { Component } from 'react';
import {
    Link
    } from "react-router-dom";
class Item extends Component {
    render() {
        return (
            <div className="col-4">
                <div className="card-desk">
                    <div className="card">
                        <Link to={'/detail/' + this.props.id}><img className="card-img-top" src={this.props.img_url} alt="Targe 1" style={{width: '345px', height: '275px', margin: '0px'}}/></Link>
                        <div className="card-body">
                            <h4 className="card-title">{this.props.title}</h4>
                            <p className="subheading">{this.props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Item;