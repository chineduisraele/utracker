import React from "react";
import "./sass/index.css";
import logo from "../../images/logo.png";
import { FaAngleDown, FaSearch, FaBars, FaGlobe } from "react-icons/fa";

const navData = [
  {
    Shipping: [
      "Ship All Features",
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
    <nav>
      <div className="inner d-flex aic jcc">
        <img src={logo} alt={logo} />

        <span className="d-flex aic lang">
          <FaGlobe /> NG
        </span>

        {/* toggle */}
        <button
          className="d-flex aic toggle"
          onClick={({ currenttarget: c }) => {
            c.nextSibling.classList.toggle("open");
          }}
        >
          <FaBars />
        </button>

        {/* dropdown */}
        <div className="dropdown open">
          <ul className="mainul">
            {navData.map((it, id) => {
              return (
                <li
                  key={id}
                  className="p-rel"
                  onClick={({ currentTarget: c }) => {
                    c.parentElement.childNodes.forEach((e) => {
                      if (e !== c) {
                        e.classList.remove("active");
                      }
                    });
                    c.classList.toggle("active");
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

          <span className="d-flex aic lang">
            <FaGlobe /> NG
          </span>

          <form className="d-flex aic">
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
  );
};

export default Nav;
