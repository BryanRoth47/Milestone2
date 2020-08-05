import React, { Component } from 'react';

class InternshipTitle extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 white justify-center">
                    <div className="container">
                        <div className="row justify-content-center white" style={{ marginTop: "50px" }}>
                            <h1 className=" font88" >SOFTWARE ENGINEERING</h1>
                            <h1 className="font88" >VIRTUAL INTERNSHIP</h1>

                            <h3 className='font24' style={{ paddingLeft: '50px', paddingRight: '50px' }}>
                                As many internships have been suspended, or even cancelled, Ardent Labs aims to continue bringing quality internship programs to everyone at home during the crisis. During our 8-10 weeks virtual spring internship, interns will have the opportunity to learn modern web development tools by working on multiple milestone projects.
                            </h3>
                        </div>
                        <div className='container'>
                            <div className="row justify-content-center">
                                <div className='col col-sm-3 white' style={{ borderBottomWidth: "5px", borderBottomStyle: 'solid', marginTop: "30px", paddingTop: '15px', boxSizing: 'border-box' }}>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    };
}

export default InternshipTitle;