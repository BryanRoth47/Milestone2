import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class NGL_and_IMG extends Component {

    render() {
        return (
            <React.Fragment>
                <h2 class="font24 white" style={{ textAlign: 'center', marginTop: '50px' }}>Looking for an internship?
                    <Link to='/software-engineering-internship' class="white" style={{ textDecoration: 'underline', paddingLeft:'10px' }}>
                        Check out our Software Engineering Virtual Internship!</Link>
                </h2>
                <div class="container" style={{marginTop:'50px'}}>
                    <div class="row justify-content-center">
                        <div class="col-4 white">
                            <h1 class=" font88" >Next</h1>
                            <h1 class="font88" >Generation</h1>
                            <h1 class="font88" >Learning</h1>
                        </div>
                        <div class="col-3"></div>
                        <div class="col-4">
                            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                <ol class="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </ol>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="https://static.wixstatic.com/media/132a22_d25eccf694c8430db26e7eb7c49ab4f0~mv2.jpg" class="d-block w-100" alt="..." style={{ background: 'transparent' }}></img>
                                    </div>
                                    <div class="carousel-item">
                                        <img src="https://static.wixstatic.com/media/132a22_6d0d8611f0b740c3bad57b6cde496cc2~mv2.jpg" class="d-block w-100" alt="..." style={{ background: 'transparent' }}></img>
                                    </div>
                                    <div class="carousel-item">
                                        <img src="https://static.wixstatic.com/media/132a22_2affb5bad1004739ba6e64ff841516b7~mv2.jpg" class="d-block w-100" alt="..." style={{ background: 'transparent' }}></img>
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
};

export default NGL_and_IMG;