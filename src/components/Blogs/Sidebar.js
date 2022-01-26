import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/json-server-2/themeOneSidebarData";

class Sidebar extends Component {
    state = {
        data: {},
        widgetData_1: [],
        widgetData_2: [],
        widgetData_3: []
    }
    componentDidMount(){
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    data: res.data,
                    widgetData_1: res.data.widgetData_1,
                    widgetData_2: res.data.widgetData_2,
                    widgetData_3: res.data.widgetData_3
                })
                // console.log(this.state.data)
            })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                <aside className="sidebar">
                    {/* Single Widget */}
                    <div className="single-widget">
                        {/* Search Widget */}
                        <div className="widget-content search-widget">
                        <form action="#">
                            <input type="text" placeholder="Enter your keywords" />
                        </form>
                        </div>
                    </div>
                    {/* Single Widget */}
                    <div className="single-widget">
                        {/* Category Widget */}
                        <div className="accordions widget catagory-widget" id="cat-accordion">
                        <div className="single-accordion blog-accordion">
                            <h5>
                            <a role="button" className="collapse show text-uppercase d-block p-3" data-toggle="collapse" href="#accordion1">{this.state.data.widgetTitle_1}
                            </a>
                            </h5>
                            {/* Category Widget Content */}
                            <div id="accordion1" className="accordion-content widget-content collapse show" data-parent="#cat-accordion">
                                {/* Category Widget Items */}
                                <ul className="widget-items">
                                    {this.state.widgetData_1.map((item, idx) => {
                                        return(
                                            <li key={`wdo_${idx}`}><a href="/#" className="d-flex p-3"><span>{item.text}</span><span className="ml-auto">{item.content}</span></a></li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Single Widget */}
                    <div className="single-widget">
                        {/* Post Widget */}
                        <div className="accordions widget post-widget" id="post-accordion">
                        <div className="single-accordion">
                            <h5>
                            <a role="button" className="collapse show text-uppercase d-block p-3" data-toggle="collapse" href="#accordion2">{this.state.data.widgetTitle_2}
                            </a>
                            </h5>
                            {/* Post Widget Content */}
                            <div id="accordion2" className="accordion-content widget-content collapse show" data-parent="#post-accordion">
                                {/* Post Widget Items */}
                                <ul className="widget-items">
                                    {this.state.widgetData_2.map((item, idx) => {
                                        return(
                                            <li key={`wdt_${idx}`}>
                                                <a href="/#" className="single-post media p-3">
                                                    {/* Post Thumb */}
                                                    <div className="post-thumb avatar-md">
                                                        <img className="align-self-center" src={item.image} alt="" />
                                                    </div>
                                                    <div className="post-content media-body pl-3">
                                                        <p className="post-date mb-3 mb-lg-2">{item.date}</p>
                                                        <h6>{item.title}</h6>
                                                    </div>
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Single Widget */}
                    <div className="single-widget">
                        {/* Tags Widget */}
                        <div className="accordions widget tags-widget" id="tags-accordion">
                        <div className="single-accordion blog-accordion">
                            <h5>
                            <a role="button" className="collapse show text-uppercase d-block p-3" data-toggle="collapse" href="#accordion3">{this.state.data.widgetTitle_3}
                            </a>
                            </h5>
                            {/* Tags Widget Content */}
                            <div id="accordion3" className="accordion-content widget-content collapse show" data-parent="#tags-accordion">
                                {/* Tags Widget Items */}
                                <div className="widget-content tags-widget-items pt-2">
                                    {this.state.widgetData_3.map((item, idx) => {
                                        return(
                                            <a key={`wdth_${idx}`} href="/#" className="d-inline-block mt-2 mr-1 px-2 py-1">{item.text}</a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </aside>
            </div>
        );
    }
}

export default Sidebar;