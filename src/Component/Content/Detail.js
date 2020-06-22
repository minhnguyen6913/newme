import React, { Component } from 'react'
import Header from './../Header/Header.js';
import data from './content.json'; 
export default class Detail extends Component {
    render() {
        return (
            <div>
                {
                    data.map((value,key) => {
                        if (value.id === this.props.match.params.id)  {
                            return (
                                <article>
                                    <Header title={value.title}/>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-8 col-md-10 mx-auto">
                                                {value.details}
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            )
                        }
                    })
                }
            </div>
            
        )
    }
}
