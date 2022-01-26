import React, { Component } from 'react';

import Header from '../components/HeaderSection/Header';
import HeroSection from '../components/HeroSection/HeroFour';
import FeatureSection from '../components/Features/FeatureFour';
import ServiceSection from '../components/ServiceSection/ServiceFour';
import DiscoverSection from '../components/DiscoverSection/DiscoverFour';
import Work from '../components/WorkSection/Work';
import ScreenshotSection from '../components/ScreenshotSection/ScreenshotsTwo';
import ReviewSection from '../components/ReviewSection/ReviewTwo';
import PricingSection from '../components/PricingSection/PricingOne';
import FaqSection from '../components/FaqSection/FaqOne';
import Download from '../components/DownloadSection/Download';
import Subscribe from '../components/SubscribeSection/Subscribe';
import ContactSection from '../components/ContactSection/Contact';
import FooterSection from '../components/FooterSection/Footer';

class ThemeFour extends Component {
    render() {
        return (
            <div className="homepage-4">
                {/*====== Scroll To Top Area Start ======*/}
                <div id="scrollUp" title="Scroll To Top">
                    <i className="fas fa-arrow-up" />
                </div>
                {/*====== Scroll To Top Area End ======*/}
                <div className="main">
                    <Header imageData={"/img/logo-white.png"} />
                    <HeroSection />
                    <ServiceSection />
                    <DiscoverSection />
                    <FeatureSection />
                    <Work />
                    <ScreenshotSection />
                    <ReviewSection />
                    <PricingSection />
                    <FaqSection />
                    <Download />
                    <Subscribe />
                    <ContactSection />
                    <FooterSection />
                </div>
            </div>
        );
    }
}

export default ThemeFour;