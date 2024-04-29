import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import LogoTitle from "../../assets/images/logo-s.png";
import ProfilePic from "../../assets/Profile.png";
import "./index.scss";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const nameArray = [" ", "D", "h", "e", "e", "r", "a", "j", " "];
  const lastArray = ["e", "h", "g", "a", "l", ","];
  const jobArray = [
    "A",
    " ",
    "W",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 5000);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1 className="intro-text">
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m </span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
              className="img-fluid"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={lastArray}
              idx={24}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={30}
            />
          </h1>
          <h2>
            Full Stack Developer / Machine Learning Enthusiast / MERN Stack
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <div className="secondary-container">
          <div className="profile-container">
            <img src={ProfilePic} alt="profile" />
          </div>
          <div className="profile-details">
            <div className="colz first-col">
              <span>300+</span>
              <p>DSA problems solved</p>
            </div>
            <div className="colz">
              <span>18+</span>
              <p>verified skills</p>
            </div>
            <div className="colz third-col">
              <span>7</span>
              <p>Projects Built</p>
            </div>
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Home;
