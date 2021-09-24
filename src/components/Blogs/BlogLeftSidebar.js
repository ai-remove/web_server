import React, { Component } from 'react';
import Header from '../HeaderSection/Header';
import Breadcrumb from './Breadcrumb';
import Sidebar from './Sidebar';
import Blog from './Blog';
import FooterSection from '../FooterSection/FooterTwo';

class BlogLeftSidebar extends Component {
    render() {
        return (
            <div className="blog">
                {/*====== Scroll To Top Area Start ======*/}
                <div id="scrollUp" title="Scroll To Top">
                    <i className="fas fa-arrow-up" />
                </div>
                {/*====== Scroll To Top Area End ======*/}
                <div className="main">
                    <Header imageData={"/img/logo-white.png"} />
                    <Breadcrumb title="Blog - Left Sidebar" />
                    <section id="blog" className="section blog-area ptb_100">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-3">
                                    <Sidebar />
                                </div>
                                <div className="col-12 col-lg-9">
                                    <Blog />
                                </div>
                            </div>
                        </div>
                    </section>
                    <FooterSection />
                </div>
            </div>
        );
    }
}

export default BlogLeftSidebar;