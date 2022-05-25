import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaGlobe } from "react-icons/fa";
import "./sass/index.css";

const Footer = () => {
  return (
    <>
      <footer className="one">
        <div className="inner">
          {/* About */}
          <div className="first">
            <h3>OUR COMPANY</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
              minus ab excepturi qui? Illum minus recusandae eligendi suscipit
              optio. Id repellat laudantium rem ullam quae eius praesentium modi
              optio labore.
            </p>
          </div>
          {/* follow */}
          <div className="second d-flex aic">
            <div className="follow">
              <h3>FOLLOW COMPANY</h3>
              <span>
                <FaFacebook />
              </span>
              <span>
                <FaTwitter />
              </span>
              <span>
                <FaInstagram />
              </span>
            </div>
            <div className="language">
              <h3>LANGUAGE</h3>
              <span>
                <FaGlobe /> Nigeria
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* two */}
      <footer className="two">
        <div className="third d-flex aic">
          <span>&copy; company name 2022</span>
          <span>Terms of Use</span>
          <span>Security and Privacy</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
