import React, { Component } from 'react';

import Header from '../components/HeaderSection/Header';
import HeroSection from '../components/HeroSection/HeroFive';
import FeatureSection from '../components/Features/FeatureFive';
import ServiceSection from '../components/ServiceSection/ServiceFive';
import DiscoverSection from '../components/DiscoverSection/DiscoverFive';
import Work from '../components/WorkSection/Work';
import ScreenshotSection from '../components/ScreenshotSection/ScreenshotsTwo';
import ReviewSection from '../components/ReviewSection/ReviewTwo';
import PricingSection from '../components/PricingSection/PricingOne';
import FaqSection from '../components/FaqSection/FaqOne';
import Download from '../components/DownloadSection/Download';
import Subscribe from '../components/SubscribeSection/Subscribe';
import Team from '../components/TeamSection/Team';
import ContactSection from '../components/ContactSection/Contact';
import FooterSection from '../components/FooterSection/Footer';

class ThemeFive extends Component {
    render() {
        return (
            <div className="homepage-5">
                {/*====== Scroll To Top Area Start ======*/}
                <div id="scrollUp" title="Scroll To Top">
                    <i className="fas fa-arrow-up" />
                </div>
                {/*====== Scroll To Top Area End ======*/}
                <div className="main">
                    <Header imageData={"/img/logo-white.png"} />
                    <HeroSection />
                    <FeatureSection />
                    <DiscoverSection />
                    <ServiceSection />
                    <Work />
                    <ScreenshotSection />
                    <ReviewSection />
                    <PricingSection />
                    <FaqSection />
                    <Team />
                    <Download />
                    <Subscribe />
                    <ContactSection />
                    <FooterSection />
                </div>
            </div>
        );
    }
}

export default ThemeFive;