import React, { Component } from 'react';
import Header from '../HeaderSection/Header';
import Breadcrumb from '../Blogs/Breadcrumb';
import FaqSection from '../FaqSection/FaqOne'
import FooterSection from '../FooterSection/Footer';

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
    },
    {
        id: "4",
        avatorImg: "/img/avatar-4.png",
        reviewer: "Johnson Smith",
        post: "SEO Expert",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis nam id facilis, provident doloremque placeat eveniet molestias laboriosam. Optio, esse.",
        comments: "Best coding quality",
        quotIcon: "/img/quote.png",
        icon_1: "fas fa-star text-warning",
        icon_2: "fas fa-star text-warning",
        icon_3: "fas fa-star text-warning",
        icon_4: "fas fa-star text-warning",
        icon_5: "fas fa-star text-warning"
    },
    {
        id: "5",
        avatorImg: "/img/avatar-3.png",
        reviewer: "Johnson Smith",
        post: "SEO Expert",
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
        id: "6",
        avatorImg: "/img/avatar-3.png",
        reviewer: "Johnson Smith",
        post: "SEO Expert",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis nam id facilis, provident doloremque placeat eveniet molestias laboriosam. Optio, esse.",
        comments: "Easy documentation, Thanks!",
        quotIcon: "/img/quote.png",
        icon_1: "fas fa-star text-warning",
        icon_2: "fas fa-star text-warning",
        icon_3: "fas fa-star text-warning",
        icon_4: "fas fa-star text-warning",
        icon_5: "fas fa-star text-warning"
    },
    {
        id: "7",
        avatorImg: "/img/avatar-4.png",
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
    },
    {
        id: "8",
        avatorImg: "/img/avatar-1.png",
        reviewer: "Johnson Smith",
        post: "SEO Expert",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis nam id facilis, provident doloremque placeat eveniet molestias laboriosam. Optio, esse.",
        comments: "Easy documentation, Thanks!",
        quotIcon: "/img/quote.png",
        icon_1: "fas fa-star text-warning",
        icon_2: "fas fa-star text-warning",
        icon_3: "fas fa-star text-warning",
        icon_4: "fas fa-star text-warning",
        icon_5: "fas fa-star text-warning"
    },
    {
        id: "9",
        avatorImg: "/img/avatar-3.png",
        reviewer: "Johnson Smith",
        post: "SEO Expert",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis nam id facilis, provident doloremque placeat eveniet molestias laboriosam. Optio, esse.",
        comments: "Great Coding!",
        quotIcon: "/img/quote.png",
        icon_1: "fas fa-star text-warning",
        icon_2: "fas fa-star text-warning",
        icon_3: "fas fa-star text-warning",
        icon_4: "fas fa-star text-warning",
        icon_5: "fas fa-star text-warning"
    }
]

class Reviews extends Component {
    state = {
        data: []
    }
    componentDidMount(){
        this.setState({
            data: data
        })
    }
    render() {
        return (
            <div>
                {/*====== Scroll To Top Area Start ======*/}
                <div id="scrollUp" title="Scroll To Top">
                    <i className="fas fa-arrow-up" />
                </div>
                {/*====== Scroll To Top Area End ======*/}
                <div className="main">
                    <Header imageData={"/img/logo-white.png"} />
                    <Breadcrumb title="Reviews" />
                    <section className="review-area ptb_100">
                        <div className="container">
                            <div className="row">
                                {this.state.data.map((item, idx) => {
                                    return(
                                        <div key={`ro_${idx}`} className="col-12 col-md-6 col-lg-4 mb-lg-5 res-margin">
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
                    <FaqSection />
                    <FooterSection />
                </div>
            </div>
        );
    }
}

export default Reviews;