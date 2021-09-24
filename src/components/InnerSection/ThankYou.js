import React, { Component } from 'react';
import Header from '../HeaderSection/Header';

const initData = {
    heading: "Thank you for downloading sApp",
    content: "We are continuously creating new stuff for sApp and trying to keep it up to date with the new technologies that might appear along the development process. We appreciate each of you who downloaded or purchased our theme and we take your suggestions into consideration every time.",
    btnText: "Go to Homepage"
}

class ThankYou extends Component {
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
            <div className="inner inner-pages">
                <div className="main">
                    <Header imageData={"/img/logo-white.png"} />
                    <section id="home" className="section welcome-area inner-area bg-overlay h-100vh overflow-hidden">
                        <div className="container h-100">
                            <div className="row align-items-center h-100">
                                <div className="col-12 col-md-8">
                                    <div className="welcome-intro">
                                        <h1 className="text-white">{this.state.initData.heading}</h1>
                                        <p className="text-white my-4">{this.state.initData.content}</p>
                                        <a href="/" className="btn sApp-btn text-uppercase">{this.state.initData.btnText}</a>
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

export default ThankYou;