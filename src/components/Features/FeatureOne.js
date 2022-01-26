import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/sapp/themeOneFeatureSection";

class FeatureSection extends Component {
    state = {
        data: {},
        featureData: []
    }
    componentDidMount(){
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    data: res.data,
                    featureData: res.data.featureData
                })
                // console.log(this.state.data)
            })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <section id="features" className="section features-area style-two overflow-hidden ptb_100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-7">
                            {/* Section Heading */}
                            <div className="section-heading text-center">
                                <span className="d-inline-block rounded-pill shadow-sm fw-5 px-4 py-2 mb-3">
                                    <i className="far fa-lightbulb text-primary mr-1" />
                                    <span className="text-primary">{this.state.data.preHeading}</span> {this.state.data.preHeadingspan}
                                </span>
                                <h2>{this.state.data.heading}</h2>
                                <p className="d-none d-sm-block mt-4">{this.state.data.headingText}</p>
                                <p className="d-block d-sm-none mt-4">{this.state.data.headingTexttwo}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {this.state.featureData.map((item, idx) => {
                            return(
                                <div key={`fo_${idx}`} className="col-12 col-md-6 col-lg-4 res-margin">
                                    {/* Image Box */}
                                    <div className="image-box text-center icon-1 p-5">
                                    {/* Featured Image */}
                                    <div className="featured-img mb-3">
                                        <img className="avatar-sm" src={item.image} alt="" />
                                    </div>
                                    {/* Icon Text */}
                                    <div className="icon-text">
                                        <h3 className="mb-2">{item.title}</h3>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }
}

export default FeatureSection;