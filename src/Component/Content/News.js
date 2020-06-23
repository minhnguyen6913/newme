import React, { Component } from 'react'
import Header from './../Header/Header.js';
import nhansu from './nhansu.json'; 
import axios from 'axios';

 
export default class News extends Component {
    constructor (props) {
        super(props);
        this.state = {
            item:[],
            isLoaded: false,
            postId : null
        }
        
    }
    componentWillMount() {
        this.getDataAxios();
        }
    
        async getDataAxios(){
            const response =
                await axios.post("http://api.local/tochuc/nhansu/getallns/")
            console.log(response.data)
        }
    render() {
        

        return (
            <div>
                <Header title="Super news"/>
                    <table className="table table-striped table-inverse table-responsive">
                        <thead className="thead-inverse">
                            <tr>
                                <th>ID</th>
                                <th>Họ và tên</th>
                                <th>Ngày sinh</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                nhansu.list.map( (value, key) =>{
                                    return (
                                        <tr key={key}>
                                            <td>{value.nhansu_id}</td>
                                            <td>{value.nhansu_lastname + ' ' + value.nhansu_firstname}</td>
                                            <td>{value.nhansu_birthday}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
            </div>  
                
        )
    }
}
