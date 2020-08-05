import React, { Component } from 'react';

class Mentor extends Component {

    render() {
        const listOfMentors = {
            'Danial': {
                name: 'Danial',
                position: 'Full time job offer at Western Digital',
                image: 'https://static.wixstatic.com/media/132a22_0b1ddd50eba044b7b98b89ed1f9bf0b8~mv2.png'
            },
            'Ryan': {
                name: 'Ryan',
                position: 'Full time job offer at Amazon',
                image: 'https://static.wixstatic.com/media/132a22_f05e88c48bb84703a5c5136b97fc64ec~mv2.png'
            },
            'Nisarg': {
                name: 'Nisarg',
                position: 'Full time job offer at Amazon',
                image: 'https://static.wixstatic.com/media/132a22_a079932192464842a4d7e8a06daa394d~mv2.png'
            },
            'Alvin': {
                name: 'Alvin',
                position: 'Accepted intern at Amazon',
                image: 'https://static.wixstatic.com/media/132a22_a14bcd27554f484ab5feb8cfb74dc1e8~mv2.png'
            },
            'Kuixi': {
                name: 'Kuixi',
                position: 'Accepted intern at Amazon',
                image: 'https://static.wixstatic.com/media/132a22_1a6f7865e12f4b4082ec06757a84a765~mv2.png'
            }
        }

        let currentMentor = listOfMentors[this.props.name];

        if (typeof (currentMentor) === 'undefined') {
            return (<div className="col-2"></div>)
        }
        else {
            return (
                <React.Fragment>
                    <div className="col-2">
                        <img alt={this.props.name} width="160" height="160" className="rounded-circle" src={currentMentor.image} />
                    </div>
                    <div className="col">
                        <JobBlurb name={currentMentor.name} position={currentMentor.position} />
                    </div>
                </React.Fragment>
            );
        }
    };
}

export default Mentor;


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
            <span style={{ fontSize: '18px', fontFamily: 'sans-serif', fontStyle: "italic" }}>
                {props.position}
            </span>
        </React.Fragment>
    )
}