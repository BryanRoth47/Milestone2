import React, { Component } from 'react';
import { NavigationLinks, ArdentLogo } from './navigationLinks';

class NavBar extends Component {
    render() {
        const sectionName = 'navBar';
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg" id="navBarTop" style={{position:"relative", left:"200px", width:"80%"}}>
                    <ArdentLogo section={sectionName} />
                    <NavigationLinks section={sectionName} />
                </nav>
            </React.Fragment>
        );
    }
}

export default NavBar;


