import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Errorpage from './pages/Errorpage';
import Subnav from './components/Subnav';
import Navibar from './components/Navibar';
import Footer from './components/Footer';
import Inventories from './components/Inventories';


function App() {
  return (
    <React.Fragment>
      <Router>
        
        <Subnav />
        <Navibar />
   
        
        <Switch>
          <Route exact path='/' component={Home} /> 
          <Route  path='/about' component={About} /> 
          <Route  path='/contact' component={Contact} /> 
          <Route  path='/error' component={Errorpage} /> 
          <Route  path='/inventories' component={Inventories} /> 
        </Switch>
        <Footer />
      </Router>

    </React.Fragment>
  );
}

export default App;
