import React, { Component } from 'react';

const initData = {
    heading: "What our customers are saying",
    headingText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.",
    headingTexttwo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati."
}

const data = [
    {
        id: "1",
        avatorImg: "/img/avatar-1.png",
        reviewer: "Junaid Hasan",
        post: "CEO, Themeland",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis nam id facilis, provident doloremque placeat eveniet molestias laboriosam. Optio, esse.",
        comments: "Excellent service & support!!",
        quotIcon: "/img/quote.png",
        icon_1: "fas fa-star text-warning",
        icon_2: "fas fa-star text-warning",
        icon_3: "fas fa-star text-warning",
        icon_4: "fas fa-star text-warning",
        icon_5: "fas fa-star text-warning"
    },
    {
        id: "2",
        avatorImg: "/img/avatar-2.png",
        reviewer: "Jassica William",
        post: "Web Designer",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis nam id facilis, provident doloremque placeat eveniet molestias laboriosam. Optio, esse.",
        comments: "Nice work! Keep it up",
        quotIcon: "/img/quote.png",
        icon_1: "fas fa-star text-warning",
        icon_2: "fas fa-star text-warning",
        icon_3: "fas fa-star text-warning",
        icon_4: "fas fa-star text-warning",
        icon_5: "fas fa-star-half-alt text-warning"
    },
    {
        id: "3",
        avatorImg: "/img/avatar-3.png",
        reviewer: "Johnson Smith",
        post: "SEO Expert",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis nam id facilis, provident doloremque placeat eveniet molestias laboriosam. Optio, esse.",
        comments: "Great support!!",
        quotIcon: "/img/quote.png",
        icon_1: "fas fa-star text-warning",
        icon_2: "fas fa-star text-warning",
        icon_3: "fas fa-star text-warning",
        icon_4: "fas fa-star text-warning",
        icon_5: "fas fa-star text-warning"
    }
]

class ReviewSection extends Component {
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
            <section id="review" className="review-area ptb_100">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8">
                        {/* Section Heading */}
                        <div className="section-heading text-center">
                        <h2 className="text-capitalize">{this.state.initData.heading}</h2>
                        <p className="d-none d-sm-block mt-4">{this.state.initData.headingText}</p>
                        <p className="d-block d-sm-none mt-4">{this.state.initData.headingTexttwo}</p>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                        {this.state.data.map((item, idx) => {
                            return(
                                <div key={`ro_${idx}`} className="col-12 col-md-6 col-lg-4 res-margin">
                                    {/* Single Review */}
                                    <div className="single-review card">
                                    {/* Card Top */}
                                    <div className="card-top p-4">
                                        <div className="review-icon">
                                            <i className={item.icon_1} />
                                            <i className={item.icon_2} />
                                            <i className={item.icon_3} />
                                            <i className={item.icon_4} />
                                            <i className={item.icon_5} />
                                        </div>
                                        <h4 className="text-primary mt-4 mb-3">{item.comments}</h4>
                                        {/* Review Text */}
                                        <div className="review-text">
                                            <p>{item.text}</p>
                                        </div>
                                        {/* Quotation Icon */}
                                        <div className="quot-icon">
                                            <img className="avatar-md" src={item.quotIcon} alt="" />
                                        </div>
                                    </div>
                                    {/* Reviewer */}
                                    <div className="reviewer media bg-gray p-4">
                                        {/* Reviewer Thumb */}
                                        <div className="reviewer-thumb">
                                            <img className="avatar-lg radius-100" src={item.avatorImg} alt="" />
                                        </div>
                                        {/* Reviewer Media */}
                                        <div className="reviewer-meta media-body align-self-center ml-4">
                                            <h5 className="reviewer-name color-primary mb-2">{item.reviewer}</h5>
                                            <h6 className="text-secondary fw-6">{item.post}</h6>
                                        </div>
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

export default ReviewSection;