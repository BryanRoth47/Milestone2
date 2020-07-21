import React from 'react';
import './App.css';

import {Route, Switch } from 'react-router-dom';
import NavBar from './components/navBar';
import HomePage from './components/homePage';
import InternshipPage from './components/internshipPage';
import Footer from './components/footer';

function App() {
  return (
    <React.Fragment>
      
      <NavBar />

      <Switch className="pageContent">
        <Route path="/software-engineering-internship">
          <InternshipPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>

      <Footer />
      
    </React.Fragment>
  );
}

export default App;