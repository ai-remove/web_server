import React, { Component } from 'react';
import {Link} from "react-router-dom"

const initData = {
    heading: "New way of creating your content",
    content: "AI.Remove - the web service that allows you to remove background from your videos and handle it as you want",
    headingSlug: "* Available on iPhone, iPad and all Android devices",
    playImg: "/img/google-play.png",
    appleImg: "/img/app-store.png",
    heroThumb: "/img/welcome_mockup.gif"
}

class HeroSection extends Component {
    state = {
        data: {}
    }
    componentDidMount(){
        this.setState({
            data: initData
        })
    }
    render() {
        return (
            <section id="home" className="section welcome-area bg-overlay overflow-hidden d-flex align-items-center">
                <div className="container">
                    <div className="row align-items-center">
                    {/* Welcome Intro Start */}
                    <div className="col-12 col-md-7 col-lg-6">
                        <div className="welcome-intro">
                        <h1 className="text-white">{this.state.data.heading}</h1>
                        <p className="text-white my-4">{this.state.data.content}</p>
                        {/* Store Buttons */}
                        <div className="button-group store-buttons d-flex">
                            <a href="/#">
                            <img src={this.state.data.playImg} alt="" />
                            </a>
                            <a href="/#">
                            <img src={this.state.data.appleImg} alt="" />
                            </a>
                        </div>
                            <span className="d-inline-block text-white fw-3 font-italic mt-3">{this.state.data.headingSlug}</span>
                        </div>
                    </div>
                    <div className="col-12 col-md-5 col-lg-6">
                        {/* Welcome Thumb */}
                        <div className="welcome-thumb mx-auto">

                            {/* probably needs to be done better!!!!*/}
                            <Link to="/show-image">
                                <img src={this.state.data.heroThumb} alt="" /> 
                            </Link>

                        </div>
                    </div>
                    </div>
                </div>
                <div className="shape-bottom">
                <svg viewBox="0 0 1920 310" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="svg replaced-svg">
                    <title>sApp Shape</title>
                    <desc>Created with Sketch</desc>
                    <defs />
                    <g id="sApp-Landing-Page" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                    <g id="sApp-v1.0" transform="translate(0.000000, -554.000000)" fill="#FFFFFF">
                        <path d="M-3,551 C186.257589,757.321118 319.044414,856.322454 395.360475,848.004007 C509.834566,835.526337 561.525143,796.329212 637.731734,765.961549 C713.938325,735.593886 816.980646,681.910577 1035.72208,733.065469 C1254.46351,784.220361 1511.54925,678.92359 1539.40808,662.398665 C1567.2669,645.87374 1660.9143,591.478574 1773.19378,597.641868 C1848.04677,601.75073 1901.75645,588.357675 1934.32284,557.462704 L1934.32284,863.183395 L-3,863.183395" id="sApp-v1.0" />
                    </g>
                    </g>
                </svg>
                </div>
            </section>
        );
    }
}

export default HeroSection;