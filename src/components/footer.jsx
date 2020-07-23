import React, { Component } from 'react';
import { NavigationLinks, ArdentLogo } from './navigationLinks';

class Footer extends Component {

    render() {
        const sectionName = 'footer';
        return (
            <React.Fragment>
                <div class="position-relative overflow-hidden p-5 white">
                    <div class="row white" style={{ backgroundColor: '#646666' }}>
                        <div class="col-12 col-md">
                            <ArdentLogo section={sectionName} />
                        </div>
                        <div class="col-6 col-md">
                            <FooterBar text={"QUICK LINKS"} />
                            <br />
                            <NavigationLinks section={sectionName} />
                        </div>

                        <div class="col-6 col-md">
                            <FooterBar text={"CONTACT US"} />
                            <br />
                            <p style={{ fontSize: '18px' }}> learn@ardentlbs.io<br />
                                949. 496. 1688<br /><br />
                                4199 Campus Drive<br />
                                Suite 260<br />
                                Irvine, CA 92612<br />
                            </p>
                        </div>
                        <div class="col-6 col-md" >
                            <FooterBar text={"CONNECT"} />
                            <br />
                            <img width='42px' height='42px' src="./images/FooterIcons/indeed-icon.png" style={{ background: 'transparent' }} />
                            <img width='42px' height='42px' src="./images/FooterIcons/facebook-icon.png" style={{ background: 'transparent' }} />
                            <img width='42px' height='42px' src="./images/FooterIcons/twitter-icon.png" style={{ background: 'transparent' }} />
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
        <div class="font24" id={"footer" + props.text + "Div"} style={{ borderTopWidth: "5px", borderTopStyle: 'solid', marginTop: "30px", paddingTop: '15px', boxSizing: 'border-box' }}>
            <h4>{props.text}</h4>
        </div>
    );
};