import React, { Component } from 'react';
import Mentor from './mentors';

class RenderMentors extends Component {

    render() {
        return (
            <React.Fragment>
                <div class='container'>
                    <div class="row justify-content-center white" style={{ marginTop: "50px" }}>
                        <Mentor name={'Danial'} />

                        <Mentor name={'Ryan'} />
                    </div>

                    <div class="row justify-content-center white" style={{ marginTop: "50px" }}>
                        <Mentor name={'Nisarg'} />

                        <Mentor name={'Alvin'} />
                    </div>

                    <div class="row justify-content-center white" style={{ marginTop: "50px" }}>
                        <Mentor name={'Kuixi'} />

                        <Mentor />
                    </div>
                    <div class="row justify-content-center">
                        <div class='col col-sm-3 white'style={{ borderBottomWidth: "5px", borderBottomStyle: 'solid', marginTop: "30px", paddingTop: '15px', boxSizing: 'border-box' }}>

                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    };
}

export default RenderMentors;


const JobBlurb = (props) => {
    return (
        <React.Fragment>
            <span style={{ fontSize: '32px', fontFamily: 'Helvetica' }}>
                {props.name.toUpperCase()}
            </span>
            <br />
            <span style={{ fontSize: '18px', fontFamily: 'sans-serif', fontWeight: 'bold' }}>
                Software Engineer at Ardent Labs
            </span>
            <br />
            <span style={{ fontSize: '18px', fontFamily: 'sans-serif', fontStyle:"italic" }}>
                {props.position}
            </span>
        </React.Fragment>
    )
}