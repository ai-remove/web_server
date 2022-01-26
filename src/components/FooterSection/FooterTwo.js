import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/json-server-1/themeOneFooterSection";

class FooterSection extends Component {
    state = {
        data: {},
        footerList_4: []
    }
    componentDidMount(){
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    data: res.data,
                    footerList_4: res.data.footerList_4
                })
                // console.log(this.state.data)
            })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <footer className="section inner-footer bg-gray ptb_100">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-6">
                        {/* Footer Items */}
                        <div className="footer-items text-center">
                        {/* Logo */}
                        <a className="navbar-brand" href="/#">
                            <img className="logo" src={this.state.data.image} alt="" />
                        </a>
                        <p className="mt-2 mb-3">{this.state.data.text}</p>
                        <ul className="d-flex flex-column flex-sm-row justify-content-between">
                            {this.state.footerList_4.map((item, idx) => {
                                return(
                                    <li key={`fl_${idx}`} className="py-2"><a href="/#">{item.text}</a></li>
                                );
                            })}
                        </ul>
                        {/* Copyright Area */}
                        <div className="copyright-area border-0 pt-3">
                            <p>Made with <i className="fas fa-heart" /> By <a href="/#">Theme Land</a></p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default FooterSection;