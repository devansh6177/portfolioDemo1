import { Link, NavLink } from "react-router-dom";
import "./index.scss";

import { slide as Menu } from "react-burger-menu";

//images
import Logo from "../../assets/images/logo-s.png";
import LogoName from "../../assets/images/logo_sub.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const Sidebar = () => {
  let isOpen = 0,
    disableOverlayClick = 0;

  const [onClickClose,setOnClickClose]=useState(false);

  const onClickHandler=()=>{
    // console.log("closed")
    setOnClickClose((onClickClose)=>!onClickClose);
  }

  const dimensions = {
    height: window.innerHeight,
    width: window.innerWidth,
  };

  if (dimensions.width < 481) {
    isOpen = false;
    disableOverlayClick = false;
  } else {
    isOpen = true;
    disableOverlayClick = true;
  }

  return (
    <>
      <Menu
        width={60}
        isOpen={dimensions.width<481?onClickClose:isOpen}
        disableOverlayClick={disableOverlayClick}
        onOpen={onClickHandler}
        onClose={onClickHandler}
      
      >
        <div className="nav-bar nav-bar-burger">
          <Link className="logo" to="/">
            <img src={Logo} alt="logo" />
            <img src={LogoName} alt="logo" />
          </Link>

          <nav>
            <NavLink exact="true" activeclassname="active" to="/" onClick={onClickHandler}>
              <FontAwesomeIcon icon={faHome} color="#4d4d4d" />
            </NavLink>

            <NavLink
              exact="true"
              activeclassname="active"
              className="about-link"
              to="/about"
              onClick={onClickHandler}
            >
              <FontAwesomeIcon icon={faUser} color="#4d4d4d" />
            </NavLink>

            <NavLink
              exact="true"
              activeclassname="active"
              className="contact-link"
              to="/contact"
              onClick={onClickHandler}
            >
              <FontAwesomeIcon icon={faEnvelope} color="#4d4d4d"
              onClick={onClickHandler} />
            </NavLink>
          </nav>

          <ul>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/devanshmashruwala/"
              >
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4d" />
              </a>
            </li>

            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/devansh6177"
              >
                <FontAwesomeIcon icon={faGithub} color="#4d4d4d" />
              </a>
            </li>

            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/devanshm_1111/"
              >
                <FontAwesomeIcon icon={faInstagram} color="#4d4d4d" />
              </a>
            </li>
          </ul>
        </div>
      </Menu>
    </>
  );
};

export default Sidebar;
