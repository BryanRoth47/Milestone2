import React, { Component } from 'react';
import { NavigationLinks, ArdentLogo } from './navigationLinks';

class NavBar extends Component {
    render() {
        const sectionName = 'navBar';
        return (
            <React.Fragment>
                <nav class="navbar navbar-expand-lg" id="navBarTop">
                    <ArdentLogo section={sectionName} />
                    <NavigationLinks section={sectionName} />
                </nav>
            </React.Fragment>
        );
    }
}

export default NavBar;


