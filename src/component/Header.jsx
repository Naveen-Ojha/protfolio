import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../App.css'
import ReorderIcon from '@material-ui/icons/Reorder';

export default function header() {

    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 130 || document.documentElement.scrollTop > 130) {
            var element = document.getElementById("navbar");
            element.classList.add("header-sroll");
        } else {
            var ele = document.getElementById("navbar");
            ele.classList.remove("header-sroll");
        }
    }

    return (
        <div>
            <div className="container">
                <nav className="navbar navbar-expand-lg fixed-top ftco-navbar-light pt-3 mobile-navbar-bg-color" id="navbar">
                    <div className="container">
                        <Link className="navbar-brand text-white align-items-center" to="#">
                            Nk.ojha
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="fa fa-bars"></span> <ReorderIcon />
                        </button>
                        <div className="collapse navbar-collapse navrbar-collapse-item" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item"><Link to="/">Home</Link></li>
                                <li className="nav-item"><NavLink to="/about">About</NavLink></li>
                                <li className="nav-item"><NavLink to="/services">Services</NavLink></li>
                                <li className="nav-item"><NavLink to="/portfolio">Portfolio</NavLink></li>
                                <li className="nav-item"><NavLink to="/pricing">Pricing</NavLink></li>
                                <li className="nav-item"><NavLink to="/blog">Blog</NavLink></li>
                                <li className="nav-item"><NavLink to="/contactme">Contact</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
