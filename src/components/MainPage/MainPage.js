import React from "react";
import Nav from "../Navbar/Navbar";
import Header from "./Header/Header";
import About from "./About/About";
import Footer from "../Footer/Footer";
const MainPage = () => (
  <div>
    <div className="">
      <Nav />
      <header className="header">
        <Header />
      </header>
      <About />
    </div>
    <Footer />
  </div>
);

export default MainPage;
