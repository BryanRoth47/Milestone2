import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NavigationLinks extends Component {

    render() {

        //let displayClass = {displayClass};
        let displayClass;

        let displayStyle = { color: 'white' }
        //let listStyle = {};

        if (this.props.section === 'navBar') {
            displayClass = "nav-link";
            displayStyle.marginTop = '50px';
        }
        else {
            displayClass = "py-2 d-none d-md-inline-block";
            displayStyle.marginTop = '5px';
        }

        let listOfLinks = [
            <React.Fragment><a class={displayClass} href='#' style={displayStyle}>Home</a><LineEnd section={this.props.section} /></React.Fragment>,
            <React.Fragment><Link class={displayClass} to='/software-engineering-internship' style={displayStyle}>Software Engineering Virtual Internship</Link><LineEnd section={this.props.section} /></React.Fragment>,
            <React.Fragment><a class={displayClass} href='#' target='_whatWeDo' style={displayStyle}>Mission</a><LineEnd section={this.props.section} /></React.Fragment>,
            <React.Fragment><a class={displayClass} href='#' target='_whoWeAre' style={displayStyle}>About</a><LineEnd section={this.props.section} /></React.Fragment>,
            <React.Fragment><a class={displayClass} href='#' target='_portfolio' style={displayStyle}>Portfolio</a><LineEnd section={this.props.section} /></React.Fragment>
        ]

        if (this.props.section === 'navBar') {
            return (
                <React.Fragment>
                    <ul class="navbar-nav mr-auto" >
                        {listOfLinks.map(aLink => (
                            <li class="nav-item">
                                {aLink}
                            </li>
                        ))}
                        <DropDown section={this.props.section} displayStyle={displayStyle} />
                    </ul>
                </React.Fragment>
            );
        }
        else {
            return (
                <React.Fragment>
                    {listOfLinks.map(aLink => (
                        <a>
                            {aLink}
                        </a>))}
                    <DropDown section={this.props.section} displayStyle={displayStyle} />
                </React.Fragment>
            );
        }

    }
}


class DropDown extends Component {

    render() {
        if (this.props.section == 'navBar') {
            return (<React.Fragment>
                <a class="nav-link dropdown-toggle" href='#' id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: 'white', marginTop: '60px' }}>More...</a>
                <div class="dropdown-menu" aria-labelledby="dropdown01" style={{ background: 'rgba(63,96,151,0.6)', minWidth: '100px' }} >
                    <LastTwoLinks section={this.props.section} displayStyle={this.props.displayStyle} />
                </div>
            </React.Fragment>);
        }
        else {
            return <LastTwoLinks section={this.props.section} displayStyle={this.props.displayStyle} />;

        }
    }
}


class LastTwoLinks extends Component {

    render() {
        let displayClass;
        let displayStyle = { ...this.props.displayStyle };

        if (this.props.section === 'navBar') {
            displayClass = "dropdown-item";
            displayStyle.marginTop = '40px';
        }
        else {
            displayClass = "py-2 d-none d-md-inline-block";
            displayStyle.marginTop = '10px';
        }



        return (
            <React.Fragment>
                <a class={displayClass} href='#' target='_internships' style={displayStyle}>Internships</a><LineEnd section={this.props.section} />
                <a class={displayClass} href='#' target='_contact' style={displayStyle}>Contact</a>
            </React.Fragment>
        );
    }
}


class LineEnd extends Component {
    render() {
        if (this.props.section === 'navBar') {
            return null;
        }
        else {
            return <br />;
        }
    }
}


const ArdentLogo = () => {
    return (
        <React.Fragment>
            <a class="navbar-brand" href='#'>
                <img src="./images/ardent-labs-logo.webp" style={{ background: 'transparent' }} />
            </a>
        </React.Fragment>
    );
};


export {
    ArdentLogo,
    NavigationLinks
}

