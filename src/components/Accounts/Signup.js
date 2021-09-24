import React, { Component, useState } from 'react';
import Header from '../HeaderSection/Header';
import axios from 'axios';
import { useHistory, Redirect } from 'react-router-dom';

const initData = {
    heading: "Create an account!",
    content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.",
    formHeading: "Sign Up",
    formContent: "Fill all fields so we can get some info about you. We'll never send you spam",
    formText: "Already have an account?",
    btnText: "Sign Up",
    btnText_2: "Sign In"
}


class Signup extends Component {
    constructor(props){
        super(props)
        this.state = {
            initData: [],
            email: null,
            password: null,
            name: null,
            loggedIn: false
        }

        this.handleChange=this.handleChange.bind(this)
        this.submit=this.submit.bind(this)
    }

    

    handleChange(event){
        let name = event.target.name;
        let value = event.target.value;
        console.log(name,value);
        let data = {};
        data[name] = value;
        this.setState(data);
    }

    componentDidMount(){
        this.setState({
            initData: initData
        })
    }

    submit(e) {
        this.setState({loggedIn:true})
        e.preventDefault();

        //sending uploaded foreground image to flask 
        axios.post("http://localhost:5000/api/signup", {email:this.state.email, password:this.state.password,name:this.state.name})
        .then((response) => { //setting state if post was successful
            console.log(response.data);
        });


    }

    render() {
        if(this.state.loggedIn){ return <Redirect to="/"/>}
        return (
            <div className="accounts inner-pages signup">
                <div className="main">
                    <Header imageData={"/img/logo-white.png"} />
                    <section id="home" className="section welcome-area h-100vh bg-overlay d-flex align-items-center">
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                {/* Welcome Intro Start */}
                                <div className="col-12 col-lg-7">
                                    <div className="welcome-intro">
                                        <h1 className="text-white">{this.state.initData.heading}</h1>
                                    </div>
                                </div>
                                <div className="col-12 col-md-8 col-lg-5">
                                    {/* Contact Box */}
                                    <div className="contact-box bg-white text-center rounded p-4 p-sm-5 mt-5 mt-lg-0 shadow-lg">
                                    {/* Contact Form */}
                                    <form id="contact-form">
                                        <div className="contact-top">
                                            <h3 className="contact-title">{this.state.initData.formHeading}</h3>
                                            <h5 className="text-secondary fw-3 py-3">{this.state.initData.formContent}</h5>
                                        </div>
                                        <form onSubmit={this.submit}>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text"><i className="fas fa-user-alt" /></span>
                                                        </div>
                                                        <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleChange} placeholder="name" required="required" />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text"><i className="fas fa-envelope-open" /></span>
                                                        </div>
                                                        <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.handleChange} placeholder="email" required="required" />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text"><i className="fas fa-unlock-alt" /></span>
                                                        </div>
                                                        <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChange} placeholder="password" required="required" />
                                                    </div>
                                                </div>
                                                <div className="form-group form-check">
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                    <label className="form-check-label contact-bottom" htmlFor="exampleCheck1"><span className="d-inline-block mt-3">By signing up, you accept our <a href="/#">Terms</a> &amp; <a href="/#">Privacy Policy</a></span></label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button className="btn btn-bordered w-100 mt-3" value="Submit" type="submit">{this.state.initData.btnText}</button>
                                            </div>
                                            <div className="col-12">
                                                <span className="d-block pt-2 mt-4 border-top">{this.state.initData.formText} <a href="/Login">{this.state.initData.btnText_2}</a></span>
                                            </div>
                                        </div>
                                        </form>
                                    </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*need to perform better pixelization using npn install */}
                        {/* Shape Bottom */}
                        <div className="shape-bottom">
                            <svg viewBox="0 0 1920 310" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="svg replaced-svg">
                                <title>sApp Shape</title>
                                <desc>Created with Sketch</desc>
                                <defs />
                                <g id="sApp-Landing-Page" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                    <g id="sApp-v1.0" transform="translate(0.000000, -554.000000)" fill="#FFFFFF">
                                    <path d="M-3,551 C186.257589,757.321118 319.044414,856.322454 395.360475,848.004007 C509.834566,835.526337 561.525143,796.329212 637.731734,765.961549 C713.938325,735.593886 816.980646,681.910577 1035.72208,733.065469 C1254.46351,784.220361 1511.54925,678.92359 1539.40808,662.398665 C1567.2669,645.87374 1660.9143,591.478574 1773.19378,597.641868 C1848.04677,601.75073 1901.75645,588.357675 1934.32284,557.462704 L1934.32284,863.183395 L-3,863.183395" id="sApp-v1.0" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Signup;