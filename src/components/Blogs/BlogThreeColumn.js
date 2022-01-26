import React, { Component } from 'react';
import Header from '../HeaderSection/Header';
import Breadcrumb from './Breadcrumb';
import Blog from './BlogTwo';
import FooterSection from '../FooterSection/FooterTwo';

class BlogThreeColumn extends Component {
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
                    <Breadcrumb title="Blog - 3 Column" />
                    <section id="blog" className="section blog-area ptb_100">
                        <div className="container">
                            <Blog />
                        </div>
                    </section>
                    <FooterSection />
                </div>
            </div>
        );
    }
}

export default BlogThreeColumn;