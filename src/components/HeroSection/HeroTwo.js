import React, { Component } from 'react';

const initData = {
    heading: "Creative way to Showcase your App",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus commodi, voluptate quaerat iure quidem expedita eos a blanditiis sint modi est error veniam facere eum at doloribus amet, nobis ut.",
    btnText: "Get Started",
    heroThumb: "/img/features_thumb.png"
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
            <section id="home" className="section welcome-area bg-inherit h-100vh overflow-hidden">
                <div className="shapes-container">
                    <div className="bg-shape" />
                </div>
                <div className="container h-100">
                    <div className="row align-items-center h-100">
                    {/* Welcome Intro Start */}
                    <div className="col-12 col-md-7">
                        <div className="welcome-intro">
                        <h1>{this.state.data.heading}</h1>
                        <p className="my-4">{this.state.data.content}</p>
                        <a href="/#" className="btn">{this.state.data.btnText}</a>
                        </div>
                    </div>
                    <div className="col-12 col-md-5">
                        {/* Welcome Thumb */}
                        <div className="welcome-thumb">
                        <img src={this.state.data.heroThumb} alt="" />
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HeroSection;