import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../App.css'

export default function header() {

    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 130 || document.documentElement.scrollTop > 130) {
            var element = document.getElementById("navbar");
            element.classList.add("header-sroll");
        } else {
            var element = document.getElementById("navbar");
            element.classList.remove("header-sroll");
        }
    }

    return (
        <div>
            <div className="container">
                <nav class="navbar navbar-expand-lg fixed-top ftco-navbar-light pt-3" id="navbar">
                    <div class="container">
                        <Link class="navbar-brand text-white align-items-center" to="#">
                            Nk.ojha
                        </Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="fa fa-bars"></span> Menu
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li class="nav-item"><Link to="/">Home</Link></li>
                                <li class="nav-item"><NavLink to="/about">About</NavLink></li>
                                <li class="nav-item"><NavLink to="/services">Services</NavLink></li>
                                <li class="nav-item"><NavLink to="/portfolio">Portfolio</NavLink></li>
                                <li class="nav-item"><NavLink to="/pricing">Pricing</NavLink></li>
                                <li class="nav-item"><NavLink to="/blog">Blog</NavLink></li>
                                <li class="nav-item"><NavLink to="/contactme">Contact</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
