import React from 'react';
// import img from '../images/profile-img.webp';
import ProgressBar from 'react-bootstrap/ProgressBar'
function About() {
    // const now = 60;

    // const progressInstance = <ProgressBar now={now} label={`${now}%`} />;
    return (
        <>
            <div className='container my-5 subtitle'>
                <div className='row'>
                    <div className='col-md-5'>
                        <img src={'https://www.desktopbackground.org/p/2012/03/26/364541_business-technology-28696-business-class-people-business-people_1400x990_h.jpg'} alt="about img" className='w-100' style={{ height: "400px" }} />
                    </div>
                    <div className='col-md-7 px-5'>
                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li className="tabs me-5" role="presentation">
                                <button className="custom-btn p-2 active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">ABOUT ME</button>
                            </li>
                            <li className="tabs me-5" role="presentation">
                                <button className="custom-btn p-2" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">SKILLS</button>
                            </li>
                            <li className="tabs me-5" role="presentation">
                                <button className="custom-btn p-2" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">EXPERIENCE</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show font-bold active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                <ul>
                                    <li> Birthday: 16th Nov 1999</li>
                                    <li> Age: 22 yrs</li>
                                    <li> Degree: Bachelor of Technology</li>
                                    <li> Major: Computer Science & Engineering</li>
                                    <li> Phone: +91 93192 96968</li>
                                    <li> Email: singh4248212@gmail.com</li>
                                    <li> City: New Delhi</li>
                                    <li> Country: India</li>
                                </ul>
                                {/* <h2 className='py-3'>My Story</h2> */}
                                {/* <p className='text-justify text-color'>
                                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                                </p> */}
                                {/* <h4 className='py-3'>I Do Web Design & Developement since I was 19 Years Old</h4> */}
                                {/* <p className='text-justify text-color'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p> */}
                            </div>
                            <div className="tab-pane fade font-bold " id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                <ul>
                                    <li> HTML5
                                        <ProgressBar now={98} label={`98%`} />

                                    </li>
                                    <li> CSS3
                                        <ProgressBar now={98} label={`98%`} />
                                    </li>
                                    <li> JavaScript
                                        <ProgressBar now={98} label={`98%`} />
                                    </li>
                                    <li> Bootstrap
                                        <ProgressBar now={98} label={`98%`} />
                                    </li>
                                    <li> Ajax
                                        <ProgressBar now={98} label={`98%`} />
                                    </li>
                                    <li> JSON
                                        <ProgressBar now={98} label={`98%`} />
                                    </li>
                                    <li> Angular 9+
                                        <ProgressBar now={98} label={`98%`} />
                                    </li>
                                    <li> Reactjs 16+
                                        <ProgressBar  now={98} label={`98%`} />
                                    </li>
                                    {/* <li> Angular Material
                                        <ProgressBar now={98} label={`98%`} />
                                    </li>
                                    <li> React Ui Material
                                        <ProgressBar now={98} label={`98%`} />
                                    </li> */}
                                </ul>
                                {/* <h2 className='py-3'>Skills</h2> */}
                                {/* <p className='text-justify text-color'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p> */}
                            </div>
                            <div className="tab-pane fade font-bold " id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                <ul>
                                    <li> Appin Technology Lab</li>
                                    <li> Front-end Developer</li>
                                    <li> [ January 2020 - January 2021] Full Time</li><br></br>

                                    <li> Appin Technology Lab</li>
                                    <li> Front-end Developer</li>
                                    <li> [ January 2020 - January 2021] Full Time</li><br></br>
                                </ul>

                                {/* <h2 className='py-3'>Art & Creative Director</h2>
                                <p className='text-justify text-color'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                <h2 className='py-3'>Art & Creative Director</h2>
                                <p className='text-justify text-color'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                <h2 className='py-3'>Art & Creative Director</h2>
                                <p className='text-justify text-color'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;
