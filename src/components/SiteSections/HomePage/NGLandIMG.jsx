import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class NGL_and_IMG extends Component {

    render() {
        return (
            <React.Fragment>
                <h2 className="font24 white" style={{ textAlign: 'center', marginTop: '75px' }}>Looking for an internship?
                    <Link to='/software-engineering-internship' className="white" style={{ textDecoration: 'underline', paddingLeft:'10px' }}>
                        Check out our Software Engineering Virtual Internship!</Link>
                </h2>
                <div className="container" style={{marginTop:'50px'}}>
                    <div className="row justify-content-center">
                        <div className="col-4 white">
                            <h1 className=" font88" >Next</h1>
                            <h1 className="font88" >Generation</h1>
                            <h1 className="font88" >Learning</h1>
                        </div>
                        <div className="col-3"></div>
                        <div className="col-4">
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="https://static.wixstatic.com/media/132a22_d25eccf694c8430db26e7eb7c49ab4f0~mv2.jpg" className="d-block w-100" alt="..." style={{ background: 'transparent' }}></img>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://static.wixstatic.com/media/132a22_6d0d8611f0b740c3bad57b6cde496cc2~mv2.jpg" className="d-block w-100" alt="..." style={{ background: 'transparent' }}></img>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://static.wixstatic.com/media/132a22_2affb5bad1004739ba6e64ff841516b7~mv2.jpg" className="d-block w-100" alt="..." style={{ background: 'transparent' }}></img>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
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