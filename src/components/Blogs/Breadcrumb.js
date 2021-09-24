import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Breadcrumb extends Component {
    render() {
        return (
            <section className="section breadcrumb-area bg-overlay d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Breamcrumb Content */}
                            <div className="breadcrumb-content d-flex flex-column align-items-center text-center">
                                <h3 className="text-white">{this.props.title}</h3>
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><Link className="text-white" to="/">Home</Link></li>
                                    <li className="breadcrumb-item"><Link className="text-white" to="/BlogTwoColumn/">Blog Pages</Link></li>
                                    <li className="breadcrumb-item active text-white">{this.props.title}</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Breadcrumb;