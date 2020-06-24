import React, { Component } from 'react'
import Header from '../core/header.js';
import axios from 'axios';

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
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th>ID</th>
                                    <th>Họ và tên</th>
                                    <th>Mã nhân viên</th>
                                    <th>Ngày sinh</th>
                                    <th>Điện thoại</th>
                                    <th>Địa chỉ</th>
                                </tr>
                            </thead>
                            <tbody> 
                                {
                                    item.list.map( (value, key) =>{
                                        return (
                                            <tr key={key}>
                                                <td>{stt ++}</td>
                                                <td>{value.nhansu_lastname + ' ' + value.nhansu_firstname}</td>
                                                <td>{value.nhansu_code?value.nhansu_code:"-"}</td>
                                                <td>{value.nhansu_birthday}</td>
                                                <td>{value.nhansu_phone}</td>
                                                <td>{value.nhansu_address?value.nhansu_address:"-"}</td>
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
