import React, { Component } from 'react';

class Header extends Component {
    
    render() {
        return (
            <header className="masthead text-center text-white">
                <div className="masthead-content">
                    <div className="container">
                        <h1 className="masthead-heading mb-0">{this.props.title}</h1>
                        <h2 className="masthead-subheading mb-0">{this.props.subTitle}</h2>
                    </div>
                </div>
                <div className="bg-circle-1 bg-circle" />
                <div className="bg-circle-2 bg-circle" />
                <div className="bg-circle-3 bg-circle" />
                <div className="bg-circle-4 bg-circle" />
            </header>
        );
    }
    
}

export default Header;