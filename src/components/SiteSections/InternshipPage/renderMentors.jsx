import React, { Component } from 'react';
import Mentor from './mentors';

class RenderMentors extends Component {

    render() {
        return (
            <React.Fragment>
                <div className='container'>
                    <div className="row justify-content-center white" style={{ marginTop: "50px" }}>
                        <Mentor name={'Danial'} />

                        <Mentor name={'Ryan'} />
                    </div>

                    <div className="row justify-content-center white" style={{ marginTop: "50px" }}>
                        <Mentor name={'Nisarg'} />

                        <Mentor name={'Alvin'} />
                    </div>

                    <div className="row justify-content-center white" style={{ marginTop: "50px" }}>
                        <Mentor name={'Kuixi'} />

                        <Mentor />
                    </div>
                    <div className="row justify-content-center">
                        <div className='col col-sm-3 white'style={{ borderBottomWidth: "5px", borderBottomStyle: 'solid', marginTop: "30px", paddingTop: '15px', boxSizing: 'border-box' }}>

                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    };
}

export default RenderMentors;