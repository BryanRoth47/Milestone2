import React, { Component } from 'react';
import NGLandIMG from './SiteSections/HomePage/NGLandIMG';
import WhatWeDo from './SiteSections/HomePage/WhatWeDo';
import WhoWeAre from './SiteSections/HomePage/WhoWeAre';
import Portfolio from './SiteSections/HomePage/portfolio';
import Internships from './SiteSections/HomePage/internships';

class HomePage extends Component {
    render() {
        return (
            // <NavBar> and <Footer> are on both pages, so they're handled in App.js
            <React.Fragment>
                <NGLandIMG />
                <WhatWeDo />
                <WhoWeAre />
                <Portfolio />
                <Internships />
            </React.Fragment>
        );
    }

};

export default HomePage;