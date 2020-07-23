import React, { Component } from 'react';

class InternshipDetails extends Component {

    render() {
        return (
            <React.Fragment>
                <div class="row white" style={{ paddingLeft: '50px', marginTop: "50px" }}>

                    <QuestionMark_SVG />
                    <h3 style={{ fontSize: '42px', marginLeft: '10px' }}>Why should you intern at Ardent Labs?</h3>
                    <div style={{ fontSize: '21px', color: 'white' }}>
                        <p>
                            Our mission is to provide interns the support and resources needed to develop both professional and technical skills that will jump-start their career. Our last cohort of interns were accepted into major companies such as Google, Amazon, Walmart, Siemens, and Cerner Corporation.
                            <br />
                            As an Ardent Labs intern, every task given to you is never trivial, makes an impact, and most importantly, helps you learn something new and improve upon your current skills. You will also have the rare opportunity to gain mentorship from our lead software engineers, who will guide you through industry-standard software development practices.
                        </p>
                    </div>
                </div>

                <div class="row white" style={{ paddingLeft: '50px', marginTop: "50px" }}>
                    <div style={{ transform: 'rotate(330deg)' }}>
                        <Pencil_SVG />
                    </div>
                    <h3 style={{ fontSize: '42px', marginLeft: '10px' }}>What will you learn?</h3>

                    <div style={{ fontSize: '21px', color: 'white' }}>
                        <p>
                            This internship provides aspiring software engineers the opportunity to learn modern web development tools such as HTML/CSS, JavaScript, React/React Native, GraphQL, and version control through Git.
                        </p>
                    </div>
                </div>

                <div class="row white" style={{ paddingLeft: '50px', marginTop: "50px" }}>
                    <div>
                        <Computer_SVG />
                    </div>
                    <h3 style={{ fontSize: '42px', marginLeft: '10px' }}>What will  you do?</h3>

                    <div style={{ fontSize: '21px', color: 'white' }}>
                        <p>
                            During the 8-10 weeks internship, interns will work on learning the tools used by our products through completing milestone projects. There will be four milestone projects to work on throughout the program that interns can complete at their own pace.
                            <br />
                            <br />
                            Interns will be required to work at least 10 hours per week to make sufficient progress on these projects.
                        </p>
                    </div>
                </div>

                <div class="row white" style={{ paddingLeft: '50px', marginTop: "50px" }}>
                    <div>
                        <Flag_SVG />
                    </div>
                    <h3 style={{ fontSize: '42px', marginLeft: '10px' }}>When does the program end?</h3>

                    <div class="white">
                        <p class="font_8" style={{lineHeight:"1.2em"}}>
                            <span style={{fontSize:"21px"}}>
                                    <span class="color_11">
                                        <span style={{fontFamily:"din-next-w01-light,din-next-w02-light,din-next-w10-light,sans-serif"}}>
                                            This virtual internship takes place during the duration of UCI's spring quarter. The internship will end on June 5th
                                        <span style={{textDecoration:"underline"}}>,</span>
                                        {"and interns who are interested in the summer internship will need to send in another application around May 10th. To learn more about about our summer internships, "}
                                        <span style={{textDecoration:"underline"}}>
                                                <a href="https://ead60fcc-40f3-4b04-9c66-485499008c9a.filesusr.com/ugd/132a22_10acddd2d98747ed97eae09cef4f048e.pdf" target="_blank" data-type="document" class='white'>click here</a>
                                            </span>.
                                        </span>
                                    </span>
                            </span>
                        </p>
                    </div>
                </div>

                <div class="row white" style={{ paddingLeft: '50px', marginTop: "50px" }}>
                    <div>
                        <Person_SVG />
                    </div>
                    <h3 style={{ fontSize: '42px', marginLeft: '10px' }}>Meet the Mentors</h3>

                    <div style={{ fontSize: '21px', color: 'white' }}>
                        <p>
                            Meet our lead software engineers, who have been offered full time jobs and internships from renowned tech companies such as Amazon and Western Digital:
                        </p>
                    </div>
                </div>
            </React.Fragment >
        );
    };
}

export default InternshipDetails;


