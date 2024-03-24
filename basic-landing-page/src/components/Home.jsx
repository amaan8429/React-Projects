import React from "react";
import vg from "../assets/se.svg";
import { AiFillAmazonCircle } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillDropboxCircle } from "react-icons/ai";
import { AiFillBehanceCircle } from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Solvator</h1>
          <p>Solution to all your Problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="vector" />
        <div>
          <p>
            We are the solution to your everyday Problems. We can help you start
            ,expand or restructure your business. We can increase your profit
            your 3-4 times.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who are we?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            doloribus fugit minima, tempore nemo repellat est vitae libero
            dolorum animi accusamus, deleniti provident magni rem voluptates
            tenetur, reiciendis iste? Voluptatibus dicta numquam quisquam vero
            facere dignissimos nihil omnis illo repellat quaerat architecto
            totam eius ratione perferendis sed, provident rerum at tenetur
            officiis debitis nam ab. Consectetur debitis voluptate esse
            consequatur voluptates consequuntur corrupti architecto deleniti,
            facere possimus totam unde voluptatibus.
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillTwitterCircle />
              <p>Twitter</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillDropboxCircle />
              <p>DropBox</p>
            </div>
            <div style={{ animationDelay: "1s" }}>
              <AiFillBehanceCircle />
              <p>Behance</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
