import React, { Component } from 'react';
import { NavigationLinks, ArdentLogo } from './navigationLinks';

class Footer extends Component {

    render() {
        const sectionName = 'footer';
        return (
            <React.Fragment>
                <div className="position-relative overflow-hidden p-5 white" style={{ backgroundColor: '#646666', position:"relative", top:"-32px" }}>
                    <div className="row white" style={{ position: "relative", left: "200px", width: "80%" }}>
                        <div className="col-12 col-md">
                            <ArdentLogo section={sectionName} />
                        </div>
                        <div className="col-6 col-md">
                            <FooterBar text={"QUICK LINKS"} />
                            <br />
                            <NavigationLinks section={sectionName} />
                        </div>

                        <div className="col-6 col-md">
                            <FooterBar text={"CONTACT US"} />
                            <br />
                            <p style={{ fontSize: '18px' }}> learn@ardentlbs.io<br />
                                949. 496. 1688<br /><br />
                                4199 Campus Drive<br />
                                Suite 260<br />
                                Irvine, CA 92612<br />
                            </p>
                        </div>
                        <div className="col-6 col-md" >
                            <FooterBar text={"CONNECT"} />
                            <br />
                            <img alt="indeed_logo" width='42px' height='42px' src="./images/FooterIcons/indeed-icon.png" style={{ background: 'transparent' }} />
                            <img alt="facebook_logo" width='42px' height='42px' src="./images/FooterIcons/facebook-icon.png" style={{ background: 'transparent' }} />
                            <img alt="twitter_logo" width='42px' height='42px' src="./images/FooterIcons/twitter-icon.png" style={{ background: 'transparent' }} />
                        </div>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default Footer;


const FooterBar = (props) => {
    return (
        <div className="font24" id={"footer" + props.text + "Div"} style={{ borderTopWidth: "5px", borderTopStyle: 'solid', marginTop: "30px", paddingTop: '15px', boxSizing: 'border-box' }}>
            <h4>{props.text}</h4>
        </div>
    );
};