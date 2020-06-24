import React, { Component } from 'react'
import Header from '../core/header.js';
import axios from 'axios';

const api = axios.create({
    baseURL: `http://api.local/tochuc/nhansu/getallns/`
})


 
export default class Nhansu extends Component {
    constructor (props) {
        super(props);
        this.state = {
            item:[],
            isLoaded: false,
            postId : null
        }
        
    }
    componentDidMount() {
        this.getDataAxios();
        }
    
        async getDataAxios(){
            
                await axios.post("http://api.local/tochuc/nhansu/getallns/")
                    .then(res =>  {
                        this.setState({ 
                            isLoaded : true,
                            item : res.data,
                        })
                    });
                console.log(this.state)
        }
    render() {
        var { isLoaded, item} = this.state;
        var stt = 1;
        if (!isLoaded) {
            return(
                <div>
                    <Header title="Super news"/>
                    <div> Loading </div>
                </div>
            ) 
        } else {
            return (
                <div>
                    <Header title="Danh sách nhân sự"/>
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
                                    item.list.map( (value, key) =>{
                                        return (
                                            <tr key={key}>
                                                <td>{stt ++}</td>
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
}
