import React from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';

import { Switch, Route } from "react-router-dom";

import Navbar from './components/Navbar';
function App() {
  return (
    <>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about/" component={About} />
    <Route exact path="/contact" component={Contact} />
    <Route component={Error} />
    </Switch>
    </>
  );
}

export default App;
