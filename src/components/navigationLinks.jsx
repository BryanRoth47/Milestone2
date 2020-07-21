import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NavigationLinks extends Component {

    render() {

        let dropDown;

        if (this.props.section == 'navBar') {
            dropDown = <React.Fragment>
                <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: 'white', marginTop:'20px'}}>More...</a>
                <div class="dropdown-menu" aria-labelledby="dropdown01">
                    <LastTwoLinks section={this.props.section} />
                </div>
            </React.Fragment>;
        }
        else {
            dropDown = <LastTwoLinks section={this.props.section} />;
        }


        return (
            <React.Fragment>
                <a>
                    <a class="py-2 d-none d-md-inline-block" href="#" style={{ color: 'white', marginTop:'20px'}}>Home</a><LineEnd section={this.props.section} />
                </a>

                <Link class="py-2 d-none d-md-inline-block" to="/software-engineering-internship" style={{ color: 'white', marginTop:'20px'}}>Software Engineering Virtual Internship</Link><LineEnd section={this.props.section} />
                <a class="py-2 d-none d-md-inline-block" href="#test_link" target='_whatWeDo' style={{ color: 'white', marginTop:'20px'}}>Mission</a><LineEnd section={this.props.section} />
                <a class="py-2 d-none d-md-inline-block" href="#" target='_whoWeAre' style={{ color: 'white', marginTop:'20px'}}>About</a><LineEnd section={this.props.section} />
                <a class="py-2 d-none d-md-inline-block" href="#" target='_portfolio' style={{ color: 'white', marginTop:'20px'}}>Portfolio</a><LineEnd section={this.props.section} />

                {dropDown}
            </React.Fragment>
        );
    }
}


const ArdentLogo = () => {
    return (
        <React.Fragment>
            <a class="py-2" href="#" aria-label="Product">
                <img src="./images/ardent-labs-logo.webp" style={{ background: 'transparent' }} />
            </a>
        </React.Fragment>
    );
};


class LastTwoLinks extends Component {

    render() {
        let displayClass;
        if (this.props.section === 'navBar') {
            displayClass = "dropdown-item";
        }
        else {
            displayClass = "py-2 d-none d-md-inline-block";
        }

        return (
            <React.Fragment>
                <a class={displayClass} href="#" target='_internships' style={{ color: 'white', marginTop:'20px'}}>Internships</a><LineEnd section={this.props.section} />
                <a class={displayClass} href="#" target='_contact' style={{ color: 'white', marginTop:'20px'}}>Contact</a>
            </React.Fragment>
        );
    }
}


class LineEnd extends Component {
    render() {
        if (this.props.section === 'navBar'){
            return null;
        }
        else {
            return <br />;
        }
    }
}


export {
    ArdentLogo,
    NavigationLinks
}

