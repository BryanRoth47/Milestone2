import React, { Component } from 'react';

class WhatWeDo extends Component {

    render() {
        return (
            <React.Fragment >
                <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 bg-light" id="whatWeDo" style={{width:"100%", position:"relative", left:"-15px"}}>

                    <div class="container" style={{position:"relative", left:"65px"}}>
                        <div class="row">
                            <div class="col">
                                <h1 class="sectionHeading font88 ardentGrey">WHAT WE DO</h1>
                            </div>
                        </div>
                        <div class="row " style={{color: '#CCCCCA', marginBottom:'50px' }}>
                            <h1 class="col font260" style={{fontWeight:'lighter', lineHeight:'80%'}}>01</h1>
                            <h1 class="col font260" style={{fontWeight:'lighter', lineHeight:'80%'}}>02</h1>
                            <h1 class="col font260" style={{fontWeight:'lighter', lineHeight:'80%'}}>03</h1>
                        </div>
                        <div class="row" style={{ stroke: 'rgb(0,0,0)', strokeWidth: "4" }}>
                            <div class="col">
                                <svg width='80%' height="4px">
                                    <line x1="0" y1="0" x2="250" y2="0" />
                                </svg>
                            </div>
                            <div class="col">
                                <svg width='80%' height="4px">
                                    <line x1="0" y1="0" x2="250" y2="0" />
                                </svg></div>
                            <div class="col">
                                <svg width='800%' height="4px">
                                    <line x1="0" y1="0" x2="250" y2="0" />
                                </svg></div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <h3 class="ardentBlue" style={{margin:"20px 0px"}}>BUILD</h3>
                                <p style={{ width: '80%', fontSize:'16px', color:'#212529' }}>We develop apps and solutions to create better learning, teaching, and parenting experiences.
                                We adopt the best industrial practices in software development, latest techniques in AI, and
                                    research-validated learning design principles to achieve maximum results.</p>
                            </div>
                            <div class="col">
                                <h3 class="ardentBlue" style={{margin:"20px 0px"}}>TRAIN</h3>
                                <p style={{ width: '80%' }}>We provide real-world, hands-on, and project-based training to high school and college students
                                who are interested in developing apps, conducting scientific research using computing methods,
                                    becoming entrepreneurs, or gain work experience in the tech industry.</p>
                            </div>
                            <div class="col">
                                <h3 class="ardentBlue" style={{margin:"20px 0px"}}>INCUBATE</h3>
                                <p style={{ width: '80%' }}>We provide internships and incubation to entrepreneurs who would like to start their own company or
                                social ventures. Our network of advisers will help young entrepreneurs turn their ideas into winning
                                    business plan competitions, prototypes, and investment pitches. </p>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center" style={{marginTop:'50px'}}>
                        <video width="980" height="552"controls autoplay playsinline="true" >
                            <source src="https://video.wixstatic.com/video/132a22_f8c893ecc2c74984901b0213b6073de0/240p/mp4/file.mp4" />
                        </video>
                        
                    </div>
                </div>
            </React.Fragment>
        )
    };
};

export default WhatWeDo;