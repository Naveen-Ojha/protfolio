import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from 'react-router-dom';
import ReactWhatsapp from 'react-whatsapp';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

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
                                    A Full Stack Developer. If you want to create a website or you have some queries, then feel free to contact me.
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <ul>
                                <h4>Services</h4>
                                <li className='py-2'>
                                    <Link to="" className='footer-color'><ArrowForwardIcon /> <span>Web Design</span></Link>
                                </li>
                                <li className='py-2'>
                                    <Link to="" className='footer-color'><ArrowForwardIcon /> <span>Web Development</span> </Link>
                                </li>
                                <li className='py-2'>
                                    <Link to="" className='footer-color'><ArrowForwardIcon /> <span>Graphic Design</span></Link>
                                </li>
                                <li className='py-2'>
                                    <Link to="" className='footer-color'><ArrowForwardIcon />  <span>UI/UX Design</span></Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <ul>
                                <h4>Have a question?</h4>
                                <li className='py-2'>
                                    <Link to="" className='footer-color'><ArrowForwardIcon /> <span>Dwarka more <span className=''>New Delhi(India)</span> </span></Link>
                                </li>
                                <li className='py-2'>
                                    <a rel="noreferrer" href="http://wa.me/+917415272944" target='_blank' className='footer-color'><ArrowForwardIcon /><span>Connect with What's App</span></a>
                                </li>
                                <li className='py-2'>
                                    <a rel="noreferrer" target='_blank' href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDXmclMfNKqWkNQWzbBNTCrPGzWmnkGCcfDQjSMFrjLfLlBWqKGWbGqrsJLXmMFVVQwWQCS" className='footer-color'><ArrowForwardIcon /><span> naveen.ojha.rewa@gmail.com</span></a>
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
            <div>
                <ReactWhatsapp className="whatappp" number="7415272944" message="Hello Naveen">
                    <WhatsAppIcon className='btn-success custom-whatapp' />
                </ReactWhatsapp>
            </div>
        </div>
    )
}
