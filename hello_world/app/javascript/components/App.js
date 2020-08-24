import React, { Component } from "react";
import {
  BrowserRouter as  Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom';

import AboutMe from './pages/AboutMe'
import Home from './pages/Home'
import Projects from './pages/Projects'
import {
  Nav, 
  NavItem
} from 'reactstrap'

import PropTypes from "prop-types";

class App extends React.Component {
  render() {
    return ( 
     <Router>
       <Nav>
         <NavItem>
           <NavLink to="/" >Home</NavLink>
         </NavItem>
         <NavItem>
           <NavLink to="/AboutMe" >About Me</NavLink>
         </NavItem>
         <NavItem>
           <NavLink to="/Projects" >Projects</NavLink>
         </NavItem>
       </Nav>
       
       <Switch>
         <Route exact path="/" component={ Home } />
         <Route path="/AboutMe" component={ AboutMe } />
         <Route path="/Projects" component={ Projects } />
       </Switch>
     </Router>
    );
  }
}

export default App