import React, { Component } from 'react';

const initData = {
    heading: "Why Small Business Owner's Loves sApp",
    headingText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.",
    headingTexttwo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati."
}

const data = [
    {
        image: "/img/featured_image_1.png",
        title: "Fully functional",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos."
    },
    {
        image: "/img/featured_image_2.png",
        title: "Live Chat",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos."
    },
    {
        image: "/img/featured_image_3.png",
        title: "Secure Data",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos."
    },
    {
        image: "/img/featured_image_4.png",
        title: "Easy to Customize",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos."
    }
]

const imageData = [
    {
        id: "1",
        image: "/img/screenshot_1.jpg"
    },
    {
        id: "2",
        image: "/img/screenshot_2.jpg"
    },
    {
        id: "3",
        image: "/img/screenshot_3.jpg"
    },
    {
        id: "4",
        image: "/img/screenshot_4.jpg"
    }
]

class FeatureSection extends Component {
    state = {
        initData: {},
        data: [],
        imageData: []
    }
    componentDidMount(){
        this.setState({
            initData: initData,
            data: data,
            imageData: imageData
        })
    }
    render() {
        return (
            <section id="features" className="section features-area overflow-hidden mt-5 ptb_100">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-6">
                        {/* Section Heading */}
                        <div className="section-heading text-center">
                        <h2>{this.state.initData.heading}</h2>
                        <p className="d-none d-sm-block mt-4">{this.state.initData.headingText}</p>
                        <p className="d-block d-sm-none mt-4">{this.state.initData.headingTexttwo}</p>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="features-slider-wrapper overflow-hidden">
                        {/* Work Slider */}
                        <ul className="features-slider owl-carousel">
                            {this.state.imageData.map((item, idx) => {
                                return(
                                    <li key={`fi_${idx}`} className="slide-item">
                                        <img src={item.image} alt="" />
                                    </li>
                                );
                            })}
                        </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 pt-4 pt-md-0">
                        <ul className="features-item">
                            {this.state.data.map((item, idx) => {
                                return(
                                    <li key={`ff_${idx}`}>
                                        {/* Image Box */}
                                        <div className="image-box media icon-1 px-1 py-3 py-md-4">
                                        {/* Featured Image */}
                                        <div className="featured-img mr-3">
                                            <img className="avatar-sm" src={item.image} alt="" />
                                        </div>
                                        {/* Icon Text */}
                                        <div className="icon-text media-body align-self-center align-self-md-start">
                                            <h3 className="mb-2">{item.title}</h3>
                                            <p>{item.content}</p>
                                        </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FeatureSection;