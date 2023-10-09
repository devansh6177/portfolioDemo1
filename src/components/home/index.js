import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo-s.png";
import "./index.scss";
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Loader from "react-loaders";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["e", "v", "a", "n", "s", "h"];
  const jobArray = [
    "s",
    "o",
    "f",
    "t",
    "w",
    "a",
    "r",
    "e",
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
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 6000);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["H", "i", ","]}
              index={11}
            />
            <br />

            <AnimatedLetters
              letterClass={letterClass}
              strArray={["I", "'", "m"]}
              index={16}
            />
            <img src={Logo} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              index={22}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              index={31}
            />
          </h1>
          <h2>Web App Developer / Mobile App Developer / Javascript Expert </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
