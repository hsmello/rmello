import React from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';
import { Route } from "react-router-dom";
import ResponsiveMenu from './Menu/ResposiveMenu/ResponsiveMenu';
import Footer from './Footer/Footer';

import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Reading from './Pages/Reading/Reading';
import FAQ from './Pages/FAQ/FAQ';

function App() {

  const { t, i18n } = useTranslation();

  return (
    <div className="page-container">
      <div className="content-wrap">

        <ResponsiveMenu />

        <Route exact path="/" component={Home} />
        <Route exact path="/sobre" component={About} />
        <Route exact path="/contato" component={Contact} />
        <Route exact path="/consultas" component={Reading} />
        <Route exact path="/faq" component={FAQ} />
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
