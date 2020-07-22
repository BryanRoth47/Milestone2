import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NavigationLinks extends Component {

    render() {

        let dropDown;
        let displayStyle = {
            color: 'white', 
        }

        if (this.props.section == 'navBar') {
            dropDown = <React.Fragment>
                <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={displayStyle}>More...</a>
                <div class="dropdown-menu" aria-labelledby="dropdown01" style={{background:'rgba(63,96,151,0.6)', minWidth:'100px'}} >
                    <LastTwoLinks section={this.props.section} />
                </div>
            </React.Fragment>;

            displayStyle.marginTop = '50px';
        }
        else {
            dropDown = <LastTwoLinks section={this.props.section} />;
            displayStyle.marginTop = '10px';
        }


        return (
            <React.Fragment>
                <a>
                    <a class="py-2 d-none d-md-inline-block" href="#" style={displayStyle}>Home</a><LineEnd section={this.props.section} />
                </a>

                <Link class="py-2 d-none d-md-inline-block" to="/software-engineering-internship" style={displayStyle}>Software Engineering Virtual Internship</Link><LineEnd section={this.props.section} />
                <a class="py-2 d-none d-md-inline-block" href="#test_link" target='_whatWeDo' style={displayStyle}>Mission</a><LineEnd section={this.props.section} />
                <a class="py-2 d-none d-md-inline-block" href="#" target='_whoWeAre' style={displayStyle}>About</a><LineEnd section={this.props.section} />
                <a class="py-2 d-none d-md-inline-block" href="#" target='_portfolio' style={displayStyle}>Portfolio</a><LineEnd section={this.props.section} />

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
        let displayStyle = {
            color: 'white', 
        }

        if (this.props.section === 'navBar') {
            displayClass = "dropdown-item";
        }
        else {
            displayClass = "py-2 d-none d-md-inline-block";
            displayStyle.marginTop = '10px';
        }
        
        

        return (
            <React.Fragment>
                <a class={displayClass} href="#" target='_internships' style={displayStyle}>Internships</a><LineEnd section={this.props.section} />
                <a class={displayClass} href="#" target='_contact' style={displayStyle}>Contact</a>
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

