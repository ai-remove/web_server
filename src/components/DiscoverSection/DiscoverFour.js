import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/sapp/themeOneServiceSection";

class DiscoverSection extends Component {
    state = {
        data: {},
        serviceData: []
    }
    componentDidMount(){
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    data: res.data,
                    serviceData: res.data.serviceData
                })
                // console.log(this.state.data)
            })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <section className="section discover-area bg-gray overflow-hidden ptb_100">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-md-8 col-lg-6 order-2 order-lg-1">
                        {/* Discover Thumb */}
                        <div className="service-thumb discover-thumb mx-auto text-center pt-5 pt-lg-0">
                        <img src={this.state.data.thumbSix} alt="" />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 order-1 order-lg-2">
                        {/* Discover Text */}
                        <div className="discover-text pt-4 pt-lg-0 px-0 px-lg-4">
                        <h2 className="pb-4">{this.state.data.headingSix}</h2>
                        {/* Service List */}
                        <ul className="service-list style-two">
                            {/* Single Service */}
                            {this.state.serviceData.map((item, idx) => {
                                return(
                                    <li key={`dfl_${idx}`} className="single-service py-2">
                                        <div className="service-text">
                                            <p>{item.text}</p>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default DiscoverSection;