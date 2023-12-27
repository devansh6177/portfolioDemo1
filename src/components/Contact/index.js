import Loader from "react-loaders";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters/index";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const refForm = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_27mupdi",
        "template_dkd1ftp",
        refForm.current,
        "VN6kOdhY4vNydJ_7v"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          window.location.reload(true);
        },
        () => {
          alert("Failed to send the message, please try again!");
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              index={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li className="">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li className="">
                  <textarea name="message" placeholder="Message" required />
                </li>
                <li className="">
                  <input type="submit" className="flat-button" value="Send" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        
        <div className="map-wrap part-2">
        <div className="info-map">
          Devansh Mashruwala,
          <br />
          Canada,
          <br />
          786 Thunderlake Blvd
          <br />
          Brampton
          <br />
          <span>devansh6177@gmail.com</span>
        </div>
          <MapContainer
            center={[43.65718393447726, -79.73631892249675]}
            zoom={20}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[43.65718393447726, -79.73631892249675]}>
              <Popup className="pop-up">
                Devansh lives here, come over for a cup of coffee :)
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Contact;
