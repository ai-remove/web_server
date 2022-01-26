import React, { Component } from 'react';
import Header from '../HeaderSection/Header';
import Breadcrumb from './Breadcrumb';
import Sidebar from './Sidebar';
import BlogDetails from './BlogDetails';
import FooterSection from '../FooterSection/FooterTwo';

class BlogDetailsRightSidebar extends Component {
    render() {
        return (
            <div className="blog blog-right">
                {/*====== Scroll To Top Area Start ======*/}
                <div id="scrollUp" title="Scroll To Top">
                    <i className="fas fa-arrow-up" />
                </div>
                {/*====== Scroll To Top Area End ======*/}
                <div className="main">
                    <Header imageData={"/img/logo-white.png"} />
                    <Breadcrumb title="Blog Details - Right Sidebar" />
                    <section id="blog" className="section blog-area ptb_100">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-9">
                                    <BlogDetails />
                                </div>
                                <div className="col-12 col-lg-3">
                                    <Sidebar />
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

export default BlogDetailsRightSidebar;