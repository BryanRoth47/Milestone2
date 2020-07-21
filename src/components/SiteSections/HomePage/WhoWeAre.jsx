import React, { Component } from 'react';

class WhoWeAre extends Component {

    render() {
        return (
            <React.Fragment >
                <div id="test_link" class="position-relative overflow-hidden p-3 p-md-5 m-md-3" style={{ backgroundColor: '#0099ff', color:'white'}}>
                    <h1 class="display-4 font-weight-normal">WHO WE ARE</h1>

                    <div class="container">
                        <div class="row" >
                            <div class="col">
                                <img width='250' height='auto' src="../images/story_icon.png"></img>
                            </div>
                            <div class="col">
                                <h3>OUR STORY</h3>
                                <p style={{ width: '80%' }}>Ardent Labs' team of entrepreneurs develop business ideas in learning science 
                                    and technology. The minimum viable product (MVP) of these ideas are quickly developed and tested to get  
                                    feedback and market validation. Successful MVPs will receive seed funding to fully develop the app. 
                                    The most promising ones get spun-off as independent companies by the lead entrepreneur(s) from the 
                                    lab upon receiving venture funding.</p>
                            </div>
                        </div>
                        <div class="row" >
                            <div class="col">
                                <img width='250' height='auto' src="../images/eye_icon.png"></img>
                            </div>
                            <div class="col">
                                <h3>OUR VISION</h3>
                                <p style={{ width: '80%' }}>Artificial Intelligence and 5G Networks are disruptive technologies that will lead to 
                                    highly interactive and personalized learning experiences for students, more effective learning management tools
                                    for teachers, and holistic evaluation of student performance for parents. We invest in companies, incubate 
                                    start-ups, and develop software and solutions that meet the needs of next generation learning.</p>
                            </div>
                        </div>
                        <div class="row" >
                            <div class="col">
                                <img width='250' height='auto' src="../images/technology_icon.png"></img>
                            </div>
                            <div class="col">
                                <h3>TECHNOLOGY</h3>
                                <p style={{ width: '80%' }}>Artificial Intelligence and 5G Networks are disruptive technologies that will lead to highly 
                                    interactive and personalized learning experiences for students, more effective learning management tools for teachers, and 
                                    holistic evaluation of student performance for parents. We invest in companies, incubate start-ups, and develop software 
                                    and solutions that meet the needs of next generation learning.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </React.Fragment>
        )
    };
};

export default WhoWeAre;