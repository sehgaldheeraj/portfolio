import "./index.scss";
import { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Loader from "react-loaders";
import img1 from "../../assets/images/skillsImages/html5.png";
import img2 from "../../assets/images/skillsImages/css3.png";
import img3 from "../../assets/images/skillsImages/javascript.png";
import img4 from "../../assets/images/skillsImages/typescript.png";
import img5 from "../../assets/images/skillsImages/react.png";
import img6 from "../../assets/images/skillsImages/redux.png";
import img7 from "../../assets/images/skillsImages/mongo.png";
import img8 from "../../assets/images/skillsImages/node.png";
import img9 from "../../assets/images/skillsImages/express.png";
import img10 from "../../assets/images/skillsImages/next.png";
import img11 from "../../assets/images/skillsImages/sass.png";
import img12 from "../../assets/images/skillsImages/tailwind.png";
import img13 from "../../assets/images/skillsImages/gitbash.png";
import img14 from "../../assets/images/skillsImages/cpp.png";
import img15 from "../../assets/images/skillsImages/bootstrap.png";
import img16 from "../../assets/images/skillsImages/postman.png";

const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    return setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);
  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["S", "k", "i", "l", "l", "s"]}
              idx={15}
            />
          </h1>
          <p>
            Expert in front-end development including technologies like{" "}
            <span>HTML5</span>,<span>CSS3</span>,<span> JavaScript</span>,
            <span> jQuery</span>,<span> Bootstrap</span>,<span> ReactJS</span>,
            <span> Redux</span>,<span> TypeScript</span>, etc.
          </p>
          <p>
            Proficient in back-end development including technologies like
            <span>NodeJS</span>,<span> ExpressJS</span>,<span> MongoDB</span>,
            <span> Mongoose ODM</span>,<span> JWT tokens</span>,
            <span> passport</span>, and more.
          </p>
          <p>
            Not really a designer but I have a good sense of aesthetics, and
            experience in responsive, fully-scalable mobile-first web
            development. I can provide code optimizations and providing best
            practices for user experience, also making sure the code is easy to
            read and maintain with at the point modulary.
          </p>
          <p>
            I also have good problem solving skills in{" "}
            <span>Data Structures and Algorithms</span> and <span>OOP</span>{" "}
            using <span>C++</span>. Having solved more than{" "}
            <span>300 problems</span>, I never let DSA problems sweat me out.
          </p>
        </div>
        <div className="skill-cube-cont">
          <div className="grid-container">
            <div className="skill-icon-cont animate__animated animate__jackInTheBox animate__delay-2s">
              <img className="skill-icon" src={img1} alt="HTML" />
            </div>
            <div className="skill-icon-cont animate__animated animate__jackInTheBox animate__delay-2s">
              <img className="skill-icon" src={img2} alt="CSS" />
            </div>
            <div className="skill-icon-cont animate__animated animate__jackInTheBox animate__delay-2s">
              <img className="skill-icon" src={img3} alt="JavaScript" />
            </div>
            <div className="skill-icon-cont animate__animated animate__jackInTheBox animate__delay-2s">
              <img className="skill-icon" src={img4} alt="TypeScript" />
            </div>
            <div className="skill-icon-cont animate__animated animate__jackInTheBox animate__delay-2s">
              <img className="skill-icon" src={img5} alt="React" />
            </div>
            <div className="skill-icon-cont animate__animated animate__jackInTheBox animate__delay-2s">
              <img className="skill-icon" src={img6} alt="Redux" />
            </div>
            <div className="skill-icon-cont animate__animated animate__jackInTheBox animate__delay-2s">
              <img className="skill-icon" src={img7} alt="Mongo" />
            </div>
            <div className="skill-icon-cont animate__animated animate__jackInTheBox animate__delay-2s">
              <img className="skill-icon" src={img8} alt="NodeJS" />
            </div>
            <div className="skill-icon-cont animate__animated animate__jackInTheBox animate__delay-2s">
              <img className="skill-icon" src={img9} alt="Express" />
            </div>
            <div className="skill-icon-cont animate__animated animate__jackInTheBox animate__delay-2s">
              <img className="skill-icon" src={img10} alt="Next.js" />
            </div>
            <div className="skill-icon-cont animate__animated animate__jackInTheBox animate__delay-2s">
              <img className="skill-icon" src={img11} alt="Sass" />
            </div>
            <div className="skill-icon-cont animate__animated animate__jackInTheBox animate__delay-2s">
              <img className="skill-icon" src={img12} alt="Tailwind.css" />
            </div>
            <div className="skill-icon-cont animate__animated animate__jackInTheBox animate__delay-2s">
              <img className="skill-icon" src={img13} alt="Git Bash" />
            </div>
            <div className="skill-icon-cont animate__animated animate__jackInTheBox animate__delay-2s">
              <img className="skill-icon" src={img14} alt="C++" />
            </div>
            <div className="skill-icon-cont animate__animated animate__jackInTheBox animate__delay-2s">
              <img className="skill-icon" src={img15} alt="Bootstrap" />
            </div>
            <div className="skill-icon-cont animate__animated animate__jackInTheBox animate__delay-2s">
              <img className="skill-icon" src={img16} alt="Postman" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};
export default Skills;
