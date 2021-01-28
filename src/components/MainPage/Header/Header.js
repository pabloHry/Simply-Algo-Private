import React from "react";
import Logo from "../../../dist/img/SA.png";
import Livre from "./Livre";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="page p-5 d-flex container">
    <div className="book">
      <Livre />
    </div>
    <div className="">
      <div className="col-6 text-center float-right">
        <img src={Logo} className="logo mx-auto d-block" alt="" />
        <h4 className="text-dark titre">
          Apprends un langage informatique gratuitement tout en t'amusant.
        </h4>
        <div className="button">
          <h5 class="btn orange">
            <Link to="/langage" className="cestparti">
              C'est parti
            </Link>
          </h5>
          <a href="/connexion" class="btn blank text-dark">
            J'ai déjà un compte
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
