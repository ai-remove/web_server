import React, { Component } from 'react';
import Header from '../HeaderSection/Header';

const initData = {
    heading: "Subscribe to get updates!",
    content: "By subscribing, you are agree to our terms & conditions. Majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    btnText: "Subscribe"
}

class SubscribePage extends Component {
    state = {
        initData: []
    }
    componentDidMount(){
        this.setState({
            initData: initData
        })
    }
    render() {
        return (
            <div className="homepage-3 inner inner-pages">
                <div className="main">
                    <Header imageData={"/img/logo-white.png"} />
                    <section id="home" className="section welcome-area inner-area bg-overlay h-100vh overflow-hidden">
                        <div className="container h-100">
                            <div className="row align-items-center justify-content-center h-100">
                            <div className="col-12 col-md-7">
                                <div className="welcome-intro text-center">
                                    <h1 className="text-white">{this.state.initData.heading}</h1>
                                    <p className="text-white my-4">{this.state.initData.content}</p>
                                    {/* Subscribe Form */}
                                    <div className="subscribe-form d-flex align-items-center mx-auto">
                                        <input type="email" className="form-control" placeholder="Enter your Email" />
                                        <button type="submit" className="btn btn-bordered">{this.state.initData.btnText}</button>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default SubscribePage;