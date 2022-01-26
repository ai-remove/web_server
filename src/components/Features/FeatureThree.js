import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/sapp/themeOneFeatureSection";

class FeatureSection extends Component {
    state = {
        data: {},
        featureData: [],
        featureData_1: []
    }
    componentDidMount(){
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    data: res.data,
                    featureData: res.data.featureData,
                    featureData_1: res.data.featureData_1
                })
                // console.log(this.state.data)
            })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <section id="features" className="section features-area overflow-hidden ptb_100">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-6">
                        {/* Section Heading */}
                        <div className="section-heading text-center">
                        <h2>{this.state.data.headingThree}</h2>
                        <p className="d-none d-sm-block mt-4">{this.state.data.headingText}</p>
                        <p className="d-block d-sm-none mt-4">{this.state.data.headingTexttwo}</p>
                        </div>
                    </div>
                    </div>
                    <div className="row align-items-center">
                    <div className="col-12 col-md-6 col-lg-4">
                        {/* Features Item */}
                        <ul className="features-item">
                            {this.state.featureData.map((item, idx) => {
                                return(
                                    <li key={`fth_${idx}`}>
                                        {/* Image Box */}
                                        <div className="image-box media px-1 py-3 py-md-4">
                                        {/* Featured Image */}
                                        <div className="featured-img mr-3">
                                            <img className="avatar-sm" src={item.image} alt="" />
                                        </div>
                                        {/* Icon Text */}
                                        <div className="icon-text media-body align-self-center align-self-md-start">
                                            <h3 className="mb-2">{item.title}</h3>
                                            <p>{item.text}</p>
                                        </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="col-12 col-lg-4 d-none d-lg-block">
                        {/* Featutes Thumb */}
                        <div className="features-thumb text-center">
                        <img src={this.state.data.featureThumb} alt="" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        {/* Features Item */}
                        <ul className="features-item">
                            {this.state.featureData_1.map((item, idx) => {
                                return(
                                    <li key={`ftho_${idx}`}>
                                        {/* Image Box */}
                                        <div className="image-box media px-1 py-3 py-md-4">
                                        {/* Featured Image */}
                                        <div className="featured-img mr-3">
                                            <img className="avatar-sm" src={item.image} alt="" />
                                        </div>
                                        {/* Icon Text */}
                                        <div className="icon-text media-body align-self-center align-self-md-start">
                                            <h3 className="mb-2">{item.title}</h3>
                                            <p>{item.text}</p>
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