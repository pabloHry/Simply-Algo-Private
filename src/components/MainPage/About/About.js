import React from "react";
import Loutre from "../../../dist/img/loutrelogo.png";

const About = () => (
  <div class="text-white">
    <div className="about ">
      <div className="container p-5">
        <div className="justify-content-center row">
          <div className="col-sm-2">
            <img src={Loutre} alt="" className="loutre" />
          </div>
          <div className="col-sm-6">
            <h3 className="">La meilleure façon d'apprendre une langue.</h3>
            <p className="lead">
              Apprendre avec SimplyAlgo, c'est amusant et captivant. <br />
              Nos leçons sont à la fois courtes et efficaces, et on a la preuve
              que ça marche.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
