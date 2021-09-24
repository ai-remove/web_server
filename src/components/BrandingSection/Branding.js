import React, { Component } from 'react';

const initData = {
    heading: "Where have we been mentioned",
    headingText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.",
    headingTexttwo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati."
}

const data = [
    {
        id: "1",
        image: "/img/brand_thumb_1.png"
    },
    {
        id: "2",
        image: "/img/brand_thumb_2.png"
    },
    {
        id: "3",
        image: "/img/brand_thumb_3.png"
    },
    {
        id: "4",
        image: "/img/brand_thumb_4.png"
    },
    {
        id: "5",
        image: "/img/brand_thumb_5.png"
    },
    {
        id: "6",
        image: "/img/brand_thumb_6.png"
    }
]

class BrandingSection extends Component {
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
            <section className="branding-area ptb_100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8">
                            {/* Section Heading */}
                            <div className="section-heading text-center">
                            <h2>{this.state.initData.heading}</h2>
                            <p className="d-none d-sm-block mt-4">{this.state.initData.headingText}</p>
                            <p className="d-block d-sm-none mt-4">{this.state.initData.headingTexttwo}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* Branding Slider */}
                        <div className="branding-slider owl-carousel op-5">
                            {/* Single Brand */}
                            {this.state.data.map((item, idx) => {
                                return(
                                    <div key={`b_${idx}`} className="single-brand p-3">
                                        <img src={item.image} alt="" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default BrandingSection;