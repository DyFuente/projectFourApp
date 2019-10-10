import React from 'react';
// import { BrowserRouter as Link, Router, Switch, Route } from 'react-router-dom'
// import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NewEntryForm from './NewEntryForm.js'
import { Link } from 'react-router-dom';

const getUserFromServer = () =>

fetch('/api/user/').then(response => response.json())

class NewUserForm extends React.Component {
  state ={
    userName: "",
    email: ""
  }
  handleInput = (evnt) => {
    let newUser = {...this.state}
    newUser[evnt.target.name] = evnt.target.value;
    this.setState(newUser)
  }
  handleSubmit = (evnt) => {
    evnt.preventDefault();
    this.addNewUser(this.state)
  }

  addNewUser = (newUser) => 
       fetch('/api/user/',
       {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(newUser)
       }).then(res => res.json())

  render = () => (
    <form onSubmit = {this.handleSubmit} >
      <input type="text"
      name="userName"
      onChange={this.handleInput}
      value={this.state.userName}
      placeholder="Enter Username"
      />
       <input type="text"
      name="email"
      onChange={this.handleInput}
      value={this.state.email}
      placeholder="Enter Email"
      />
      <input type="submit" value="ADD"/>
    </form>
  )
}


export default class HomePage extends React.Component {

  state = {
    user: [],
  }

  componentDidMount = () => {
    getUserFromServer().
      then(user => {
        this.setState({ user })
      })
  }
  render = () => (
    <div style={{color: "white"}}>
       User: <NewUserForm />
      <ul>
        {this.state.user.map(user => (
          <li>
            <Link to={`/newEntry/${user.id}/`}>
            <h4 style={{color: "white"}} >{user.userName}</h4>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )

}