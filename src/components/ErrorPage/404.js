import React, { Component } from 'react';

const initData = {
    heading: "404",
    text: "The page you are looking for might have been removed had its name changed or is temporarily unavailable.",
    btnText: "Go to Homepage"
}

class ErrorPage extends Component {
    state = {
        initData: {}
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
                <section id="home" className="section welcome-area inner-area bg-overlay h-100vh overflow-hidden">
                    <div className="container h-100">
                        <div className="row align-items-center justify-content-center h-100">
                            <div className="col-12 col-md-7">
                                <div className="welcome-intro error-area text-center">
                                    <h1 className="text-white">{this.state.initData.heading}</h1>
                                    <p className="text-white my-4">{this.state.initData.text}</p>
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

export default ErrorPage;