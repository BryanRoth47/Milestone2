import React, { Component } from 'react';
import {NavigationLinks, ArdentLogo} from './navigationLinks';

class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav class="nav" >
                    <div class="container d-flex flex-column flex-md-row justify-content-between" >
                        <ArdentLogo />
                        <NavigationLinks section={'navBar'}/>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default NavBar;


