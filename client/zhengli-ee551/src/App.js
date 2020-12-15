// import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Profile from './components/Profile'
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Experiences from './components/Experiences';


function App() {
  return (
    <Router>
      <Route path='/' component={Header}/>
      <Route exact path='/' component={Home}/>
      {/* <Route path='/'  component={Profile}/>
      <Route path='/'  component={Experiences}/> */}
      <Route path='/' component={Footer}/>
    </Router>
  );
}

export default App;
