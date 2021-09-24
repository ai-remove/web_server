import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Header extends Component {
    _GoToLoginLink = () => {
        document.getElementById('account_link_login').click();
    }

    _GoToSignupLink = () => {
        document.getElementById('account_link_signup').click();
    }

    render() {
        return (
            <header className="navbar navbar-sticky navbar-expand-lg navbar-dark">
                <div className="container position-relative">
                    <a className="navbar-brand" href="/">
                        <img className="navbar-brand-regular" src={this.props.imageData} alt="brand-logo" />
                        <img className="navbar-brand-sticky" style={{ height: '20%', width: '50%' }} src="/img/logo.png" alt="sticky brand-logo" />
                    </a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="navbarToggler" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="navbar-inner">
                        {/*  Mobile Menu Toggler */}
                        <button className="navbar-toggler d-lg-none" type="button" data-toggle="navbarToggler" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <nav>
                            <ul className="navbar-nav" id="navbar-nav">
                                {/*
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Home
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li>
                                            <a className="dropdown-item" href="/">Homepage-1</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/theme-two">Homepage-2</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/theme-three">Homepage-3</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/theme-four">Homepage-4</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/theme-five">Homepage-5</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/theme-six">Homepage-6</a>
                                        </li>
                                    </ul>
                                </li>
                                */}
                                <li className="nav-item">
                                    <a className="nav-link scroll" href="#work">Features</a>
                                </li>
                                {/*
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Pages
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="/#" data-toggle="dropdown">Inner Pages<span className="badge badge-pill badge-warning ml-2">New</span></a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="/pricing">Pricing</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/download-page">Download</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/subscribe-page">Newsletter</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/thank-you">Thank you</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/coming-soon">Coming Soon</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/error-page">404</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="/#" data-toggle="dropdown">Blog Pages</a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="/blog-two-column">Blog- 2 Column</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/blog-three-column">Blog- 3 Column</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/blog-left-sidebar">Blog- Left Sidebar</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/blog-right-sidebar">Blog- Right Sidebar</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="/#" data-toggle="dropdown">Blog Details</a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="/blog-details-left-sidebar">Blog Details- Left Sidebar</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/blog-details-right-sidebar">Blog Details- Right Sidebar</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="/#" data-toggle="dropdown">Accounts<span className="badge badge-pill badge-warning ml-2">New</span></a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="/login">Login</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/signup">Signup</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/forgot">Reset Password</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/reviews">Reviews</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/faq">FAQ</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/contact-page">Contact</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item disabled" href="/#">More Coming Soon</a>
                                        </li>
                                    </ul>
                                </li>
                                */}
                                <li className="nav-item">
                                    <a className="nav-link scroll" href="#review">Feedbacks</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link scroll" href="#pricing">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link scroll" href="#contact">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link scroll" href="" onClick={this._GoToLoginLink}>Login</a>
                                    <Link id="account_link_login" to="/login" style={{display:'none'}}>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link scroll" href="" onClick={this._GoToSignupLink}>Sign Up</a>
                                    <Link id="account_link_signup" to="/signup" style={{display:'none'}}>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
        </header>
        );
    }
}

export default Header;