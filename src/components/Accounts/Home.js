import React, { Component, useState } from 'react';
import Header from '../HeaderSection/Header';
import FooterSection from '../FooterSection/Footer';
import ReactPlayer from 'react-player';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

class Home extends Component {
    
    render() {

        return (
            <div style={{height: '900px'}}>
            <Header imageData={"/img/logo-white.png"} />
            <section id="upload-picture" className="section welcome-area bg-overlay overflow-hidden d-flex align-items-center" style={{height: '1300px'}}>
                    <div className="container" style={{height: '1100px', marginTop: '60px', background:'#7121FF'}}>
                        <h2 style={{color:'white'}}>Welcome back Ivan!</h2>
                        <br></br>
                        <br></br>
                        <Popup trigger={<a style={{color: 'white', fontSize: '25px', paddingTop: '10px'}}> video_frames.mp4</a>} position="right center" closeOnDocumentClick>
                            <div>enjoy your video</div>
                            <div className='player-wrapper'>
                                <ReactPlayer
                                className='react-player fixed-bottom'
                                url= {''}
                                width='50%'
                                height='50%'
                                controls = {true}
                                style={{margin:'300px'}}
                                />
                            </div>
                        </Popup>
                        <br></br>
                        <br></br>
                        <Popup trigger={<a style={{color: 'white', fontSize: '25px', paddingTop: '10px'}}> video_frames_new.mp4</a>} position="right center" closeOnDocumentClick>
                            <div>enjoy your video</div>
                            <div className='player-wrapper'>
                                <ReactPlayer
                                className='react-player fixed-bottom'
                                url= {''}
                                width='50%'
                                height='50%'
                                controls = {true}
                                style={{margin:'300px'}}
                                />
                            </div>
                        </Popup>
                        <br></br>
                        <br></br>
                        <Popup trigger={<a style={{color: 'white', fontSize: '25px', paddingTop: '10px'}}> video_whats.mp4</a>} position="right center" closeOnDocumentClick>
                            <div>enjoy your video</div>
                            <div className='player-wrapper'>
                                <ReactPlayer
                                className='react-player fixed-bottom'
                                url= {''}
                                width='50%'
                                height='50%'
                                controls = {true}
                                style={{margin:'300px'}}
                                />
                            </div>
                        </Popup>
                    </div>
            </section>
            <FooterSection/>
        </div>
        )
    }
}

export default Home;