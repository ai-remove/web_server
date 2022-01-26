import React, { Component, useState, useEffect } from 'react';
import Header from '../HeaderSection/Header';
import FooterSection from '../FooterSection/Footer';
import ReactPlayer from 'react-player';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import axios from 'axios';
import {Link} from "react-router-dom";
import { Redirect } from 'react-router';

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            dir_path: "",
            file_list: [],
            loggedout:""
        }
    }

    _GoToLoginLink = () => {
        document.getElementById('logout').click();
    }

    componentDidMount() {
    
        axios.post("http://localhost:5000/api/getname")
          .then(response => {
            const username = response.data;
            this.setState({ username:username })
           })
          .catch(err => {
            console.log(err);
          });

          axios.post("http://localhost:5000/api/getdir")
          .then(response => {
            const dir_path = response.data["dir_path"];
            const file_list = response.data["file_list"];
            this.setState({ dir_path:dir_path })
            this.setState({ file_list:file_list })
        })
        .catch(err => {
            console.log(err);
          });
      }
    
    render() {

        console.log(this.state.file_list)
        const items = []

        for (const [index, value] of this.state.file_list.entries()) {
            console.log(this.state.dir_path+'/'+value)
            items.push(
                    <div>
                    <br></br>
                    <br></br>
                    <Popup key={index} trigger={<a style={{color: 'white', fontSize: '25px', paddingTop: '10px'}}> {value}</a>} position="right center" closeOnDocumentClick>
                        <div className='player-wrapper'>
                        <video width="520" height="240" controls>
                        <source src="./1.mp4" type="video/mp4">
                        </source>
                        Your browser does not support the video tag.
                        </video>
                        </div>
                    </Popup>
                    </div>
                    )
        }
        if(this.state.loggedout){ return <Redirect to="/"/>}
        return (
            <div style={{height: '900px'}}>
            <Header imageData={"/img/logo-white.png"} />
            <section id="upload-picture" className="section welcome-area bg-overlay overflow-hidden d-flex align-items-center" style={{height: '1300px'}}>
                    <div className="container" style={{height: '1100px', marginTop: '60px', background:'#7121FF'}}>
                        <h2 style={{color:'white'}}>Welcome back {this.state.username}!</h2>
                        <a className="nav-link scroll" href="" onClick={this._GoToLoginLink}>Logout</a>
                        <Link id="logout" to="/api/logout" style={{display:'none'}}>
                        </Link>
                        {items}
                    </div>
                    <video width="520" height="240" controls>
                        <source src="./1.mp4" type="video /mp4">
                        </source>
                    </video>
            </section>
            <FooterSection/>
        </div>
        )
    }
}

export default Home;