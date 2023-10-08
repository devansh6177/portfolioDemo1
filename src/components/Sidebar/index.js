import { Link, NavLink } from "react-router-dom";
import "./index.scss";

//images
import Logo from "../../assets/images/logo-s.png";
import LogoName from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  return (
    <>
      <div className="nav-bar">
        <Link className="logo" to="/">
        <img src={Logo} alt="logo" />
          <img src={LogoName} alt="logo" />
        </Link>

        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4d" />
          </NavLink>

          <NavLink
            exact="true"
            activeclassname="active"
            className="about-link"
            to="/about"
          >
            <FontAwesomeIcon icon={faUser} color="#4d4d4d" />
          </NavLink>

          <NavLink
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4d" />
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
    </>
  );
};

export default Sidebar;
