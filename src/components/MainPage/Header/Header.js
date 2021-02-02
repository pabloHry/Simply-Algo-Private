import React from "react";
import { Link } from "react-router-dom";
import Loutre from "../../../dist/img/loutrelogo.png";

const Header = () => (
  <div className="pad">
    <div className="page p-5 d-flex container">
      <div className="text-center p-5 col-xl-6">
        <h3 className="titre">
          Apprends un langage informatique gratuitement tout en t'amusant.
        </h3>
        <div className="button p-5">
          <h5 class="btn orange">
            <Link to="/langage" className="cestparti">
              C'est parti
            </Link>
          </h5>
        </div>
      </div>
      <div className="col-xl-6 p-5">
        <div className="juju">
          <p className="text-center titres">Hello je m'appelle Loudev</p>
        </div>
        <img className="loutrelogo" src={Loutre} alt="" />
      </div>
    </div>
  </div>
);

export default Header;
