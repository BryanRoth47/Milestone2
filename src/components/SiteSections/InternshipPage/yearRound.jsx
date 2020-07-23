import React, { Component } from 'react';

class YearRound extends Component {

    render() {
        return (
            <React.Fragment>
                <div class="row justify-content-center white" style={{ marginTop: "50px" }}>
                    <h1 style={{ fontSize: '58px' }} >YEAR-ROUND INTERNSHIP PROGRAM</h1>

                    <h3 style={{ paddingLeft: '50px', paddingRight: '50px', fontSize: '21px' }}>
                        Interested in developing a career in leading tech companies? Consider participating in our summer internship, which is a part of our comprehensive year-round internship program! This program consists of three stages where each stage drives interns towards ultimately creating an MVP (Minimum Viable Product) and taking charge of their product vision from start to finish.
                    </h3>
                </div>
                <div class="row justify-content-center white" style={{ marginTop: '50px', marginBottom: '50px' }}>
                    <button type="button" class="btn btn-outline-light" style={{ borderWidth: '5px' }}>
                        <a href="https://ead60fcc-40f3-4b04-9c66-485499008c9a.filesusr.com/ugd/132a22_10acddd2d98747ed97eae09cef4f048e.pdf" target="_blank" data-type="document" style={{ display: 'inline-block' }} class='font24 white linkButton'>
                            LEARN MORE ABOUT OUR PROGRAM HERE
                        </a>
                    </button>
                </div>
                <div style={{ width: '980px', pointerEvents: "none", justifyContent: 'center', marginLeft: '75px', marginBottom: '150px' }}>
                    <p class="font_8" style={{ fontSize: '21px', lineHeight: '1.2em', textAlign: 'center' }}>
                        <span class='white'>
                            {'If you are interested in applying, please send your resume and transcript to '}
                            <span style={{ textDecoration: 'underline' }}>
                                <a href="mailto:info@ardentlabs.io?subject=Resume for Software Engineering Remote Internship" target="_self" data-content="info@ardentlabs.io" data-type="mail" class='white'>info@ardentlabs.io</a>
                            </span>.
                                </span>
                    </p>
                </div>
            </React.Fragment>
        );
    };
}

export default YearRound;