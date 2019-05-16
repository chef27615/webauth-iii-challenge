import React, { Component } from 'react';
import axios from 'axios';

export default class SignUp extends Component {

    state = {
        name:'',
        password:'',
        department:''
    }


    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const endpoint = 'http://localhost:6500/api/auth/register';
        axios.post(endpoint, this.state)
        .then(res => {
            // localStorage.setItem('jwt', res.data.token);
            // this.props.history.push('/users');
            alert('thank you')
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
                <label htmlFor="name" />
                <input 
                    name="name"
                    id="name"
                    placeholder="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
            </div>
            <div>
                <label htmlFor="password" />
                <input 
                    name="password"
                    id="password"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                />
            </div>
            <div>
                <label htmlFor="department" />
                <input 
                    name="department"
                    id="department"
                    placeholder="department"
                    value={this.state.department}
                    onChange={this.handleChange}
                />
            </div>
            <div>
                <button type="submit">SignUp</button>
            </div>
        </form>
      </div>
    )
  }
}
