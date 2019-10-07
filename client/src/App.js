import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage.js'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import RecipePage from './components/RecipePage.js';
// import SingleUserRecipePage from './components/SingleUserRecipePage.js'
// import CreateRecipe from './components/CreateRecipe.js'
// import EditRecipe from './components/EditRecipe.js'

// import UserList from './components/User.js'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="container test">
        <header>
          <Link to="/" className="navbar-brand">best of NETFLIX!</Link>
        </header>
        <nav className="nabar navbar-expand-lg navbar-light bg-light">
          
            <ul className="navline navbar-nav mr-auto">
              <a href="#">Home</a>
              <a href="#">TV Series</a>
              <a href="#">Movies</a>
              <a href="#">Documentary</a>
            </ul>
    
        </nav>
        <h1>Hello</h1>
        <br/>
        {/* I'm using react router to set the exact paths to my pages */}
        <Switch>
          <Route exact path="/" component={HomePage}/>
          {/* <Route exact path="/single-user/:userId/recipes/createOneRecipe" component={CreateEntry}/> */}
          {/* <Route exact path="/single-recipe/recipe._id/recipes" component={EditRecipe}/>
          <Route exact path="/RecipePage" component={RecipePage}/>
          <Route exact path="/single-user/:userId/recipes" component={SingleUserRecipePage}/> */}
        </Switch>
      </div>
      </Router>
    );
  }
}

// export default class CreateEntry extends Component {

//   constructor(props) {
//     super(props);

//     this.onChange
//   }
// }

export default App;
