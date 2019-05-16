import React, { Component } from 'react';
import axios from 'axios';

export default class SignIn extends Component {
    state = {
        username:'',
        password:''
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const endpoint = 'http://localhost:6500/api/auth/login'

        axios.post(endpoint, this.state)
        .then(res => {
            localStorage.getItem('jwt', res.data.token);
            this.props.history.push('/users');
        })
        .catch(err => { console.log(err)});
    }

  render() {
    return (
      <div>
        <h2>Sign In Here</h2>

        <form onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor='username' />
                <input 
                    name="username"
                    id="username"
                    type="text"
                    placeholder="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
            </div>
            <br/>
            <br/>
            <div>
                <label htmlFor='password' />
                <input 
                    name="password"
                    id="password"
                    type="text"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                />
            </div>
            <div>
                <button type="submit">Sign In</button>
            </div>
        </form>
      </div>
    )
  }
}
