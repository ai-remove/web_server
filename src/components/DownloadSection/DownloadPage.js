import React, { Component } from 'react';
import Header from '../HeaderSection/Header';

const initData = {
    heading: "Your download should begin automatically",
    content: "If it doesn’t start automatically, please click",
    link: "here",
    content_2: "to downlaod manually.",
    image: "/img/features_thumb.png"
}

class DownloadPage extends Component {
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
            <div className="homepage-2 download-page inner inner-pages">
                <div className="main">
                    <Header imageData={"/img/logo-white.png"} />
                    <section id="home" className="section welcome-area inner-area bg-overlay h-100vh overflow-hidden">
                        <div className="container h-100">
                            <div className="row align-items-center h-100">
                                {/* Welcome Intro Start */}
                                <div className="col-12 col-md-7">
                                    <div className="welcome-intro">
                                        <h1 className="text-white">{this.state.initData.heading}</h1>
                                        <p className="text-white mt-4">{this.state.initData.content} <a href="/#" className="text-white text-underlined">{this.state.initData.link}</a> {this.state.initData.content_2}</p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-5">
                                    {/* Welcome Thumb */}
                                    <div className="welcome-thumb">
                                        <img src={this.state.initData.image} alt="" />
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

export default DownloadPage;