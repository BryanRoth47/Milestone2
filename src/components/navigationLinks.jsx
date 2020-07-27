import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NavigationLinks extends Component {

    render() {

        //let displayClass = {displayClass};
        let displayClass;

        let displayStyle = { color: 'white', fontSize: '13px' }
        //let listStyle = {};

        if (this.props.section === 'navBar') {
            displayClass = "nav-link";
            displayStyle.marginTop = '50px';
        }
        else {
            displayClass = "py-2 d-none d-md-inline-block";
            displayStyle.marginTop = '0px';
        }

        let listOfLinks = [
            <React.Fragment><a class={displayClass} href='/#navBarTop' style={displayStyle}>Home</a><LineEnd section={this.props.section} /></React.Fragment>,
            <React.Fragment><Link class={displayClass} to='/software-engineering-internship' target='_parent' style={displayStyle}>Software Engineering Virtual Internship</Link><LineEnd section={this.props.section} /></React.Fragment>,
            <React.Fragment><a class={displayClass} href='/#whatWeDo' style={displayStyle}>Mission</a><LineEnd section={this.props.section} /></React.Fragment>,
            <React.Fragment><a class={displayClass} href='/#whoWeAre' style={displayStyle}>About</a><LineEnd section={this.props.section} /></React.Fragment>,
            <React.Fragment><a class={displayClass} href='/#portfolio' style={displayStyle}>Portfolio</a><LineEnd section={this.props.section} /></React.Fragment>
        ]

        if (this.props.section === 'navBar') {
            return (
                <React.Fragment>
                    <ul class="navbar-nav mr-auto" >
                        <li style={{ marginLeft: '100px' }}></li>
                        {listOfLinks.map(aLink => (
                            <li class="nav-item">
                                {aLink}
                            </li>
                        ))}
                        <li class='nav-item'>
                            <DropDown section={this.props.section} displayStyle={displayStyle} />
                        </li>
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
            return (
                <div class="dropdown">
                    <a class="nav-link dropdown-toggle white" href='#' id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ marginTop: '50px', fontSize: '13px' }}>More...</a>
                    <div class="dropdown-menu" aria-labelledby="dropdown01" style={{ background: 'rgba(63,96,151,0.6)', minWidth: '80px' }} >
                        <LastTwoLinks section={this.props.section} displayStyle={this.props.displayStyle} />
                    </div>
                </div>);
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
            displayStyle.marginTop = '0px';
        }
        else {
            displayClass = "py-2 d-none d-md-inline-block";
            displayStyle.marginTop = '0px';
        }



        return (
            <React.Fragment>
                <a class={displayClass} href='/#internships' style={displayStyle}>Internships</a><LineEnd section={this.props.section} />
                <a class={displayClass} href='/#contact' style={displayStyle}>Contact</a>
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


const ArdentLogo = (props) => {
    let imgWidth;
    let imgHeight;
    if (props.section === 'navBar') {
        imgWidth = '300';
        imgHeight = '60';
    }
    else {
        imgWidth = '210';
        imgHeight = '43';
    }
    return (
        <React.Fragment>
            <a class="navbar-brand" href='#' style={{ marginTop: '5px', marginLeft: '20px' }}>
                <img width={imgWidth} height={imgHeight} src="https://static.wixstatic.com/media/132a22_c124961f91294369b46aeaebf0b2182b~mv2.png" style={{ background: 'transparent' }} />
            </a>
        </React.Fragment>
    );
};


export {
    ArdentLogo,
    NavigationLinks
}

