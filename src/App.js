import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import Langage from "./components/Langage/Langage";
import PageDeConnexion from "./components/PageDeConnexion/PageDeConnexion";
import Test from "./components/CourC/CourC.js";
import "bootstrap/dist/css/bootstrap.css";
import "./dist/css/NavbarCss.css";
import "./dist/css/Footer.css";
import "./dist/css/Livre.css";
import "./dist/css/About.css";
import "./dist/css/Header.css";
import "./dist/css/Card.css";
import "./dist/css/Global.css";
import "./dist/css/Connexion.css";
import "./dist/css/Test.css";

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Route exact path="/" component={MainPage} />
      <Route path="/langage" component={Langage} />
      <Route path="/connexion" component={PageDeConnexion} />
      <Route path="/test" component={Test} />
    </div>
  </BrowserRouter>
);

export default App;
