import React, { Component } from 'react';

class YearRound extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 white justify-center">
                    <div className="container">
                        <div className="row justify-content-center white" style={{ marginTop: "50px" }}>
                            <h1 style={{ fontSize: '58px' }} >YEAR-ROUND INTERNSHIP PROGRAM</h1>

                            <h3 style={{ paddingLeft: '50px', paddingRight: '50px', fontSize: '21px' }}>
                                Interested in developing a career in leading tech companies? Consider participating in our summer internship, which is a part of our comprehensive year-round internship program! This program consists of three stages where each stage drives interns towards ultimately creating an MVP (Minimum Viable Product) and taking charge of their product vision from start to finish.
                            </h3>
                        </div>
                        <div className="row justify-content-center white" style={{ marginTop: '50px', marginBottom: '50px' }}>
                            <button type="button" className="btn btn-outline-light" style={{ borderWidth: '5px' }}>
                                <a href="https://ead60fcc-40f3-4b04-9c66-485499008c9a.filesusr.com/ugd/132a22_10acddd2d98747ed97eae09cef4f048e.pdf" target="_blank" rel="noopener noreferrer" data-type="document" style={{ display: 'inline-block' }} className='font24 white linkButton'>
                                    LEARN MORE ABOUT OUR PROGRAM HERE
                        </a>
                            </button>
                        </div>
                        <p className="font_8 white" style={{ fontSize: '21px', lineHeight: '1.2em', textAlign: 'center', marginBottom: "200px" }}>
                            {"If you are interested in applying, please send your resume and transcript to "}
                            <a href="mailto:info@ardentlabs.io?subject=Resume for Software Engineering Remote Internship" target="_blank" rel="noopener noreferrer" data-content="info@ardentlabs.io" data-type="mail" style={{ textDecoration: 'underline', color: "white" }}>info@ardentlabs.io</a>
                            .
                        </p>
                    </div>
                </div>
            </React.Fragment>
        );
    };
}

export default YearRound;