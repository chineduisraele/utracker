import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaGlobe,
} from "react-icons/fa";
import "./sass/index.css";

const Footer = () => {
  return (
    <>
      <footer className="one">
        <div className="inner">
          {/* About */}
          <div className="about">
            <h3>OUR COMPANY</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
              minus ab excepturi qui? Illum minus recusandae eligendi suscipit
              optio. Id repellat laudantium rem ullam quae eius praesentium modi
              optio labore.
            </p>
          </div>
          {/* follow */}
          <div className="follow d-flex aic">
            <div className="followlinks">
              <h3>FOLLOW COMPANY</h3>
              <div>
                <a href="#">
                  <FaFacebook style={{ color: "#0e5998" }} />
                </a>
                <a href="#">
                  <FaTwitter style={{ color: "#2ea8e0" }} />
                </a>
                <a href="#">
                  <FaInstagram style={{ color: "#2ea8e0" }} />
                </a>
                <a href="#">
                  <FaLinkedin style={{ color: "#077bb8" }} />
                </a>
                <a href="#">
                  <FaYoutube style={{ color: "#eb2227" }} />
                </a>
              </div>
            </div>
            <div className="country">
              <h3>COUNTRY</h3>
              <span>
                <FaGlobe /> Nigeria, Ghana, Kenya, UK, USA
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* two */}
      <footer className="two">
        <div className="inner d-flex aic">
          <span>&copy; uTracker 2022</span>
          <span>Terms of Use</span>
          <span>Security and Privacy</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
