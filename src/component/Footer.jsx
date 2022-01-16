import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

export default function Footer() {
    return (
        <div>
            <section className="footer pt-5 pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <ul>
                                <h3>Nk.Ojha</h3>
                                <li className='py-2'>
                                    A small river named Duden flows by their place and supplies it with the necessary regelialia
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <ul>
                                <h4>Services</h4>
                                <li className='py-2'>
                                    <a className='footer-color'><ArrowForwardIcon /> <span>Web Design</span></a>
                                </li>
                                <li className='py-2'>
                                    <a className='footer-color'><ArrowForwardIcon /> <span>Web Development</span> </a>
                                </li>
                                <li className='py-2'>
                                    <a className='footer-color'><ArrowForwardIcon /> <span>Graphic Design</span></a>
                                </li>
                                <li className='py-2'>
                                    <a className='footer-color'><ArrowForwardIcon />  <span>UI/UX Design</span></a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <ul>
                                <h4>Have a question?</h4>
                                <li className='py-2'>
                                    <a className='footer-color'><ArrowForwardIcon /> <span>D-221 patel garden Dwarka more <span className='ms-4 ps-1'>New Delhi(India)</span> </span></a>
                                </li>
                                <li className='py-2'>
                                    <a className='footer-color'><ArrowForwardIcon /><span>+91 8770434284</span></a>
                                </li>
                                <li className='py-2'>
                                    <a className='footer-color'><ArrowForwardIcon /><span> naveen.ojha.rewa@gmail.com</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="second-footer py-5">
                <div className="container">
                    <div className="text-center"> Copyright ©2021 All rights reserved | This template is made with ❤️  by Naveen Kant Ojha </div>
                </div>
            </section>
        </div>
    )
}
