import React, { Component } from 'react';
import Header from '../HeaderSection/Header';
import Breadcrumb from '../Blogs/Breadcrumb';
import FaqSection from '../FaqSection/FaqOne'
import DownloadSection from '../DownloadSection/Download';
import ContactSection from '../ContactSection/Contact';
import FooterSection from '../FooterSection/Footer';

class Faq extends Component {
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
                    <Breadcrumb title="FAQ" />
                    <FaqSection />
                    <DownloadSection />
                    <ContactSection />
                    <FooterSection />
                </div>
            </div>
        );
    }
}

export default Faq;