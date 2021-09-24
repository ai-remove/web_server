import React, { Component } from 'react';

const initData = {
    preHeading: "Awesome",
    preHeadingspan: "Interface",
    heading: "Simple & Beautiful Interface",
    headingText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.",
    headingTexttwo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati."
}

const data = [
    {
        image: "/img/screenshot_1.jpg"
    },
    {
        image: "/img/screenshot_2.jpg"
    },
    {
        image: "/img/screenshot_3.jpg"
    },
    {
        image: "/img/screenshot_4.jpg"
    },
    {
        image: "/img/screenshot_5.jpg"
    }
]

class ScreenshotSection extends Component {
    state = {
        initData: {},
        data: []
    }
    componentDidMount(){
        this.setState({
            initData: initData,
            data: data
        })
    }
    render() {
        return (
            <section id="screenshots" className="section screenshots-area ptb_100">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-7">
                        {/* Section Heading */}
                        <div className="section-heading text-center">
                        <h2 className="text-capitalize">{this.state.initData.heading}</h2>
                        <p className="d-none d-sm-block mt-4">{this.state.initData.headingText}</p>
                        <p className="d-block d-sm-none mt-4">{this.state.initData.headingTexttwo}</p>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-12">
                        {/* App Screenshot Slider Area */}
                        <div className="app-screenshots">
                            {/* Single Screenshot Item */}
                            {data.map((item, idx) => {
                                return(
                                    <div key={`so_${idx}`} className="single-screenshot">
                                        <img src={item.image} alt="" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ScreenshotSection;