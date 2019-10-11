import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage.js'
import SingleEntryPage from './components/SingleEntryPage'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import SingleUser from './components/SingleUser.js';
import Footer from './components/Footer.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container test">
          <header>
            <img src="/projectFourLogo.jpg" />

          </header>
          <nav className="nabar navbar-expand-lg navbar-light bg-light">

            <ul className="navline navbar-nav mr-auto">
              <a href="/">Home</a>
            </ul>

          </nav>
          <br />
          {/* I'm using react router to set the exact paths to my pages */}
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/newEntry/:id" component={SingleUser} />
            <Route exact path="/:id/singleEntry" component={SingleEntryPage} />
          </Switch>
        </div>
      </Router>

    );

  }
}

export default App;
