import React, { Component } from 'react';
import Header from './../Header/Header.js';
class Contact extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isRedicrect: false,
            email: '',
            phone: '',
        }
    }
    isChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name] : value
        });
        console.log(name);
        console.log(value);
    }
    submitForm = (event) => {
        event.preventDefault();
        this.setState({ 
            isRedicrect:true
        });
    }

    render() {
        if (this.state.isRedicrect === true) {
            console.log(this.state);
            return(
                <Header title="Trang liên hệ" subTitle={"Cảm ơn bạn chúng tôi sẽ liên hệ lại với" + this.state.email}/>
            )
            
        }else {
            return (
                <div>
                    <Header title="Trang liên hệ" subTitle="Vui lòng liên hệ đến chúng tôi"/>
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4" >
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" onChange={(event) => this.isChange(event)} className="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter email" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Phone</label>
                                    <input type="text" onChange={(event) => this.isChange(event)} className="form-control" name="phone"  placeholder="Phone number" />
                                </div>
                                <div classname="form-group">
                                    <label />
                                        <select classname="form-control" name="sex">
                                        <option />
                                        <option />
                                        <option />
                                    </select>
                                </div>
                                
                                <button type="submit" onClick={(event) => this.submitForm(event)} className="btn btn-primary">Submit</button>
                            

                            </form>
                            
                        </div>
                        <div className="col-4"></div>
                    </div>
                </div>
            );
        }
    }
}

export default Contact;