import React from "react";

const Nav = () => (
  <div>
    <div className="navbar navbar-dark text-white">
      <a className="float-left p-3 my-2 simplyAlgo" href="/">
        SimplyAlgo
      </a>
      <div>
        <div className="float-right p-2 my-2 align-self-center siteLangage">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Nav;
