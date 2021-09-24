import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/json-server/themeOneTeamSection";

class Team extends Component {
    state = {
        data: {},
        teamData: [],
        teamIcons: []
    }
    componentDidMount(){
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    data: res.data,
                    teamData: res.data.teamData,
                    teamIcons: res.data.teamIcons
                })
                // console.log(this.state.data)
            })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <section className="section team-area team-style-two overflow-hidden ptb_100">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-6">
                        {/* Section Heading */}
                        <div className="section-heading text-center">
                        <h2 className="text-capitalize">{this.state.data.heading}</h2>
                        <p className="d-none d-sm-block mt-4">{this.state.data.headingText}</p>
                        <p className="d-block d-sm-none mt-4">{this.state.data.headingTexttwo}</p>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                        {this.state.teamData.map((item, idx) => {
                            return(
                                <div key={`t_${idx}`} className="col-12 col-sm-6 col-md-4 col-lg-3">
                                    {/* Single Team */}
                                    <div className="single-team text-center radius-100 overflow-hidden m-2 m-lg-0">
                                    {/* Team Thumb */}
                                    <div className="team-thumb radius-100 d-inline-block position-relative overflow-hidden">
                                        <img src={item.image} alt="" />
                                        {/* Team Overlay */}
                                        <div className="team-overlay radius-100">
                                        <h4 className="team-name text-white">{'Person'}</h4>
                                        <h5 className="team-post text-white mt-2 mb-3">{'Developer'}</h5>
                                        {/* Team Icons */}
                                        <div className="team-icons">
                                            {this.state.teamIcons.map((item, idx) => {
                                                return(
                                                    <a key={`ti_${idx}`} className="p-2" href="/#"><i className={item.iconClass} /></a>
                                                );
                                            })}
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }
}

export default Team;