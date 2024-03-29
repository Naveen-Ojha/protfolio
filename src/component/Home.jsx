import img from "../images/bg-img-1.jpg";
import React from "react";
import Typewriter from "typewriter-effect";
import { Button } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import AddIcon from "@material-ui/icons/Add";
// import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${img})`,
          width: "100%",
          height: "100vh",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container pt-5">
          <div className="center-vertically pt-5">
            <span className="title p-2">Hi There!</span>
            <h1 className="text-white font-bold text-40 line-height-60">
              I am Naveen Kant Ojha
              <Typewriter
                options={{
                  strings: [
                    "A Full Stack Developer.",
                    "I Love Coding.",
                    "A Web Desinger.",
                    "I Love to Develop.",
                    "A Python Developer.",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <h5 className="text-white mt-4">
              Perfection is achieved not when there is nothing more <br /> to
              add, but rather when there is nothing more to take away.
            </h5>
            <div className="mt-5 mb-5">
              <a rel="noreferrer" target='_blank' href="https://www.naukri.com/mnjuser/profile?id=&altresid">
                <Button
                  variant="contained"
                  color="primary"
                  className="p-3 me-4 mobile-margin-bottom"
                >
                  <span className="text-white font-bold">HIRE ME </span>{" "}
                  <span className="text-white ps-3">
                    <ArrowForwardIcon />
                  </span>
                </Button>
              </a>
              <Button
                variant="contained"
                color="default"
                className="p-3 mobile-margin-bottom"
              >
                <span className="text-primary font-bold">VIEW PROTFOLIO </span>{" "}
                <span className="text-primary ps-2">
                  <ArrowForwardIcon />
                </span>
              </Button>
            </div>
            <div className="mt-5">
              <a rel="noreferrer" target='_blank' href="https://www.facebook.com/profile.php?id=100006939617509" className="font-600 padding-right-4 text-white">
                <AddIcon />
                FACEBOOK
              </a> 
              <a rel="noreferrer" target='_blank' href="https://twitter.com/TheNaveenOjha" className="font-600 padding-right-4 text-white">
                <AddIcon />
                TWITTER
              </a>
              <a rel="noreferrer" target='_blank' href="https://www.linkedin.com/in/naveen-kant-ojha-13608b189/" className="font-600 text-white">
                <AddIcon />
                LINKEDIN
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
