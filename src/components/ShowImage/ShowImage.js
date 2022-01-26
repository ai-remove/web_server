import React, { Component, useEffect } from 'react';
import Header from '../HeaderSection/Header';
import FooterSection from '../FooterSection/Footer';
import PropTypes from 'prop-types';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';
import axios from 'axios';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
}

const imageData = {
  back1: "/img/back1.jpg",
  back2: "/img/back2.jpg",
  back3: "/img/back3.jpg",
  back4: "/img/back4.jpg",
  back5: "/img/back5.jpg",
  back6: "/img/back6.jpg",
  back7: "/img/back7.jpg",
  back8: "/img/back8.jpg"
}

class ShowImage extends Component {
  constructor(props) {
    super(props);

    
    const back1 = require("./img/back1.jpg");
    const back2 = require("./img/back2.jpg");
    const back3 = require("./img/back3.jpg");
    const back4 = require("./img/back4.jpg");
    const back5 = require("./img/back5.jpg");
    const back6 = require("./img/back6.jpg");
    const back7 = require("./img/back7.jpg");
    const back8 = require("./img/back8.jpg");

    const color1 = require("./colors/clr1.jpg");
    const color2 = require("./colors/clr2.jpg");
    const color3 = require("./colors/clr3.jpg");
    const color4 = require("./colors/clr4.jpg");
    const color5 = require("./colors/clr5.jpg");
    const color6 = require("./colors/clr6.jpg");
    const color7 = require("./colors/clr7.jpg");
    const color8 = require("./colors/clr8.jpg");

    const video1 = require("./videos/vid1.gif");
    const video2 = require("./videos/vid2.gif");
    const video3 = require("./videos/vid3.gif");
    const video4 = require("./videos/vid4.gif");
    const video5 = require("./videos/vid5.gif");
    const video6 = require("./videos/vid6.gif");
    const video7 = require("./videos/vid7.gif");
    const video8 = require("./videos/vid8.gif");

    this.state = {
      filename1: '',
      filename2: '',
      file: '',
      imagePreviewUrl: '',
      backPreviewUrl:'',
      fileUploadState: '',
      index: 0,
      imgList: [back1,back2,back3,back4,back5,back6,back7,back8],
      clrList: [color1, color2, color3, color4, color5, color6, color7, color8],
      vidList: [video1, video2, video3, video4, video5, video6, video7, video8]
    };
    this.backstate = {
      file: null
    }
    this._handleBackChange = this._handleBackChange.bind(this)
    this._handleImageChange = this._handleImageChange.bind(this);

    this.onClickForward = this.onClickForward.bind(this)
    this.onClickBack = this.onClickBack.bind(this)
    this._getFileToDownload = this._getFileToDownload(this)
  }
  
  onClickForward(){
    if (this.state.index + 4 == this.state.imgList.length){
      this.setState({
        index: 0
      })
    }
    else {
      this.setState({
        index: this.state.index + 1
      })
    }
  }

  onClickBack(){
    if (this.state.index - 1 == -1){
      this.setState({
        index: this.state.imgList.length - 1
      })
    }
    else {
      this.setState({
        index: this.state.index -1
      })
    }
  }

  _getFileToDownload(){
    //
  }

  _downloadButton = () => {
    axios.post("http://localhost:5000/api/getuser")
        .then(function(response){
            console.log(response.data);
        })
    document.getElementById('downloadButton').click();
  }

  _handleBackChange(e) {
      //this.backstate.file = URL.createObjectURL(event.target.files[0])
      e.preventDefault();

      let file = e.target.files[0];
      this.setState({
        backPreviewUrl: file
      })
      const formData = new FormData(); //making a form to send the file
      formData.append("file", file);

      console.log(file);

      //sending uploaded foreground image to flask 
      axios.post("http://localhost:5000/api/upload/background", formData)
      .then((response) => { //setting state if post was successful
        console.log(response.data);
      });
  }

  //TODO: do something with click on thumbnail image
  _changePreview(back_file) {
    let file = back_file;
    const formData = new FormData(); //making a form to send the file
    formData.append("file", file);


    //sending uploaded foreground image to flask 
    //axios.post("http://localhost:5000/api/upload/background", formData)
    //.then((response) => { //setting state if post was successful
      //console.log(response.data);
      
   // });

  }

  _changePreview1(back_file) {
    let file = back_file;
    console.log(file);

    axios.post("http://localhost:5000/api/upload/local", {image:file})
    .then((response) => { //setting state if post was successful
      console.log(response.data);
    });

    //sending uploaded foreground image to flask 
    //axios.post("http://localhost:5000/api/upload/background", formData)
    //.then((response) => { //setting state if post was successful
      //console.log(response.data);
      
   // });

  }

  // processes button click on main file upload button
  _fileUploadButton = () => {
    document.getElementById('fileButton').click();
  }

