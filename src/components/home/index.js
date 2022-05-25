import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";

import "./sass/index.css";

const Home = () => {
  const [formstate, setFormstate] = useState("track");
  return (
    <main>
      <section>
        {/* tracker */}
        <article>
          <h1>Where now meets next.</h1>
          <div className="btngrp">
            <button>
              <svg></svg>
              GET TRANSIT TIMES
            </button>
            <button>
              <svg></svg>
              TRACK
            </button>
          </div>

          <form>
            <input type="text" />
            <button type="submit">TRACK</button>

            <span>NEED HELP? CONTACT SUPPORT NOW</span>
          </form>
        </article>

        {/* safety */}
        <article>
          <div className="text">
            <h3>Safety above all</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
              doloribus. Tempore natus quam, nihil tenetur excepturi, a unde
              provident repellat similique architecto, explicabo ducimus earum
              ullam minus veritatis porro aperiam?
            </p>
            <button>LEARN MORE</button>
          </div>
        </article>

        {/* updates */}
        <article>
          <p>Import Update to our Customres!</p>
          <p>Lorem20</p>
          <button>LEARN MORE</button>
        </article>

        {/* customers */}
        <article>
          <h3>When you and your customers need it most</h3>
          <p>
            Global efforts to stop the spread of COVID-19 have changed the
            world—and the way you do business—overnight. We’re here to help your
            business deliver when you and your customers need it most
          </p>

          <Card />
        </article>
      </section>
    </main>
  );
};

const Card = ({ src, title, text, buttontext }) => {
  return (
    <div>
      <img src={src} alt="description" />
      <div className="text">
        <h3>{title}</h3>
        <p>{text}</p>
        <button>
          {buttontext} <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default Home;
