import React, { Component } from 'react';

import Header from '../components/HeaderSection/Header';
import HeroSection from '../components/HeroSection/HeroTwo';
import FeatureSection from '../components/Features/FeatureTwo';
import ServiceSection from '../components/ServiceSection/ServiceTwo';
import DiscoverSection from '../components/DiscoverSection/DiscoverTwo';
import Work from '../components/WorkSection/Work';
import ScreenshotSection from '../components/ScreenshotSection/ScreenshotsTwo';
import ReviewSection from '../components/ReviewSection/ReviewTwo';
import PricingSection from '../components/PricingSection/PricingOne';
import FaqSection from '../components/FaqSection/FaqTwo';
import Download from '../components/DownloadSection/Download';
import Subscribe from '../components/SubscribeSection/Subscribe';
import ContactSection from '../components/ContactSection/Contact';
import FooterSection from '../components/FooterSection/Footer';

class ThemeTwo extends Component {
    render() {
        return (
            <div className="homepage-2">
                {/*====== Scroll To Top Area Start ======*/}
                <div id="scrollUp" title="Scroll To Top">
                    <i className="fas fa-arrow-up" />
                </div>
                {/*====== Scroll To Top Area End ======*/}
                <div className="main">
                    <Header imageData={"/img/logo.png"} />
                    <HeroSection />
                    <FeatureSection />
                    <DiscoverSection />
                    <ServiceSection />
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

export default ThemeTwo;