import React, { Component } from 'react';
import ContactForm from './ContactForm';
import Header from '../HeaderSection/Header';
import Breadcrumb from '../Blogs/Breadcrumb';
import FooterSection from '../FooterSection/Footer';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/json-server-1/themeOneContactSection";

class ContactPage extends Component {
    state = {
        data: {},
        iconList: []
    }
    componentDidMount(){
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    data: res.data,
                    iconList: res.data.iconList
                })
                // console.log(this.state.data)
            })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <div className="contact-page">
                {/*====== Scroll To Top Area Start ======*/}
                <div id="scrollUp" title="Scroll To Top">
                    <i className="fas fa-arrow-up" />
                </div>
                {/*====== Scroll To Top Area End ======*/}
                <div className="main">
                    <Header imageData={"/img/logo-white.png"} />
                    <Breadcrumb title="Contact Us" />
                    <section id="contact" className="contact-area ptb_100">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-md-10 col-lg-6">
                                    {/* Section Heading */}
                                    <div className="section-heading">
                                        <h2 className="text-capitalize">{this.state.data.heading}</h2>
                                        <p className="d-none d-sm-block mt-4">{this.state.data.headingText}</p>
                                        <p className="d-block d-sm-none mt-4">{this.state.data.headingTexttwo}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-between">
                                <div className="col-12 col-md-5">
                                    {/* Contact Us */}
                                    <div className="contact-us">
                                        <p className="mb-3">{this.state.data.content}</p>
                                        <ul>
                                            {this.state.iconList.map((item, idx) => {
                                                return(
                                                    <li key={`ci_${idx}`} className="py-2">
                                                        <a className="media" href="/#">
                                                            <div className="social-icon mr-3">
                                                                <i className={item.iconClass} />
                                                            </div>
                                                            <span className="media-body align-self-center">{item.text}</span>
                                                        </a>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 pt-4 pt-md-0">
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*====== Map Area Start ======*/}
                    <section className="section map-area">
                        <iframe title="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.596666220624!2d-0.16124461362595294!3d51.46556134684942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605a25375dfb7%3A0xe0d9fa09dcf932a8!2s15%20Theatre%20St%2C%20Battersea%2C%20London%20SW11%205ND%2C%20UK!5e0!3m2!1sen!2sbd!4v1567427969685!5m2!1sen!2sbd" style={{border: 0}} allowFullScreen width={100} height={100} />
                    </section>
                    {/*====== Map Area End ======*/}
                    <FooterSection />
                </div>
            </div>
        );
    }
}

export default ContactPage;