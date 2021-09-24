import React, { Component } from 'react';

const initData = {
    heading: "Capture and share your best memories with sApp",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nihil tenetur minus quidem est deserunt molestias accusamus harum ullam tempore debitis et, expedita, repellat delectus aspernatur neque itaque qui quod.",
    headingSlug: "* Available on iPhone, iPad and all Android devices",
    playImg: "/img/google-play.png",
    appleImg: "/img/app-store.png"
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
                    <div className="row align-items-center justify-content-center">
                    {/* Welcome Intro Start */}
                    <div className="col-12 col-md-7 col-lg-8">
                        <div className="welcome-intro text-center">
                        <h1 className="text-white">{this.state.data.heading}</h1>
                        <p className="text-white my-4">{this.state.data.content}</p>
                        <div className="welcome-bottom">
                            {/* Store Buttons */}
                            <div className="button-group store-buttons d-flex justify-content-center">
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
                    </div>
                    </div>
                </div>
                {/* Shape Bottom */}
                <div className="shape-bottom">
                    <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path className="fill" d="M0,6V0h1000v100L0,6z" />
                    </svg>
                </div>
            </section>
        );
    }
}

export default HeroSection;