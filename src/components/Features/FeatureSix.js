import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/sapp/themeOneFeatureSection";

class FeatureSection extends Component {
    state = {
        data: {},
        featureDataTwo: []
    }
    componentDidMount(){
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    data: res.data,
                    featureDataTwo: res.data.featureDataTwo
                })
                // console.log(this.state.data)
            })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <section id="features" className="section features-area bg-gray ptb_100">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-6">
                        {/* Section Heading */}
                        <div className="section-heading text-center">
                        <h2>{this.state.data.headingFour}</h2>
                        <p className="d-none d-sm-block mt-4">{this.state.data.headingText}</p>
                        <p className="d-block d-sm-none mt-4">{this.state.data.headingTexttwo}</p>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    {this.state.featureDataTwo.map((item, idx) => {
                        return(
                            <div key={`ft_${idx}`} className="col-12 col-md-6 col-lg-4">
                                {/* Icon Box */}
                                <div className="icon-box text-center p-4">
                                {/* Featured Icon */}
                                <div className="featured-icon mb-3">
                                    <span className={item.iconClass} />
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