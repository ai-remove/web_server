import React, { Component } from 'react';

import Header from '../components/HeaderSection/Header';
import HeroSection from '../components/HeroSection/HeroSix';
import FeatureSection from '../components/Features/FeatureSix';
import ServiceSection from '../components/ServiceSection/ServiceSix';
import DiscoverSection from '../components/DiscoverSection/DiscoverSix';
import BrandingSection from "../components/BrandingSection/Branding";
import Work from '../components/WorkSection/Work';
import ScreenshotSection from '../components/ScreenshotSection/ScreenshotsOne';
import ReviewSection from '../components/ReviewSection/ReviewOne';
import PricingSection from '../components/PricingSection/PricingOne';
import FaqSection from '../components/FaqSection/FaqOne';
import Download from '../components/DownloadSection/Download';
import Subscribe from '../components/SubscribeSection/Subscribe';
import Team from '../components/TeamSection/Team';
import ContactSection from '../components/ContactSection/Contact';
import FooterSection from '../components/FooterSection/Footer';

class ThemeSix extends Component {
    render() {
        return (
            <div className="homepage-6">
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
                    <BrandingSection />
                    <Work />
                    <ReviewSection />
                    <FeatureSection />
                    <ScreenshotSection />
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

export default ThemeSix;