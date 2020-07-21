import React, { Component } from 'react';
import { NavigationLinks, ArdentLogo } from './navigationLinks';

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <nav class="nav" >
                    <div class="container d-flex flex-column flex-md-row justify-content-between" style={{ color: 'white' }}>
                        <ArdentLogo />
                        <a>
                            <div id="footerLinksDiv" style={{ borderTopWidth: "5px", borderTopStyle: 'solid', marginTop:"50px", boxSizing: 'border-box'}}>
                                <h4 style={{marginBottom:'0'}}>QUICK LINKS</h4>
                            </div>
                            <br />
                            <NavigationLinks section={'footer'} />
                        </a>
                        <a class="py-2">
                            <div id="footerContactDiv" style={{ borderTopWidth: "5px", borderTopStyle: 'solid' , marginTop:"45px", boxSizing: 'border-box'}}>
                                <h4>CONTACT US</h4>
                            </div>
                            <br />
                            <p> learn@ardentlbs.io<br />
                                949. 496. 1688<br /><br />
                                4199 Campus Drive<br />
                                Suite 260<br />
                                Irvine, CA 92612<br />
                            </p>
                        </a>
                        <a class="py-2">
                            <div id="footerConnectsDiv" style={{ borderTopWidth: "5px", borderTopStyle: 'solid', marginTop:"45px", boxSizing: 'border-box' }}>
                                <h4 style={{marginBottom:'0'}}>CONNECT</h4>
                            </div>
                            <br />
                            <img src="./images/FooterIcons/indeed-icon.png" style={{ background: 'transparent' }}/>
                            <img src="./images/FooterIcons/facebook-icon.png" style={{ background: 'transparent' }}/>
                            <img src="./images/FooterIcons/twitter-icon.png" style={{ background: 'transparent' }}/>
                        </a>
                    </div>
                </nav>
            </React.Fragment >
        );
    }
}

export default Footer;


