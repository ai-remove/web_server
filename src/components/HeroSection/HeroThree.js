import React, { Component } from 'react';

const initData = {
    heading: "Showcase your",
    headingTwo: "App in easy way",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nihil tenetur minus quidem est deserunt molestias accusamus harum ullam tempore debitis et, expedita, repellat delectus aspernatur neque itaque qui quod.",
    btnText: "Start free trail",
    iconClass: "fas fa-play"
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
            <section id="home" className="section welcome-area bg-overlay d-flex align-items-center overflow-hidden">
                <div className="container">
                    <div className="row align-items-center">
                    {/* Welcome Intro Start */}
                    <div className="col-12 col-md-7 col-lg-6">
                        <div className="welcome-intro">
                        <h1 className="text-white">{this.state.data.heading}<br />{this.state.data.headingTwo}</h1>
                        <p className="text-white my-4">{this.state.data.content}</p>
                        {/* Subscribe Form */}
                        <div className="subscribe-form d-flex align-items-center">
                            <input type="email" className="form-control" placeholder="info@yourmail.com" />
                            <button type="submit" className="btn btn-bordered">{this.state.data.btnText}</button>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-5 col-lg-6">
                        {/* Welcome Thumb */}
                        <div className="welcome-thumb text-center mx-auto">
                        {/* Play Button */}
                        <a className="play-btn" data-fancybox href="https://www.youtube.com/watch?v=hs1HoLs4SD0">
                            <div className="btn-circle play-animation" />
                            <div className="btn-circle play-animation animation-short" />
                            {/* Play Icon */}
                            <div className="play-icon">
                                <i className={this.state.data.iconClass} />
                            </div>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Shape Bottom */}
                <div className="shape-bottom">
                    <svg fill="#fff" id="Layer_1" x="0px" y="0px" viewBox="0 0 1921 819.8" style={{enableBackground: 'new 0 0 1921 819.8'}} xmlSpace="preserve">
                    <path className="st0" d="M1921,413.1v406.7H0V0.5h0.4l228.1,598.3c30,74.4,80.8,130.6,152.5,168.6c107.6,57,212.1,40.7,245.7,34.4  c22.4-4.2,54.9-13.1,97.5-26.6L1921,400.5V413.1z" />
                    <path className="st1" d="M1921,387.9v431.9H0V0h13l226.6,594.4c14.4,35.7,34,67.4,58.3,94.3c24.4,26.9,54.2,49.8,88.6,68.1  c50.2,26.6,105.8,40.1,165.2,40.1c36.1,0,63.6-5.2,72.6-6.9c21.6-4,53.9-12.9,96.1-26.2L1921,387.9z" />
                    </svg>
                </div>
            </section>
        );
    }
}

export default HeroSection;