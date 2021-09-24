import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/json-server-2/themeOneBlogDetails";

class BlogDetails extends Component {
    state = {
        data: {},
        iconList: [],
        commentsData: []
    }
    componentDidMount(){
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    data: res.data,
                    iconList: res.data.iconList,
                    commentsData: res.data.commentsData
                })
                // console.log(this.state.data)
            })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                {/* Single Blog Details */}
                <article className="single-blog-details">
                    {/* Blog Thumb */}
                    <div className="blog-thumb">
                        <a href="/#"><img src={this.state.data.image} alt="" /></a>
                    </div>
                    {/* Blog Content */}
                    <div className="blog-content sApp-blog">
                        {/* Meta Info */}
                        <div className="meta-info d-flex flex-wrap align-items-center py-2">
                            <ul>
                                <li className="d-inline-block p-2">By <a className="text-primary" href="/#">{this.state.data.author}</a></li>
                                <li className="d-inline-block p-2"><a href="/#">{this.state.data.date}</a></li>
                                <li className="d-inline-block p-2"><a href="/#">{this.state.data.comments}</a></li>
                            </ul>
                            {/* Blog Share */}
                            <div className="blog-share ml-auto d-none d-sm-block">
                                {/* Social Icons */}
                                <div className="social-icons d-flex justify-content-center">
                                    {this.state.iconList.map((item, idx) => {
                                        return(
                                            <a key={`bdi_${idx}`} className={item.link} href="/#">
                                                <i className={item.iconClass} />
                                                <i className={item.iconClass} />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        {/* Blog Details */}
                        <div className="blog-details">
                            <h3 className="blog-title py-3"><a href="/#">{this.state.data.title}</a></h3>
                            <p className="d-none d-sm-block">{this.state.data.text_1}</p>
                            <p className="d-block d-sm-none">{this.state.data.text_2}</p>
                            <blockquote className="blockquote px-4 py-3 my-3 ml-4">
                                <p className="d-none d-sm-block">{this.state.data.quoteText_1}</p>
                                <p className="d-block d-sm-none">{this.state.data.quoteText_2}</p>
                            </blockquote>
                            <p className="d-none d-sm-block">{this.state.data.text_3}</p>
                            <p className="d-block d-sm-none">{this.state.data.text_4}</p>
                        </div>
                    </div>
                    {/* Blog Comments */}
                    <div className="blog-comments">
                        {/* Admin */}
                        <div className="admin media py-4 mt-4">
                            {/* Admin Thumb */}
                            <div className="admin-thumb avatar-lg">
                                <img className="rounded-circle" src={this.state.data.adminImage} alt="" />
                            </div>
                            {/* Admin Content */}
                            <div className="admin-content media-body pl-3 pl-sm-4">
                                <h4 className="admin-name mb-2"><a href="/#">{this.state.data.admin}</a></h4>
                                <p>{this.state.data.adminText}</p>
                            </div>
                        </div>
                        {/* Comments */}
                        <div className="comments my-5">
                            {/* Comments Title */}
                            <h3 className="comments-title text-uppercase text-primary text-right mb-3">{this.state.data.commentsTitle}</h3>
                            {/* Single Comments */}
                            {this.state.commentsData.map((item, idx) => {
                                return(
                                    <div key={`bdc_${idx}`} className="single-comments media p-3 p-lg-4">
                                        {/* Comments Thumb */}
                                        <div className="comments-thumb avatar-lg">
                                        <img className="rounded-circle" src={item.commentsImage} alt="" />
                                        </div>
                                        {/* Comments Content */}
                                        <div className="comments-content media-body pl-3">
                                        <h5 className="d-flex mb-2">
                                            <a href="/#">{item.commentsAuthor}</a>
                                            <a href="/#" className="ml-auto">{item.replyText}</a>
                                        </h5>
                                        <p className="d-none d-lg-block">{item.commentsText_1}</p>
                                        <p className="d-block d-lg-none">{item.commentsText_2}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    {/* Blog Contact */}
                    <div className="blog-contact my-5">
                        {/* Contact Title */}
                        <h3 className="comments-title text-uppercase text-primary text-right mb-3">{this.state.data.commentsPost}</h3>
                        {/* Comment Box */}
                        <div className="contact-box comment-box">
                            <form method="POST" action="/#">
                                <div className="row">
                                <div className="col-12 col-md-6">
                                    <div className="form-group">
                                    <input type="text" className="form-control" name="name" placeholder="Name" required="required" />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="form-group">
                                    <input type="email" className="form-control" name="email" placeholder="Email" required="required" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                    <textarea className="form-control" name="message" placeholder="Message" required="required" defaultValue={""} />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-bordered" type="submit">{this.state.data.postText}</button>
                                </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </article>
            </div>
        );
    }
}

export default BlogDetails;