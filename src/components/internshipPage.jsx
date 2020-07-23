import React, { Component } from 'react';
import InternshipTitle from './SiteSections/InternshipPage/internshipTitle';
import InternshipDetails from './SiteSections/InternshipPage/internshipDetails';
import Mentors from './SiteSections/InternshipPage/mentors';

class InternshipPage extends Component {
    render() {
        return (
            <React.Fragment>
                <InternshipTitle />
                <InternshipDetails />
                <Mentors />
            </React.Fragment>
        );
    }
};

export default InternshipPage;