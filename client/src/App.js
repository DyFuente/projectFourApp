import React from 'react';

import './App.css';


const getUserFromServer = () =>
  fetch('/api/user/').then(res => res.json())

export default class App extends React.Component {

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
    <div>
      <ul>
        {this.state.user.map(user => (
          <li>
            {user.userName} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  )

}
