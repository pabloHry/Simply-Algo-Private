import React from "react";
import LogoC from "../../../dist/img/C.png";
import LogoCplus from "../../../dist/img/Cplus.png";
import LogoP from "../../../dist/img/python.png";
import LogoH from "../../../dist/img/HTML.png";
import LogoJs from "../../../dist/img/js.png";
import LogoPhp from "../../../dist/img/php.png";
import LogoJ from "../../../dist/img/java.png";
import LogoL from "../../../dist/img/lua.png";

const Cards = () => {
  const link = [
    {
      titre: "C",
      Logo: LogoC,
      description: "10,000 apprenants",
    },
    {
      titre: "C++",
      Logo: LogoCplus,
      description: "10,000 apprenants",
    },
    {
      titre: "Python",
      Logo: LogoP,
      description: "10,000 apprenants",
    },
    {
      titre: "HTML/CSS",
      Logo: LogoH,
      description: "10,000 apprenants",
    },
    {
      titre: "JavaScript",
      Logo: LogoJs,
      description: "10,000 apprenants",
    },
    {
      titre: "Php",
      Logo: LogoPhp,
      description: "10,000 apprenants",
    },
    {
      titre: "Java",
      Logo: LogoJ,
      description: "10,000 apprenants",
    },
    {
      titre: "Lua",
      Logo: LogoL,
      description: "10,000 apprenants",
    },
  ];
  return (
    <div className="p-5">
      <h3 className="text-center">Choisir un cours :</h3>
      <div className="row p-5 justify-content-center">
        {link.map(({ titre, Logo, description }, key) => (
          <div className="p-2" key={key}>
            <div className="card p-2">
              <img src={Logo} className="logoC mx-auto d-block p-3" alt="" />
              <div className="card-body">
                <h3 className="card-text text-center bold">{titre}</h3>
                <p className="card-text text-center bold">{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