  // MAIN FUNCTION processes image preview with click on input form (AND FLASK FORWARDING!!!)
  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];
    const formData = new FormData(); //making a form to send the file
    formData.append("file", file);

    console.log(file);

    //sending uploaded foreground image to flask 
    axios.post("http://localhost:5000/api/upload/foreground", formData)
    .then((response) => { //setting state if post was successful
      console.log(response.data);
    });
    
    //loading preview of image
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result //the single line to change to change the saved video
      });
    }

    reader.readAsDataURL(file)
  }

  //_useEffect = () => {
    // Update the document title using the browser API
    //this._fileUploadButton();
  //}
  //<img src={this.state.imgList[1]} style={{float:'left', position:'absolute', backgroundColor:'#000', width:'1000px', height:'600px'}}></img>

  render() {
    
    let {imagePreviewUrl} = this.state;
    let {backPreviewUrl} = this.state;
    let $imagePreview = null;
    let $backPreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<video style={{ maxHeight: '450px', maxWidth: '450px', position:'absolute', left:'30%', top:'30%'}}><source src={imagePreviewUrl} type="video/mp4"></source></video>);
    }
    if (backPreviewUrl) {
      $backPreview = (<img src={backPreviewUrl} style={{ maxHeight: '450px', maxWidth: '450px', position:'absolute', left:'45%', top:'40%'}}/>);
    }
    
    const imageClick = (bn) => {
      this._changePreview1(bn);
    } 

    return (
      <div style={{height: '900px'}}>
        <Header imageData={"/img/logo-white.png"} />
        <section id="upload-picture" className="section welcome-area bg-overlay overflow-hidden d-flex align-items-center" style={{height: '850px'}}>
                <div className="container" style={{height: '700px', marginTop: '60px', background:'#7121FF'}}>
                  {$imagePreview}
                  {$backPreview}
                  <div className="row justify-content-center">
                      <div className="col-12 col-sm-10 col-lg-8">
                        <input id="fileButton" type="file" accept=".mp4" name="file" hidden onChange={this._handleImageChange}/>
                        <button id="maskFileButton" class="btn btn-outline-primary" style={{top:'470px', left:'300px', position:'absolute'}} onClick={this._fileUploadButton}>
                            Upload Video 
                        </button>
                      </div>
                      <a id="downloadButton" style={{top:'570px', left:'950px', position:'absolute'}} href={imagePreviewUrl} hidden onChange={this._getFileToDownload} download>Click to download</a>
                      <button id="maskFileButton" class="btn btn-outline-primary" style={{top:'470px', left:'300px', position:'absolute'}} onClick={this._downloadButton}>
                            Download file
                      </button>
                  </div>

                  <Tabs defaultActiveKey="pictures" id="uncontrolled-tab-example" style={{ position: 'absolute', bottom: '200px'}}>
                    <Tab class="container-md" class="upload_file" eventKey="pictures" title="Pictures" style={{ position: 'absolute', bottom: '60px'}}>
                      <div id="Pictures">
                        <div style={{ position: 'absolute'}}>
                          <label for="background-upload" class="btn btn-outline-primary" style={{height:'130px', width:'160px', textAlign:'middle'}}>
                            <br></br>
                            <br></br>
                            Upload file
                          </label>
                          <input id="background-upload" type="file" accept=".jpg,.png" onChange={this._handleBackChange} style={{display:'none', border: '1px solid #ccc'}}/>
                        </div>
                      
                        <div class="images" style={{marginLeft:'170px'}}>
                        <img class="upload_file" style={{ maxHeight: '130px', padding: '2px', display:'none'}} src={''}/>
                        <img class="upload_file" src={this.state.imgList[this.state.index]} alt=""   onClick={() => imageClick(this.state.imgList[this.state.index])} style={{ maxHeight: '130px', padding: '2px', pointerEvents: 'all'}}/>
                        <img class="upload_file" src={this.state.imgList[this.state.index+1]} alt="" onClick={() => imageClick(this.state.imgList[this.state.index+1])} style={{ maxHeight: '130px', padding: '2px'}}/>
                        <img class="upload_file" src={this.state.imgList[this.state.index+2]} alt="" onClick={() => imageClick(this.state.imgList[this.state.index+2])} style={{ maxHeight: '130px', padding: '2px'}}/>
                        <img class="upload_file" src={this.state.imgList[this.state.index+3]} alt="" onClick={() => imageClick(this.state.imgList[this.state.index+3])} style={{ maxHeight: '130px', padding: '2px'}}/>
                        </div>
                        <button style={{background:'none', border: 'none', bottom:'7px', left:'990px', position:'absolute'}} onClick={this.onClickBack}><p style={{postion: 'absolute', display: 'inline-block', fontSize:'100px', color:'white'}}>&laquo;</p></button>
                        <button style={{background:'none', border: 'none', bottom:'54px', left:'990px', position:'absolute'}} onClick={this.onClickForward}><p style={{postion: 'absolute', display: 'inline-block', fontSize:'100px', color:'white'}}>&raquo;</p></button>
                    </div>
                    </Tab>
                    <Tab eventKey="videos" style={{ position: 'absolute', bottom: '60px'}} title="Videos">
                      <div id="Videos">
                          <div style={{ position: 'absolute'}}>
                            <label for="background-upload" class="btn btn-outline-primary" style={{height:'130px', width:'160px', textAlign:'middle'}}>
                              <br></br>
                              <br></br>
                              Upload file
                            </label>
                            <input id="background-upload" type="file" accept=".mov,.avi" onChange={this.handleBackChange} style={{display:'none', border: '1px solid #ccc'}}/>
                          </div>
                          <div class="images" style={{marginLeft:'170px'}}>
                          <img class="upload_file" style={{ maxHeight: '130px', padding: '2px', display:'none'}} src={''}/>
                          <img class="upload_file" src={this.state.vidList[this.state.index]} alt="" onClick={() => imageClick(this.state.vidList[this.state.index])} style={{ maxHeight: '130px', padding: '2px'}}/>
                          <img class="upload_file" src={this.state.vidList[this.state.index+1]} alt="" onClick={() => imageClick(this.state.vidList[this.state.index+1])} style={{ maxHeight: '130px', padding: '2px'}}/>
                          <img class="upload_file" src={this.state.vidList[this.state.index+2]} alt="" onClick={() => imageClick(this.state.vidList[this.state.index+2])} style={{ maxHeight: '130px', padding: '2px'}}/>
                          <img class="upload_file" src={this.state.vidList[this.state.index+3]} alt="" onClick={() => imageClick(this.state.vidList[this.state.index+3])} style={{ maxHeight: '130px', padding: '2px'}}/>
                          </div>
                          <button style={{background:'none', border: 'none', bottom:'7px', left:'990px', position:'absolute'}} onClick={this.onClickBack}><p style={{postion: 'absolute', display: 'inline-block', fontSize:'100px', color:'white'}}>&laquo;</p></button>
                          <button style={{background:'none', border: 'none', bottom:'54px', left:'990px', position:'absolute'}} onClick={this.onClickForward}><p style={{postion: 'absolute', display: 'inline-block', fontSize:'100px', color:'white'}}>&raquo;</p></button>
                      </div>
                    </Tab>
                    <Tab style={{ position: 'absolute', bottom: '60px'}} eventKey="colors" title="Color">
                      <div id="Colors">
                            <div style={{ position: 'absolute'}}>
                              <label for="background-upload" class="btn btn-outline-primary" style={{height:'130px', width:'160px', textAlign:'middle'}}>
                                <br></br>
                                <br></br>
                                Upload file
                              </label>
                              <input id="background-upload" accept=".jpg,.png" type="file" onChange={this.handleBackChange} style={{display:'none', border: '1px solid #ccc'}}/>
                            </div>
                            <div class="images" style={{marginLeft:'170px'}}>
                            <img class="upload_file" style={{ maxHeight: '130px', padding: '2px', display:'none'}} src={''}/>
                            <img class="upload_file" src={this.state.clrList[this.state.index]} alt="" onClick={() => imageClick(this.state.clrList[this.state.index])} style={{ maxHeight: '130px', padding: '2px'}}/>
                            <img class="upload_file" src={this.state.clrList[this.state.index+1]} alt="" onClick={() => imageClick(this.state.clrList[this.state.index+1])} style={{ maxHeight: '130px', padding: '2px'}}/>
                            <img class="upload_file" src={this.state.clrList[this.state.index+2]} alt="" onClick={() => imageClick(this.state.clrList[this.state.index+2])} style={{ maxHeight: '130px', padding: '2px'}}/>
                            <img class="upload_file" src={this.state.clrList[this.state.index+3]} alt="" onClick={() => imageClick(this.state.clrList[this.state.index+3])} style={{ maxHeight: '130px', padding: '2px'}}/>
                            </div>
                            <button style={{background:'none', border: 'none', bottom:'7px', left:'990px', position:'absolute'}} onClick={this.onClickBack}><p style={{postion: 'absolute', display: 'inline-block', fontSize:'100px', color:'white'}}>&laquo;</p></button>
                            <button style={{background:'none', border: 'none', bottom:'54px', left:'990px', position:'absolute'}} onClick={this.onClickForward}><p style={{postion: 'absolute', display: 'inline-block', fontSize:'100px', color:'white'}}>&raquo;</p></button>
                        </div>
                    </Tab>
                  </Tabs>
                </div>
        </section>
        <FooterSection/>
      </div>
    )
  }

}

export default ShowImage;
