import React, { Component } from 'react';
import Header from '../HeaderSection/Header';

const initData = {
    heading: "Forgot your password?",
    content: "Don't worry. Enter your email. We'll send you a password reset link to reset your password tempore repudiandae saepe aspernatur unde voluptate sapiente quia ex.",
    btnText: "Reset Password"
}

class Forgot extends Component {
    state = {
        initData: []
    }
    componentDidMount(){
        this.setState({
            initData: initData
        })
    }
    render() {
        return (
            <div className="inner inner-pages">
                <div className="main">
                    <Header imageData={"/img/logo-white.png"} />
                    <section className="section welcome-area bg-overlay subscribe-area h-100vh ptb_100">
                        <div className="container h-100">
                            <div className="row align-items-center justify-content-center h-100">
                                <div className="col-12 col-md-10 col-lg-8">
                                    <div className="subscribe-content text-center">
                                        <h1 className="text-white">{this.state.initData.heading}</h1>
                                        <p className="text-white my-4">{this.state.initData.content}</p>
                                        {/* Subscribe Form */}
                                        <form className="subscribe-form">
                                            <div className="form-group">
                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" />
                                            </div>
                                            <button type="submit" className="btn btn-lg btn-block">{this.state.initData.btnText}</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Forgot;