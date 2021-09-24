import React, { Component } from 'react';
import Header from '../HeaderSection/Header';
import Breadcrumb from '../Blogs/Breadcrumb';
import PricingSection from '../PricingSection/PricingOne';
import FaqSection from '../FaqSection/FaqOne'
import FooterSection from '../FooterSection/Footer';

class Pricing extends Component {
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
                    <Breadcrumb title="Pricing" />
                    <PricingSection />
                    <FaqSection />
                    <FooterSection />
                </div>
            </div>
        );
    }
}

export default Pricing;