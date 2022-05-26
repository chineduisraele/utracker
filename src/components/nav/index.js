import React from "react";
import "./sass/index.css";
import logo from "../../images/logo.png";
import {
  FaAngleDown,
  FaSearch,
  FaBars,
  FaGlobe,
  FaTimes,
} from "react-icons/fa";

const navData = [
  {
    Shipping: [
      "Ship Quick & Simple",
      "Shipping Tools",
      "Get Transit Times",
      "Schedule & Manage Pickups",
      "Packaging & Shipping Supplies",
      "ALL SHIPPING SERVICES",
    ],
  },
  {
    Tracking: [
      "Advanced Shipment Tracking",
      "Track by Email",
      "Track by Mobile",
      "ALL TRACKING SERVICES",
    ],
  },
  { Support: ["Customs Tools", "Locations", "CONTACT US"] },
  { Account: ["My Profile", "Address Book", "OPEN AN ACCOUNT"] },
];

const Nav = () => {
  return (
    <>
      {/* overlay for large screen dropdown */}
      <div
        className="navoverlay"
        onClick={({ currentTarget: c }) => {
          c.classList.remove("open");
        }}
      ></div>

      {/* navbar */}
      <nav>
        <div className="inner d-flex aic jcc">
          <img src={logo} alt={logo} />

          <span className="d-flex aic lang">
            <FaGlobe /> NG
          </span>

          {/* toggle */}
          <button
            className="d-flex aic toggle"
            onClick={({ currentTarget: c }) => {
              c.parentElement.parentElement.classList.toggle("fixed");
              c.classList.toggle("open");
            }}
          >
            <FaBars className="svgbars" />
            <FaTimes className="svgclose" />
          </button>

          {/* dropdown */}
          <div className="dropdown">
            <ul className="mainul">
              {navData.map((it, id) => {
                return (
                  <li
                    key={id}
                    className="p-rel"
                    onClick={({ currentTarget: c }) => {
                      // close other active elements
                      let activeLi = c.parentElement.querySelector("li.active");
                      // check if active li is current target
                      activeLi !== c && activeLi?.classList.remove("active");

                      // toggle overlay
                      if (activeLi === null || activeLi !== c) {
                        document
                          .querySelector(".navoverlay")
                          .classList.add("open");
                      } else {
                        document
                          .querySelector(".navoverlay")
                          .classList.remove("open");
                      }

                      c.classList.toggle("active");

                      // close search form
                      c.parentElement.parentElement
                        .querySelector(".searchicon")
                        .classList.remove("open");
                    }}
                  >
                    {Object.keys(it)[0]} <FaAngleDown />
                    <ul>
                      {Object.values(it)[0].map((item, ind) => (
                        <li key={ind}>
                          <a href="#">{item}</a>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ul>

            {/* lang */}
            <span className="d-flex aic lang">
              <FaGlobe /> NG
            </span>

            {/* search icon */}
            <button
              className="searchicon d-flex aic jcc"
              onClick={({ currentTarget: c }) => {
                let overlay = document.querySelector(".navoverlay");
                c.classList.toggle("open");
                // toggle overlay
                c.classList.contains("open")
                  ? overlay.classList.add("open")
                  : overlay.classList.remove("open");

                c.parentElement
                  .querySelector("li.active")
                  .classList.remove("active");
              }}
            >
              <FaSearch className="search" /> <FaTimes className="close" />
            </button>

            {/* search from */}
            <form className="searchform">
              <input
                type="search"
                name="search"
                placeholder="Enter your tracking number"
              />
              <button type="submit" className="d-flex aic jcc">
                <FaSearch />
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
