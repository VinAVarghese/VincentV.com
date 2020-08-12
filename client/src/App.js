import React from 'react';
import Navbar from "./components/Navbar/navbar"
import Home from "./pages/Home/Home"
import Resume from "./pages/Resume/Resume"
import Portfolio from "./pages/Portfolio/Portfolio"
import Contact from "./pages/Contact/Contact"
import NotFound from "./pages/NotFound/NotFound"
import Footer from "./components/Footer/footer"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';


function App() {
  return (
    <Router>
    <main id="page-content">
    <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/resume">
          <Resume />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="*">
          <NotFound />
        </Route>
      </Switch>

    </main>
    <Footer />
    </Router>
    

  );
}

export default App;
