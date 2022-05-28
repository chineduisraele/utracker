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
        <Footer2 />
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
                <a href="#" aria-label="facebook link">
                  <FaFacebook style={{ color: "#0e5998" }} />
                </a>
                <a href="#" aria-label="twitter link">
                  <FaTwitter style={{ color: "#2ea8e0" }} />
                </a>
                <a href="#" aria-label="instagram link">
                  <FaInstagram style={{ color: "#2ea8e0" }} />
                </a>
                <a href="#" aria-label="linkedin link">
                  <FaLinkedin style={{ color: "#077bb8" }} />
                </a>
                <a href="#" aria-label="youtube link">
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
          <span>&copy; Voom 2022</span>
          <span>Terms of Use</span>
          <span>Security and Privacy</span>
        </div>
      </footer>
    </>
  );
};

const Footer2 = () => {
  return (
    <div className=" footerTwo text-c">
      <div className="inner d-grid rg-1 m-auto">
        <p>
          Created by Chinedu Isreale.
          <span>
            <FaLinkedin />
            <a
              href="http://linkedin.com/in/chineduisraele"
              target="_blank"
              rel="noopener noreferrer"
            >
              Profile
            </a>
          </span>
        </p>
        <p>
          This site was inspired by fedEx.com and cointains images obtained from
          the aforementioned site. The images have been left unmodified,
          digitally or otherwise, inorder to give due credit to the authors and
          source. This site is merely a personal project and every image
          contained herein will be taken down in the event of commercialization.
        </p>
      </div>
    </div>
  );
};

export default Footer;
