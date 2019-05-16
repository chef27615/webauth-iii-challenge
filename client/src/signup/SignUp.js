import React, { Component } from 'react';
import axios from 'axios';

export default class SignUp extends Component {

    state = {
        username:'',
        password:'',
        department:''
    }


    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        const endpoint = 'http://localhost:6500/api/auth/register';
        axios.post(endpoint, this.state)
        .then(res => {
            localStorage.setItem('jwt', res.data.token);
            this.props.history.push('/users');
        })
        .catch(err => {
            console.log(err)
        })
    }

  render() {
    return (
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor="username" />
                <input 
                    name="username"
                    id="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
            </div>
            <div>
                <label htmlFor="password" />
                <input 
                    name="password"
                    id="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                />
            </div>
            <div>
                <label htmlFor="department" />
                <input 
                    name="department"
                    id="department"
                    value={this.state.department}
                    onChange={this.handleChange}
                />
            </div>
            <div>
                <button type="submit">SingUp</button>
            </div>
        </form>
      </div>
    )
  }
}
