import "./index.scss";
import { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters";
import qtrip from "../../assets/images/portfolioImages/qtrip.png";
import qkart from "../../assets/images/portfolioImages/qkart.png";
import qtify from "../../assets/images/portfolioImages/qtify.png";
import qflix from "../../assets/images/portfolioImages/qflix.png";
import taxCalculator from "../../assets/images/portfolioImages/TaxCalculor.png";
import userMgmt from "../../assets/images/portfolioImages/UserMgmt.png";
import Loader from "react-loaders";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    return setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);
  return (
    <>
      <div className="container portfolio-page">
        <div className="text-area">
          <h1 className="page-title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["P", "o", "r", "t", "f", "o", "l", "i", "o"]}
              idx={15}
            />
          </h1>
          <p>
            Here are a few projects I've worked on. Feel free to view the live
            project or the source code.
          </p>
        </div>
        <div className="portfolio-card-cont">
          <div className="images-container">
            <div className="image-box">
              <img
                src={qtrip}
                className="portfolio-image"
                alt="portfolio qtrip"
              />
              <div className="content">
                <p className="title">QTrip</p>

                <a
                  href="https://qtrip-dyna-front.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  <FontAwesomeIcon
                    icon={faEye}
                    color="#4d4d4e"
                    className="anchor-icon"
                  />
                </a>
                <a
                  href="https://github.com/sehgaldheeraj/qtrip-dynamic"
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    color="#4d4d4e"
                    className="anchor-icon"
                  />
                </a>
              </div>
            </div>
            <div className="image-box">
              <img
                src={qkart}
                className="portfolio-image"
                alt="portfolio qkart"
              />
              <div className="content">
                <p className="title">QKart</p>
                <a
                  href="https://qkart-shoppingmadeeasy.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  <FontAwesomeIcon
                    icon={faEye}
                    color="#4d4d4e"
                    className="anchor-icon"
                  />
                </a>
                <a
                  href="https://github.com/sehgaldheeraj/qkart-frontend"
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    color="#4d4d4e"
                    className="anchor-icon"
                  />
                </a>
              </div>
            </div>
            <div className="image-box">
              <img
                src={qtify}
                className="portfolio-image"
                alt="portfolio qtify"
              />
              <div className="content">
                <p className="title">QTify</p>
                <a
                  href="https://github.com/sehgaldheeraj/L-square-QTify"
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  <FontAwesomeIcon
                    icon={faEye}
                    color="#4d4d4e"
                    className="anchor-icon"
                  />
                </a>
                <a
                  href="https://github.com/sehgaldheeraj/L-square-QTify"
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    color="#4d4d4e"
                    className="anchor-icon"
                  />
                </a>
              </div>
            </div>
            <div className="image-box">
              <img
                src={qflix}
                className="portfolio-image"
                alt="portfolio qflix"
              />
              <div className="content">
                <p className="title">Qflix</p>
                <a
                  href="https://github.com/sehgaldheeraj/dheerajsehgal0012-ME_BUILDOUT_XFLIX_NODE"
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  <FontAwesomeIcon
                    icon={faEye}
                    color="#4d4d4e"
                    className="anchor-icon"
                  />
                </a>
                <a
                  href="https://github.com/sehgaldheeraj/dheerajsehgal0012-ME_BUILDOUT_XFLIX_NODE"
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    color="#4d4d4e"
                    className="anchor-icon"
                  />
                </a>
              </div>
            </div>
            <div className="image-box">
              <img
                src={taxCalculator}
                className="portfolio-image"
                alt="portfolio tc"
              />
              <div className="content">
                <p className="title">Tax Calculator</p>

                <a
                  href="https://tax-calculator-chi-ten.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  <FontAwesomeIcon
                    icon={faEye}
                    color="#4d4d4e"
                    className="anchor-icon"
                  />
                </a>
                <a
                  href="https://github.com/sehgaldheeraj/tax-calculator"
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    color="#4d4d4e"
                    className="anchor-icon"
                  />
                </a>
              </div>
            </div>
            <div className="image-box">
              <img
                src={userMgmt}
                className="portfolio-image"
                alt="portfolio mgmt"
              />
              <div className="content">
                <p className="title">User Manager</p>
                <a
                  href="https://user-mgmt-dashboard.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  <FontAwesomeIcon
                    icon={faEye}
                    color="#4d4d4e"
                    className="anchor-icon"
                  />
                </a>
                <a
                  href="https://github.com/sehgaldheeraj/user-mgmt-dashboard"
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    color="#4d4d4e"
                    className="anchor-icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Portfolio;
