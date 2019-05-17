import React, { Component } from 'react';
import axios from 'axios';
import requiresAuth from '../auth/requiresAuth';

class Users extends Component {

    state = {
        users: []
    }

  render() {
    return (
      <div>
          <h2>List of Users</h2>
          <ul>
              {this.state.users.map(user => 
                <li key={user.id}>{user.name}</li>
                )}
          </ul>
      </div>
    )
  }

  componentDidMount(){

      axios.get('http://localhost:6500/api/users')
      .then(res => {
          this.setState({ users: res.data })
      })
  }
}

export default requiresAuth(Users);