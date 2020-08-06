import React, { Component } from 'react';
import EmailForm from './EmailForm';

class Internships extends Component {

    render() {
        return (
            <React.Fragment >
                <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 ardentGrey" id="internships" style={{ backgroundColor: '#efefef', width: "105%", position: "relative", left: "-15px", top: "-48px" }}>
                    <div style={{ position: "relative", left: "200px" }}>

                        <h1 className="sectionHeading font88 ardentGrey" style={{ marginBottom: "20px", }}>INTERNSHIPS</h1>

                        <h3 className="font24">Software Engineer</h3>
                        <p style={{ fontSize: "18px", width: '972px' }}>Learn the agile development process, master the latest front and back-end development tools, and
                        take charge of an app from conception to production.</p>

                        <h3 className="font24">UI/UX/Product Manager</h3>
                        <p style={{ fontSize: "18px", width: '972px' }}> Learn how to develop beautiful user interface and meaningful user experience and jump start your
                        career in product management.</p>

                        <h3 className="font24">Digital Marketer</h3>
                        <p style={{ fontSize: "18px", width: '972px' }}>Learn how to market software applications via online and offline marketing media with a special
                        emphasis on social media marketing.</p><br />
                    </div>
                    <div className='container' id="contact">
                        <div className='row'>
                            <div className='col-md-4'>
                                <h6 className="font24 ardentBlue">Are you interested in developing a career and getting jobs at leading tech companies?
                                Send us a short message and we will contact you shortly.
                                </h6>
                            </div>
                            <div className='col'>
                                <EmailForm />
                            </div>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        )
    };
};

export default Internships;