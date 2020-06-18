import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                <section className="page-section clearfix">
                    <div className="container">
                    <div className="intro">
                        <img className="intro-img img-fluid mb-3 mb-lg-0 rounded" src="https://startbootstrap.github.io/startbootstrap-business-casual/img/intro.jpg" alt="for demo" />
                        <div className="intro-text left-0 text-center bg-faded p-5 rounded">
                        <h2 className="section-heading mb-4">
                            <span className="section-heading-upper">Fresh Coffee</span>
                            <span className="section-heading-lower">Worth Drinking</span>
                        </h2>
                        <p className="mb-3">Every cup of our quality artisan coffee starts with locally sourced, hand picked ingredients. Once you try it, our coffee will be a blissful addition to your everyday morning routine - we guarantee it!
                        </p>
                        <div className="intro-button mx-auto">
                            <a className="btn btn-primary btn-xl" href="/">Visit Us Today!</a>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Contact;