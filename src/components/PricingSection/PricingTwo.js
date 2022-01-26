import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/json-server/themeOnePricingSection";

class PricingSection extends Component {
    state = {
        data: {},
        pricingList: [],
        pricingData: []
    }
    componentDidMount(){
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    data: res.data,
                    pricingList: res.data.pricingList,
                    pricingData: res.data.pricingData
                })
                // console.log(this.state.data)
            })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <section id="pricing" className="section price-plan-area bg-gray overflow-hidden ptb_100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-7">
                            {/* Section Heading */}
                            <div className="section-heading text-center">
                                <h2>{this.state.data.heading}</h2>
                                <p className="d-none d-sm-block mt-4">{this.state.data.headingText}</p>
                                <p className="d-block d-sm-none mt-4">{this.state.data.headingTexttwo}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-10 col-lg-8">
                            <div className="row price-plan-wrapper">
                                {this.state.pricingData.map((item, idx) => {
                                    return(
                                        <div key={`p_${idx}`} className="col-12 col-md-6 mt-4">
                                            {/* Single Price Plan */}
                                            <div className="single-price-plan text-center p-5">
                                                {/* Plan Thumb */}
                                                <div className="plan-thumb">
                                                    <img className="avatar-lg" src={item.planImage} alt="" />
                                                </div>
                                                {/* Plan Title */}
                                                <div className="plan-title my-2 my-sm-3">
                                                    <h3 className="text-uppercase">{item.planTitle}</h3>
                                                </div>
                                                {/* Plan Price */}
                                                <div className="plan-price pb-2 pb-sm-3">
                                                    <h1 className="color-primary"><small className="fw-7">{item.priceSub}</small>{item.planPrice}</h1>
                                                </div>
                                                {/* Plan Description */}
                                                <div className="plan-description">
                                                    <ul className="plan-features">
                                                        <li className="border-top py-3">{item.li_1}</li>
                                                        <li className="border-top py-3">{item.li_2}</li>
                                                        <li className="border-top py-3">{item.li_3}</li>
                                                        <li className="border-top border-bottom py-3">{item.li_4}</li>
                                                    </ul>
                                                </div>
                                                {/* Plan Button */}
                                                <div className="plan-button">
                                                    <a href="/#" className="btn mt-4">{item.planBtn}</a>
                                                </div>
                                            </div>
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

export default PricingSection;