import React, { Component } from 'react';

class NGL_and_IMG extends Component {

    render() {
        return (
            <React.Fragment>
                <h2 class="font_2" style={{ fontSize: '24px', textAlign: 'center', color: 'white' }}>
                    <span class="color_11" style={{ fontWeight: 'bold', fontFamily: 'avenir-lt-w01_35-light1475496,sans-serif' }}>Looking for an internship?
                                <span style={{ textDecoration: 'underline' }}>
                            <a href="/software-engineering-remote-interns" target="_self" style={{ color: 'white' }}>Check out our Software Engineering Virtual Internship!</a>
                        </span>
                    </span>
                </h2>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-4" style={{ color: "white" }}>
                            <h1 class="display-5" style={{ fontSize: '72px' }}>Next</h1>
                            <h1 class="display-5" style={{ fontSize: '72px' }}>Generation</h1>
                            <h1 class="display-5" style={{ fontSize: '72px' }}>Learning</h1>
                        </div>
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