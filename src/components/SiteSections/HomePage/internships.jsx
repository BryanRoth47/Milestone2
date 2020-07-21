import React, { Component } from 'react';

class Internships extends Component {

    render() {
        return (
            <React.Fragment >
                <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3" style={{ backgroundColor: 'white' }}>
                    <h1 class="display-4 font-weight-normal" style={{ color: '#646666' }}>INTERNSHIPS</h1>

                    <h3>Software Engineer</h3>
                    <p>Learn the agile development process, master the latest front and back-end development tools, and
                        take charge of an app from conception to production.</p>

                    <h3>UI/UX/Product Manager</h3>
                    <p> Learn how to develop beautiful user interface and meaningful user experience and jump start your
                        career in product management.</p>

                    <h3>Digital Marketer</h3>
                    <p>Learn how to market software applications via online and offline marketing media with a special
                        emphasis on social media marketing.</p><br />

                    <div class='container'>
                        <div class='row'>
                            <div class='col-md-4'>
                                <h6 style={{ color: '#0099FF', fontSize: '24px' }}>Are you interested in developing a career and getting jobs at leading tech companies?
                                Send us a short message and we will contact you shortly.
                                </h6>
                            </div>
                            <div class='col'>
                                <form>
                                    <input type="email" required maxLength='250' style={{
                                        width: '80%', paddingLeft: '12px', borderWidth: '3px', borderStyle: 'solid',
                                        borderColor: 'rgba(100, 102, 102, 1)'
                                    }} placeholder="Email" /><br />
                                    <textarea rows='5' style={{
                                        width: '80%', marginTop: '1em', paddingLeft: '16px', paddingRight: '10px',
                                        boxSizing: 'border-box', borderWidth: '3px', borderStyle: 'solid',
                                        borderColor: 'rgba(100, 102, 102, 1)'
                                    }} placeholder="Type your message here..." /><br />
                                    <div style={{ width: '80%', display: 'flex', justifyContent: 'flex-end' }}>
                                        <input type="submit" style={{ backgroundColor: 'transparent', borderStyle: 'none' }} />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    };
};

export default Internships;