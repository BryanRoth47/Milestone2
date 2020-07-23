import React, { Component } from 'react';

class Portfolio extends Component {

    render() {
        return (
            <React.Fragment >
                <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3" style={{ backgroundColor: 'white' }}>
                    <h1 class="sectionHeading font88 ardentGrey">PORTFOLIO</h1>

                    <div class="container ">
                        <div class="row justify-content-md-center" style={{margin:'50px'}}>
                            <div class="col col-md-auto">
                                <img width='250' height='auto' src="https://static.wixstatic.com/media/132a22_c8bbc9968f4d4e7094ada4543bae9666~mv2.jpg" style={{ background: 'transparent' }}></img>
                            </div>
                            <div class="col col-md-auto">
                                <img width='250' height='auto' src="https://static.wixstatic.com/media/132a22_32254ec560934b9e8fc367a61e294eba~mv2.jpg"></img>
                            </div>
                        </div>
                        <div class="row" style={{margin:'80px'}}>
                            <div class="col">
                                <img width='250' height='auto' src="https://static.wixstatic.com/media/132a22_707013970bc84ee29a18e4fd4a4cd8e7~mv2.png"></img>
                            </div>
                            <div class="col">
                                <img width='250' height='auto' src="https://static.wixstatic.com/media/132a22_d47b9fe2e6a84bf48f609a8472957976~mv2.jpg"></img>
                            </div>
                            <div class="col">
                                <img width='250' height='auto' src="https://static.wixstatic.com/media/132a22_96c4edc8995c4e16a3286af85231445a~mv2.png"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    };
};

export default Portfolio;