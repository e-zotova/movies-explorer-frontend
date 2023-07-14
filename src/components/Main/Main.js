import React from 'react';
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import Promo from './Promo/Promo.js';
import NavTab from './NavTab/NavTab.js';
import AboutProject from './AboutProject/AboutProject.js';
import Techs from './Techs/Techs.js';
import AboutMe from './AboutMe/AboutMe.js';
import Portfolio from './Portfolio/Portfolio.js';

function Main({loggedIn}) {

  return (
    <main className="main">
      <Header loggedIn={loggedIn} className="header" />
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer className="footer" />
    </main>
  );
}

export default Main;