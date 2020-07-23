import React, { Component } from 'react';
import InternshipTitle from './SiteSections/InternshipPage/internshipTitle';
import InternshipDetails from './SiteSections/InternshipPage/internshipDetails';
import RenderMentors from './SiteSections/InternshipPage/renderMentors';
import YearRound from './SiteSections/InternshipPage/yearRound';

class InternshipPage extends Component {
    render() {
        return (
            <React.Fragment>
                <InternshipTitle />
                <InternshipDetails />
                <RenderMentors />
                <YearRound />
            </React.Fragment>
        );
    }
};

export default InternshipPage;