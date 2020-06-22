import React, { Component } from 'react';
import Item from './Item.js';
import data from './content.json'; 
import Header from './../Header/Header.js';
class Content extends Component {
    render() {
        
        return (
            <div>
                 <Header title="Danh sách mục tiêu" subTitle="2020"/>
                <div className="container">
                    <div className="row mt-3">
                        {
                            data.map((value, key) => {
                                    return (
                                        <Item 
                                        key = {value.key}
                                        id={value.id} 
                                        img_url={value.img_url} 
                                        title={value.title} 
                                        description={value.description}
                                        
                                        />
                                    )
                                } 
                            )
                        }
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Content;