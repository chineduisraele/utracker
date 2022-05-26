import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import uthero from "../../images/uthero.jpg";
import ut0 from "../../images/ut0.jpg";
import ut1 from "../../images/ut1.jpg";
import ut2 from "../../images/ut2.jpeg";
import ut3 from "../../images/ut3.png";

import "./sass/index.css";

const customerData = [
    [
      ut1,
      "Customs Made Easier",
      "Learn about all the tools uTracker has to offer for shipping across borders. Prepare and find international documents, estimate duties and taxes, search country profiles, harmonized codes and much more. ",
    ],
    [
      ut2,
      "Open a uTracker account",
      "Benefit from our services and solutions designed to meet all of your shipping needs. Sign up for a uTracker shipping account below.",
    ],
    [
      ut3,
      "uTracker International Priority Express®",
      "More delivery time options are available for your international shipments from January 3, 2022",
    ],
  ],
  svgBtnsData = [
    ["transit", "TRANSIT TIMES"],
    ["track", "TRACK"],
    ["ship", "SHIP"],
  ];

const Home = () => {
  const toggleActiveButton = (c) => {
    let activeBtn = c.parentElement.querySelector(".active");
    if (c !== activeBtn) {
      activeBtn.classList.remove("active");
      !c.classList.contains("active") && c.classList.add("active");
    }
  };
  const [formstate, setFormstate] = useState("track");
  return (
    <main>
      {/* tracker */}
      <article className="track">
        <div className="imgcont">
          <img src={uthero} alt="heroimg" />
        </div>
        {/* inner */}
        <div className="inner d-grid jcc">
          <h1>Where now meets next.</h1>
          <div className="btngrp d-flex aic jcc">
            {svgBtnsData.map(([svg, text], id) => {
              return (
                <button
                  key={id}
                  onClick={({ currentTarget: c }) => {
                    toggleActiveButton(c);
                  }}
                  className={id === 1 ? "active" : ""}
                >
                  <span>
                    <svg className={id === 2 ? "lastsvg" : ""}>
                      <use href={`./svgs.svg#${svg}`} className="svgs"></use>
                    </svg>
                    {text}
                  </span>
                </button>
              );
            })}
          </div>

          <form className="searchform d-flex aic jcc">
            <input type="text" placeholder="Enter your tracking number" />
            <button type="submit">TRACK</button>
          </form>
          <span>
            NEED HELP? <i></i> CONTACT SUPPORT NOW
          </span>
        </div>
      </article>

      <section>
        {/* safety */}
        <article className="safety d-grid">
          <div className="text d-grid">
            <h3>Safety above all</h3>
            <p>
              We recognize the trust you place in us when we deliver to your
              doorstep, shipping dock or place of business. That’s why we want
              to keep you informed on the actions we are taking to keep you –
              and our team members – safe amidst the COVID-19 outbreak.
            </p>
            <button>LEARN MORE</button>
          </div>
          <div className="imgcont">
            <img src={ut0} alt="safety" />
          </div>
        </article>

        {/* updates */}
        <article className="updates d-grid">
          <h3>Changes to EU VAT rules</h3>
          <p>
            The EU is making important changes to its VAT rules on July 1, 2021.
            Learn more about them and how your business could be affected.
          </p>
          <a href="#">GET THE DETAILS</a>
        </article>

        {/* customers */}
        <article className="customers d-grid">
          <h3>When you and your customers need it most</h3>
          <p>
            Global efforts to stop the spread of COVID-19 have changed the
            world—and the way you do business—overnight. We’re here to help your
            business deliver when you and your customers need it most
          </p>

          <div className="cards d-grid">
            {customerData.map(([src, title, text], id) => {
              return (
                <div key={id}>
                  <div className="imgcont p-rel">
                    <img src={src} alt="description" loading="lazy" />
                  </div>
                  <div className="text">
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                  <a href="#" className="d-flex aic">
                    LEARN MORE <FaAngleRight />
                  </a>
                </div>
              );
            })}
          </div>
        </article>
      </section>
    </main>
  );
};

export default Home;