const QuestionMark_SVG = () => {
    return (
        <svg preserveAspectRatio="xMidYMid meet" id="comp-k8xpagk7svgcontent" data-bbox="39 39.5 122 121" viewBox="39 39.5 122 121" height="41" width="41" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img">
            <g>
                <path d="M100 160.5c-33.636 0-61-27.142-61-60.502C39 66.639 66.364 39.5 100 39.5c33.634 0 61 27.139 61 60.498 0 33.36-27.366 60.502-61 60.502zm0-112.573c-28.951 0-52.506 23.359-52.506 52.071 0 28.718 23.554 52.079 52.506 52.079 28.953 0 52.505-23.361 52.505-52.079.001-28.712-23.552-52.071-52.505-52.071z" fill="white" data-color="1"></path>
                <path d="M104.244 118.815h-8.492v-6.817c0-7.491 5.638-12.982 10.167-17.395.453-.444.901-.878 1.335-1.311a10.063 10.063 0 0 0 3.008-7.197c0-5.611-4.602-10.176-10.264-10.176-5.658 0-10.262 4.564-10.262 10.176h-8.495c0-10.256 8.414-18.601 18.757-18.601s18.759 8.345 18.759 18.601c0 4.968-1.952 9.64-5.496 13.154-.453.449-.916.902-1.389 1.362-3.751 3.653-7.628 7.427-7.628 11.386v6.818z" fill="white" data-color="1" stroke='white'></path>
                <path fill="white" d="M104.244 126.709v8.42h-8.49v-8.42h8.49z" data-color="1"></path>
            </g>
        </svg>
    );
};


const Pencil_SVG = () => {
    return (
        <svg preserveAspectRatio="xMidYMid meet" id="comp-k8xpg73h1svgcontent" data-bbox="73 28 54 144" viewBox="73 28 54 144" height="51" width="40" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img" aria-labelledby="comp-k8xpg73h1-svgtitle"><title id="comp-k8xpg73h1-svgtitle"></title>
            <g>
                <path d="M73 28v88.138L99.999 172 127 116.138V28.002L73 28zm45.692 8.463v74.762H81.308V36.46l37.384.003zm-34.719 83.222h32.053L100 152.841l-16.027-33.156z" fill="white" data-color="1"></path>
            </g>
        </svg>
    );
};


const Computer_SVG = () => {
    return (
        <svg preserveAspectRatio="xMidYMid meet" id="comp-k8xpgnkusvgcontent" data-bbox="31 52 138 96" viewBox="31 52 138 96" height="32" width="46" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img" aria-labelledby="comp-k8xpgnku-svgtitle"><title id="comp-k8xpgnku-svgtitle"></title>
            <g>
                <path d="M169 148l-16.948-26.356V52H47.955v69.644L31 148h138zm-122.581-8.422l8.033-12.486h91.1l8.033 12.486H46.419zm9.943-79.156h87.28v58.249h-87.28V60.422z" fill="white" data-color="1"></path>
            </g>
        </svg>
    );
};

const Flag_SVG = () => {
    return (
        <svg preserveAspectRatio="xMidYMid meet" id="comp-k8xph3wwsvgcontent" data-bbox="49 43 102 114" viewBox="49 43 102 114" height="41" width="36" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img" aria-labelledby="comp-k8xph3ww-svgtitle"><title id="comp-k8xph3ww-svgtitle"></title>
            <g>
                <path d="M119.251 80.852L151 43H49v114h8.415v-38.299H151l-31.749-37.849zM57.415 51.469h75.468l-24.645 29.382 24.643 29.38H57.415V51.469z" fill="white" data-color="1"></path>
            </g>
        </svg>
    );
}


const Person_SVG = () => {
    return (
        <svg preserveAspectRatio="xMidYMid meet" id="comp-k8xpi6vk2svgcontent" data-bbox="38 41 123.999 118" viewBox="38 41 123.999 118" height="39" width="41" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img" aria-labelledby="comp-k8xpi6vk2-svgtitle"><title id="comp-k8xpi6vk2-svgtitle"></title>
            <g>
                <path d="M161.971 159H38.033L38 139.652c-.011-9.519 5.151-16.928 14.155-20.333 3.37-1.276 17.158-5.928 23.247-7.975v-10.233c-4.176-17.061-6.671-27.43-4.369-37.093C74.363 50.055 85.732 41.02 99.994 41c14.276.02 25.647 9.055 28.977 23.018 2.304 9.658-.192 20.029-4.371 37.092v10.234c6.089 2.047 19.877 6.699 23.249 7.976 9.007 3.404 14.164 10.813 14.15 20.331L161.971 159zm-115.504-8.453h107.068l.018-10.908c.009-5.967-2.996-10.258-8.689-12.411-4.123-1.562-25.611-8.763-25.829-8.834l-2.882-.967V100.09l.121-.495c4.273-17.459 6.25-26.18 4.479-33.614-1.901-7.978-8.355-16.509-20.759-16.526-12.388.017-18.842 8.547-20.745 16.527-1.771 7.436.204 16.156 4.481 33.613l.121.495v17.337l-2.882.967c-.217.072-21.706 7.272-25.824 8.833-5.697 2.153-8.702 6.445-8.698 12.413l.02 10.907z" fill="white" data-color="1"></path>
            </g>
        </svg>
    );
};