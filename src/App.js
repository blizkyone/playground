import React from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import LargeDivScroll from './LargeDivScroll'
import NavBar from './NavBar'
import Logins from './Logins'

function App() {

  return (
    <div className="app">
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            Welcome, selecciona algo del navbar
          </Route>
          <Route path="/scroll">
            <LargeDivScroll/>
          </Route>
          <Route path="/logins">
            <Logins/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
