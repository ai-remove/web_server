import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// importing all the themes
import ThemeOne from "../themes/theme-one";
import ThemeTwo from "../themes/theme-two";
import ThemeThree from '../themes/theme-three';
import ThemeFour from "../themes/theme-four";
import ThemeFive from "../themes/theme-five";
import ThemeSix from "../themes/theme-six";
import BlogTwoColumn from "../components/Blogs/BlogTwoColumn";
import BlogThreeColumn from "../components/Blogs/BlogThreeColumn";
import BlogLeftSidebar from "../components/Blogs/BlogLeftSidebar";
import BlogRightSidebar from "../components/Blogs/BlogRightSidebar";
import BlogDetailsLeftSidebar from "../components/Blogs/BlogDetailsLeftSidebar";
import BlogDetailsRightSidebar from "../components/Blogs/BlogDetailsRightSidebar";
import Reviews from "../components/ReviewSection/Reviews";
import Pricing from "../components/PricingSection/Pricing";
import DownloadPage from "../components/DownloadSection/DownloadPage";
import SubscribePage from "../components/SubscribeSection/SubscribePage";
import ThankYou from "../components/InnerSection/ThankYou";
import ComingSoon from "../components/InnerSection/ComingSoon";
import Login from "../components/Accounts/Login";
import Signup from "../components/Accounts/Signup";
import Forgot from "../components/Accounts/Forgot";
import Home from "../components/Accounts/Home";
import Faq from "../components/FaqSection/Faq";
import ErrorPage from "../components/ErrorPage/404";
import ContactPage from "../components/ContactSection/ContactPage";
import ShowImage from "../components/ShowImage/ShowImage";
import ReviewSection from '../components/ReviewSection/ReviewOne';
import Header from '../components/HeaderSection/Header';



class MyRouts extends React.Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={ThemeOne}/>
            <Route path="/theme-two" component={ThemeTwo} />
            <Route path="/theme-three" component={ThemeThree} />
            <Route path="/theme-four" component={ThemeFour} />
            <Route path="/theme-five" component={ThemeFive} />
            <Route path="/theme-six" component={ThemeSix} />
            <Route path="/blog-two-column" component={BlogTwoColumn} />
            <Route path="/blog-three-column" component={BlogThreeColumn} />
            <Route path="/blog-left-sidebar" component={BlogLeftSidebar} />
            <Route path="/blog-right-sidebar" component={BlogRightSidebar} />
            <Route path="/blog-details-left-sidebar" component={BlogDetailsLeftSidebar} />
            <Route path="/blog-details-right-sidebar" component={BlogDetailsRightSidebar} />
            <Route path="/reviews" component={Reviews} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/download-page" component={DownloadPage} />
            <Route path="/subscribe-page" component={SubscribePage} />
            <Route path="/thank-you" component={ThankYou} />
            <Route path="/coming-soon" component={ComingSoon} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/forgot" component={Forgot} />
            <Route path="/home" component={Home} />
            <Route path="/faq" component={Faq} />
            <Route path="/error-page" component={ErrorPage} />
            <Route path="/contact-page" component={ContactPage} />
            <Route path="/show-image" component={ShowImage} />
            <Route path="/reviews" component={ReviewSection} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default MyRouts;