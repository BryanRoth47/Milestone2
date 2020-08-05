import React, { Component } from 'react';

class Portfolio extends Component {

    render() {
        return (
            <React.Fragment >
                <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3" id="portfolio" style={{ backgroundColor: 'white', width: "105%", position: "relative", left: "-15px", top:"-32px" }}>
                    <h1 className="sectionHeading font88 ardentGrey" style={{ position: "relative", left: "200px" }}>PORTFOLIO</h1>

                    <div className="container ">
                        <div className="row justify-content-md-center" style={{ margin: '50px' }}>
                            <div className="col col-md-auto">
                                <img alt="ardentAcademy" width='250' height='auto' src="https://static.wixstatic.com/media/132a22_c8bbc9968f4d4e7094ada4543bae9666~mv2.jpg" style={{ background: 'transparent' }}></img>
                            </div>
                            <div className="col col-md-auto">
                                <img alt="steamForAll" width='250' height='auto' src="https://static.wixstatic.com/media/132a22_32254ec560934b9e8fc367a61e294eba~mv2.jpg"></img>
                            </div>
                        </div>
                        <div className="row" style={{ margin: '80px' }}>
                            <div className="col">
                                <img alt="chi" width='250' height='auto' src="https://static.wixstatic.com/media/132a22_707013970bc84ee29a18e4fd4a4cd8e7~mv2.png"></img>
                            </div>
                            <div className="col">
                                <img alt="peerGenius" width='250' height='auto' src="https://static.wixstatic.com/media/132a22_d47b9fe2e6a84bf48f609a8472957976~mv2.jpg"></img>
                            </div>
                            <div className="col">
                                <img alt="voluntu" width='250' height='auto' src="https://static.wixstatic.com/media/132a22_96c4edc8995c4e16a3286af85231445a~mv2.png"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    };
};

export default Portfolio;