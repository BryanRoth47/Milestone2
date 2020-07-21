import React, { Component } from 'react';
import NGL_and_IMG from './SiteSections/HomePage/NGL_and_IMG';
import WhatWeDo from './SiteSections/HomePage/WhatWeDo';
import WhoWeAre from './SiteSections/HomePage/WhoWeAre';
import Portfolio from './SiteSections/HomePage/portfolio';
import Internships from './SiteSections/HomePage/internships';

class HomePage extends Component {
    render() {
        return (
            // <NavBar> and <Footer> are on both pages, so they're handled in App.js
            <React.Fragment>
                <NGL_and_IMG />
                <WhatWeDo />
                <WhoWeAre />
                <Portfolio />
                <Internships />
            </React.Fragment>
        );
    }

};

export default HomePage;