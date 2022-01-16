import img from "../images/bg-img.webp"
import React from 'react'
import Typewriter from 'typewriter-effect';
import { Button } from "@material-ui/core";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <div style={{ backgroundImage: `url(${img})`, width: "100%", height: "100vh" }}>
                <div className="container pt-5">
                    <div className="center-vertically pt-5">
                        <span className="title p-2">Hi There!</span>
                        <h1 className="text-white font-bold text-40 line-height-60">I am Naveen Kant Ojha<Typewriter
                            options={{
                                strings: ['A Full Stack Developer.', 'I Love Coding.', 'A Web Desinger.', 'I Love to Develop.'],
                                autoStart: true,
                                loop: true,
                            }}
                        /></h1>
                        <h5 className="text-white mt-4">Far far away, behind the word mountains, far from the <br /> countries India, there live the blind texts.</h5>
                        <div className="mt-5 mb-5">
                            <Button variant="contained" color="primary" className="p-3 me-4">
                                <span className="text-white font-bold">HIRE ME </span> <span className="text-white ps-3"><ArrowForwardIcon /></span>
                            </Button>
                            <Button variant="contained" color="white" className="p-3">
                                <span className="text-primary font-bold">VIEW PROTFOLIO </span> <span className="text-primary ps-2"><ArrowForwardIcon /></span>
                            </Button>
                        </div>
                        <div className="mt-5">
                            <Link to="/" className="font-600 pe-4 text-white"><AddIcon />FACEBOOK</Link>
                            <Link to="/" className="font-600 pe-4 text-white"><AddIcon />TWITTER</Link>
                            <Link to="/" className="font-600 text-white"><AddIcon />LINKEDIN</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
