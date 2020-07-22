import React, { Component } from 'react';
import {NavigationLinks, ArdentLogo} from './navigationLinks';

class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav class="navbar navbar-expand-lg" >
                        <ArdentLogo />
                        <NavigationLinks section={'navBar'}/>
                    
                </nav>
            </React.Fragment>
        );
    }
}

export default NavBar;


