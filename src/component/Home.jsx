// import img from "../images/bg-img.webp"
import React from 'react'
import Typewriter from 'typewriter-effect';
import { Button } from "@material-ui/core";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
// import AddIcon from '@material-ui/icons/Add';
// import { Link } from 'react-router-dom';
import pdf from '../images/twst.pdf'

export default function Home() {
    return (
        <>
            <div style={{ backgroundImage: `url(https://wallpaperaccess.com/full/5651999.jpg)`, width: "100%", height: "100vh" }}>
                <div className="container pt-5">
                    <div className="center-vertically pt-5">
                        <span className="title p-2">Hi There!</span>
                        <h1 className="text-white font-bold text-35 line-height-60">I am Shivam Singh<Typewriter
                            options={{
                                strings: ['I am an Engineer.','A Full Stack Developer.'],
                                autoStart: true,
                                loop: true,
                            }}
                        /></h1>
                        <h6 className="text-white mt-4">Any fool can write code that a computer can<br></br> understand. Good programmers write code <br></br>that humans can understand.</h6>
                        <div className="mt-5 mb-5">
                            <Button variant="contained" color="primary" className="p-3 me-4">
                                <span className="text-white font-bold"> <a href={pdf}>HIRE ME</a> </span> <span className="text-white ps-3"><ArrowForwardIcon /></span>
                            </Button>
                            <Button variant="contained" color="default" className="p-3">
                                <span className="text-primary font-bold">VIEW PROTFOLIO </span> <span className="text-primary ps-2"><ArrowForwardIcon /></span>
                            </Button>
                        </div>
                        {/* <div className="mt-5">
                            <Link to="/" className="font-600 pe-4 text-white"><AddIcon />FACEBOOK</Link>
                            <Link to="/" className="font-600 pe-4 text-white"><AddIcon />TWITTER</Link>
                            <Link to="/" className="font-600 text-white"><AddIcon />LINKEDIN</Link>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}
